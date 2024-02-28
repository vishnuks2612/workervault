import React from 'react'

const ZChatInput = () => {
  return (
    <div className='chatinput'>
      <input type="text" placeholder='Type Something...' />
      <div className="send">
        <button>Send</button>
      </div>
    </div>
  )
}

export default ZChatInput