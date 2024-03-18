import React from 'react'
import YChatMessages from './YChatMessages'
import YChatInput from './YChatInput'

const YChat = () => {
  return (
    <div className='zchat'>
      <div className="chatInfo">
        <span>Athul</span>
      </div>

      <YChatMessages/>

      <YChatInput/>
    </div>
  )
}

export default YChat