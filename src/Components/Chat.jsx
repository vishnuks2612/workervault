import React from 'react'
import ZChatSidebar from './ZChatSidebar'
import ZChat from './ZChat'
import Navbar from './Navbar'

const Chat = () => {
  return (

    <div>

      <Navbar/>

      <br></br>
      
      <div className='chat'>
        <div className='container'>
          <ZChatSidebar />
          <ZChat />
        </div>
      </div>
    </div>
  )
}

export default Chat