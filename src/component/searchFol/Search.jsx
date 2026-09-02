import { CardsDataContext } from '../../Context/CardsDataContextProvider';
import React, { useContext } from 'react'
import './search.css'
import { useLocation } from 'react-router-dom';


const Search = ({ children }) => {

  const videos = useContext(CardsDataContext);

  const location = useLocation();

  const searchText = location.state?.searchText || '';

  const filteredVideos = videos.filter((val) =>
    val.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className='srchMain'>

      {filteredVideos.map((val, idx) => {
        return (
          <div className='flex' key={idx}>
            <img width={220} height={133.093017578125} src={val.thumbnail} alt="image" />
            <div>
              <p>{val.title}</p>
              <p>{val.views} • {val.time}</p>
              <div className='flex'>
                <img className='srchprofile' src={val.profile} alt="pr" />
                <p>{val.author}</p>
              </div>
            </div>
          </div>
        )
      })}

    </div>
  )
}

export default Search