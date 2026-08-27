import React, { useContext } from 'react'
import './Cards.css'
import { CardsDataContext } from '../../Context/CardsDataContextProvider'

const Cards = ({ children }) => {

    const videos = useContext(CardsDataContext)



    return (
        <div className='cards'>
            {videos.map((val, idx) => {
                return <div className='singleCard' key={idx}>
                    <img width={220} height={133.093017578125} src={val.thumbnail} alt="image" />
                    <div className='singleCardDiv'>
                        <img className='profile' src={val.profile} alt="pr" />
                        <p className='divTitle'>{val.title}</p>
                    </div>
                    <div className='singleCardDiv2'>
                        <p className='divViews'>{val.views} • {val.time}</p>
                        <p className='divAuthor'>{val.author}</p>
                    </div>
                </div>
            })}
        </div>
    )
}

export default Cards