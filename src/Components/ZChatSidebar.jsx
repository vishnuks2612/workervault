import React from 'react'
import ZChatNavbar from './ZChatNavbar'
import ZChatSearch from './ZChatSearch'
import ZChats from './ZChats'

const ZChatSidebar = ({userId}) => {

  return (
    <div className='sidebar'>
        <ZChatNavbar />
        <ZChatSearch/>
        <ZChats userId={userId}/>
    </div>
  )
}

export default ZChatSidebar