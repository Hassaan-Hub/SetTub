import React from 'react'
import Navbar from './component/navbar/Navbar'
import Side from './component/Side'
import Cards from './component/Cards'


const App = () => {
  return (
    <div className='h-screen w-full'>
      <Navbar />
      <div className='flex h-[90%]'>
        <Side />
        <Cards />
      </div>
    </div>
  )
}

export default App