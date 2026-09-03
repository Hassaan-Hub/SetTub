import React, { useState } from 'react'
import Sidebar from './component/Sidebar/Sidebar'
import CardDetail from './component/CardFolder/CardDetail'
import CardDetail2 from './component/CardFolder/CardDetail2'

const MainAppChild2 = () => {
  const [activeKey, setActiveKey] = useState('')

  return (
    <div className='h-screen w-full flex flex-col'>
      <div className='flex flex-1 overflow-hidden'>
        <Sidebar compact activeKey={activeKey} onSelect={setActiveKey} />
        <div className='flex flex-1 overflow-hidden'>
          <CardDetail />
          <CardDetail2 />
        </div>
      </div>
    </div>
  )
}

export default MainAppChild2