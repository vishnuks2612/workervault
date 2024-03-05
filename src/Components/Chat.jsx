import React, { useEffect, useState } from 'react'
import ZChatSidebar from './ZChatSidebar'
import ZChat from './ZChat'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import SeekersNavbar from './SeekersNavbar'

const Chat = () => {
  let { userId } = useParams();
  console.log("user", userId)
  const role = sessionStorage.getItem("role")

  return (

    <div>

      {/* <Navbar /> */}
      <SeekersNavbar/>

      <br></br>

      <div className='chat'>
        <div className='container'>
          <ZChatSidebar userId={userId} />
          <ZChat userId={userId} />
        </div>
      </div>
    </div>
  )
}

export default Chat