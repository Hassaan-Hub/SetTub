import React from 'react'
import Navbar from './component/navbar/Navbar'
import Side from './component/SideFolder/Side'
import CardsMain from './component/CardFolder/CardsMain'

const App = () => {
  return (
    <div className='h-screen w-full'>
      <Navbar />
      <div className='flex h-[90%]'>
        <Side />
        <CardsMain />
      </div>
    </div>
  )
}

export default App