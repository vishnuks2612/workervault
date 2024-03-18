import React from 'react'
import YChatNavbar from './YChatNavbar'
import YChatSearch from './YChatSearch'
import YChats from './YChats'

const YChatSidebar = () => {
  return (
    <div className='sidebar'>
        <YChatNavbar />
        <YChatSearch/>
        <YChats/>
    </div>
  )
}

export default YChatSidebar