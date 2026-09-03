import { CardsDataContext } from '../../Context/CardsDataContextProvider';
import React, { useContext } from 'react'
import './search.css'
import { useLocation, useNavigate } from 'react-router-dom';


const Search = ({ children }) => {

  const videos = useContext(CardsDataContext);
  const navigate = useNavigate();

  const location = useLocation();

  const searchText = location.state?.searchText || '';

  const filteredVideos = videos.filter((val) =>
    val.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className='srchMain'>

      {filteredVideos.map((val, idx) => {
        return (
          <div className='flex cursor-pointer' key={idx} onClick={() => navigate(`/watch/${val.id}`)}>
            <img width={220} height={133.093017578125} src={val.thumbnail} alt="image" />
            <div className='srchTitDiv'>
              <p className='srchTitle'>{val.title}</p>
              <p className='srchPara'>{val.views} • {val.time}</p>
              <div className='flex items-center gap-2'>
                <img className='srchprofile' src={val.profile} alt="pr" />
                <p>{val.author}</p>
              </div>
              <p className='para'>Lorem ipsum dolor sit amet consectetur. Sagittis egestas justo adipiscing integer.</p>
            </div>
          </div>
        )
      })}

    </div>
  )
}

export default Search