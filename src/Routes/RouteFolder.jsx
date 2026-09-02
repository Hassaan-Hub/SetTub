import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CardsMain from '../component/CardFolder/CardsMain'
import Search from '../component/searchFol/Search'

const RouteFolder = () => {
  return (
    <Routes>
      <Route path='/' element={<CardsMain />} />
      <Route path='/search' element={<Search />} />
    </Routes>
  )
}

export default RouteFolder