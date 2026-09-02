import React, { useState } from 'react'
import Navbar from './component/navbar/Navbar'
import Sidebar from './component/Sidebar/Sidebar'
import CardsMain from './component/CardFolder/CardsMain'
import RouteFolder from './Routes/RouteFolder'

const ChildAppMain = () => {
  const [activeKey, setActiveKey] = useState('home')

  return (
    <div className='h-screen w-full flex flex-col'>
      <Navbar />
      <div className='flex flex-1 overflow-hidden'>
      <Sidebar activeKey={activeKey} onSelect={setActiveKey} />
      <RouteFolder activeKey={activeKey} />
      </div>
    </div>
  )
}

export default ChildAppMain