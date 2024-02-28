import React from 'react'
import ZChatSidebar from './ZChatSidebar'
import ZChat from './ZChat'

const Chat = () => {
  return (
    <div className='chat'>
        <div className='container'>
            <ZChatSidebar/>
            <ZChat/>
        </div>
    </div>
  )
}

export default Chat