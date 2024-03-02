import React from 'react'
import ZChatMessages from './ZChatMessages'
import ZChatInput from './ZChatInput'

const ZChat = () => {
  return (
    
    <div className='zchat'>
      <div className="chatInfo">
        <span>Athul</span>
      </div>

     
      

      <ZChatMessages/>

      <ZChatInput/>
    </div>
  )
}

export default ZChat