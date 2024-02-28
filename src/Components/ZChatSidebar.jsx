import React from 'react'
import ZChatNavbar from './ZChatNavbar'
import ZChatSearch from './ZChatSearch'
import ZChats from './ZChats'

const ZChatSidebar = () => {
  return (
    <div className='sidebar'>
        <ZChatNavbar/>
        <ZChatSearch/>
        <ZChats/>
    </div>
  )
}

export default ZChatSidebar