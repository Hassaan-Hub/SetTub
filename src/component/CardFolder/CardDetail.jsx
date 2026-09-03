import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CardsDataContext } from '../../Context/CardsDataContextProvider'

const FALLBACK = {
  title: "Video not found",
  views: "0 Views",
  time: "Just now",
  author: "Unknown",
  thumbnail: null,
  profile: null,
  likes: 0,
  dislikes: 0,
  followerCount: "0 Followers",
  followChannelName: "Unknown",
  description: "This video could not be found.",
  comments: []
}

const CardDetail = () => {
  const videos = useContext(CardsDataContext)
  const { videoId } = useParams()
  const [expanded, setExpanded] = useState(false)

  const video = videos.find((v) => String(v.id) === String(videoId))

  if (!video) {
    return (
      <div className='flex-1 flex items-center justify-center text-gray-400 text-lg'>
        Video not found
      </div>
    )
  }

  const comments = video.comments && video.comments.length > 0
    ? video.comments
    : FALLBACK.comments

  const description = video.description || FALLBACK.description

  return (
    <div className='flex-1 overflow-y-auto p-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden'>
      <div className='max-w-[900px] mx-auto flex flex-col gap-4'>

        {/* Player block */}
        <div className='relative w-full aspect-video rounded-2xl overflow-hidden flex items-center justify-center'>
          <div className='absolute inset-0 bg-gradient-to-br from-teal-500/40 via-purple-500/40 to-pink-500/40'></div>
          {video.thumbnail && (
            <img src={video.thumbnail} alt="thumbnail" className='absolute inset-0 w-full h-full object-cover' />
          )}
          <span className='absolute top-3 left-3 z-10 bg-black/70 text-white text-xs font-semibold px-3 py-1 rounded-full'>
            Part 1
          </span>
          <div className='w-[72px] h-[72px] rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center z-10 cursor-pointer'>
            <i className="ri-play-fill text-white text-3xl"></i>
          </div>
          <h2 className='absolute bottom-6 left-5 z-10 text-white text-xl font-bold m-0'>
            How to get started
          </h2>
          <div className='absolute bottom-0 left-0 right-0 h-[5px] bg-black/50 z-10'>
            <div className='h-full w-2/5 bg-gray-200'></div>
          </div>
        </div>

        {/* Info card */}
        <div className='bg-[#111111] border border-gray-800 rounded-2xl px-5 py-4'>
          {/* Row 1: title + actions */}
          <div className='flex items-start justify-between gap-4'>
            <h1 className='text-white text-lg font-bold m-0 flex-1'>{video.title}</h1>
            <div className='flex items-center gap-2.5 shrink-0'>
              <div className='flex items-center gap-2.5 bg-[#1f1f1f] border border-gray-800 rounded-full px-4 py-2 text-white text-sm font-medium'>
                <span className='inline-flex items-center gap-1.5'>
                  <i className="ri-thumb-up-line"></i> {video.likes}
                </span>
                <span className='w-px h-5 bg-gray-700'></span>
                <span className='inline-flex items-center gap-1.5'>
                  <i className="ri-thumb-down-line"></i> {video.dislikes}
                </span>
              </div>
              <button type="button" className='inline-flex items-center gap-2 bg-transparent text-white border border-gray-700 rounded-full px-4 py-2 text-sm cursor-pointer'>
                <i className="ri-bookmark-line"></i>
                <span>Save</span>
              </button>
              <button type="button" className='w-10 h-10 flex items-center justify-center bg-transparent text-white border border-gray-700 rounded-full cursor-pointer'>
                <i className="ri-more-2-fill"></i>
              </button>
            </div>
          </div>

          {/* Row 2: meta */}
          <div className='mt-2.5'>
            <p className='text-gray-400 text-[13px] m-0'>109,067 Views • {video.time}</p>
          </div>

          <div className='h-px bg-gray-800 my-3.5'></div>

          {/* Row 3: channel + follow */}
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-3'>
              <img className='w-11 h-11 rounded-full object-cover' src={video.profile} alt="channel" />
              <div className='flex flex-col'>
                <p className='text-white text-[15px] font-bold m-0'>{video.followChannelName}</p>
                <p className='text-gray-400 text-xs m-0'>{video.followerCount}</p>
              </div>
            </div>
            <button type="button" className='inline-flex items-center gap-2 bg-[#AE7AFF] text-white border-none rounded-full px-5 py-2 text-sm font-semibold cursor-pointer shadow-[2px_4px_#38333F]'>
              <i className="ri-user-add-line"></i>
              <span>Subscribe</span>
            </button>
          </div>

          <div className='h-px bg-gray-800 my-3.5'></div>

          {/* Row 4: description */}
          <div className='flex items-start gap-2'>
            <p className={`text-gray-300 text-sm whitespace-pre-line flex-1 m-0 ${expanded ? '' : 'line-clamp-2'}`}>
              {description}
            </p>
            <button
              type="button"
              className='bg-transparent border-none text-gray-400 text-xl cursor-pointer shrink-0'
              onClick={() => setExpanded(!expanded)}
              aria-label="expand description"
            >
              <i className={`ri-arrow-down-s-line ${expanded ? 'rotate-180' : ''}`}></i>
            </button>
          </div>
        </div>

        {/* Comments card */}
        <div className='bg-[#111111] border border-gray-800 rounded-2xl px-5 py-4'>
          <h3 className='text-white text-lg font-bold mb-4 m-0'>5034 Comments</h3>

          <div className='flex items-center gap-3 mb-4'>
            <img className='w-9 h-9 rounded-full object-cover shrink-0' src={video.profile} alt="you" />
            <input
              type="text"
              className='flex-1 bg-[#1f1f1f] border border-gray-700 rounded-full px-4 py-2.5 text-white outline-none placeholder:text-gray-400'
              placeholder='Add a comment'
            />
          </div>

          <div className='h-px bg-gray-800 my-3.5'></div>

          <div className='flex flex-col gap-5'>
            {comments.map((c) => (
              <div className='flex gap-3' key={c.id}>
                <div
                  className='w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0'
                  style={{ backgroundColor: c.avatarColor || '#6b7280' }}
                >
                  {c.name.charAt(0)}
                </div>
                <div className='flex-1'>
                  <div className='flex items-center gap-2.5 mb-1'>
                    <span className='text-white text-sm font-bold'>{c.name}</span>
                    <span className='text-gray-400 text-xs'>{c.time}</span>
                    <span className='text-gray-400 text-xs'>{c.handle}</span>
                  </div>
                  <p className='text-gray-300 text-sm m-0'>{c.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default CardDetail
