import React from 'react'

const YChatInput = () => {
  return (
    <div>
            <div className='chatinput'>
                <input type="text" name='description' placeholder='Type Something...' />
                <div className="send">
                    <button type='button'>Send</button>
                </div>
            </div>
        </div>
  )
}

export default YChatInput