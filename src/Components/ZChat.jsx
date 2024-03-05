import React from 'react'
import ZChatMessages from './ZChatMessages'
import ZChatInput from './ZChatInput'
import { useParams } from 'react-router-dom';

const ZChat = () => {
  let { userId } = useParams();
  return (
    <div className='zchat'>
      <div className="chatInfo">
        <span>Athul</span>
      </div>

      <ZChatMessages userId={userId}/>

      <ZChatInput userId={userId}/>
    </div>
  )
}

export default ZChat