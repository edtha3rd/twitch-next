import React from 'react'
import Banner from './Banner'
import IconBar from './IconBar'
import LiveChannels from './LiveChannels'

const Main = () => {
  return (
    <div className='absolute left-[64px] xl:left-[220px]'>
      <Banner />
      <LiveChannels />
      <IconBar />
    </div>
  )
}

export default Main