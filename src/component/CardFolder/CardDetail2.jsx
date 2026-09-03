import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CardsDataContext } from '../../Context/CardsDataContextProvider'

const RecommendedRow = ({ video }) => {
  const navigate = useNavigate()

  return (
    <div
      className='flex gap-3 cursor-pointer'
      onClick={() => navigate(`/watch/${video.id}`)}
    >
      <div className='w-[150px] h-[84px] rounded-[10px] overflow-hidden shrink-0 bg-gray-800'>
        {video.thumbnail && (
          <img src={video.thumbnail} alt="thumb" className='w-full h-full object-cover' />
        )}
      </div>
      <div className='flex-1 flex flex-col gap-1 min-w-0'>
        <p className='text-white text-[13px] font-semibold m-0 line-clamp-2'>{video.title}</p>
        <p className='text-gray-400 text-[11px] m-0'>{video.author}</p>
        <p className='text-gray-400 text-[11px] m-0'>{video.views} • {video.time}</p>
      </div>
    </div>
  )
}

const CardDetail2 = () => {
  const videos = useContext(CardsDataContext)

  const recommended = videos.slice(0, 8)

  return (
    <div className='w-[320px] shrink-0 p-6 pl-2 overflow-y-auto border-l border-gray-800 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden'>
      <h3 className='text-white text-lg font-bold mb-4 m-0'>Recommended</h3>
      <div className='flex flex-col gap-4'>
        {recommended.map((v) => (
          <RecommendedRow key={v.id} video={v} />
        ))}
      </div>
    </div>
  )
}

export default CardDetail2