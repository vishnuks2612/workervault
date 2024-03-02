import React, { useEffect, useState } from 'react'
import ZChatSidebar from './ZChatSidebar'
import ZChat from './ZChat'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'

const Chat = () => {
  const [userId, setUserId] = useState(null);

  // Extracting userId from URL parameters
  let { userIdFromUrl } = useParams();

  // Set userId state when userIdFromUrl changes
  useEffect(() => {
    setUserId(prevUserId => {
      // Ensure userIdFromUrl is not null or undefined before updating state
      if (userIdFromUrl != null) {
        return userIdFromUrl;
      } else {
        return prevUserId; // If userIdFromUrl is null or undefined, keep previous state
      }
    });
  }, [userIdFromUrl]);

  return (

    <div>

      <Navbar />

      <br></br>

      <div className='chat'>
        <div className='container'>
          <ZChatSidebar />
          <ZChat userId={userId} />
        </div>
      </div>
    </div>
  )
}

export default Chat