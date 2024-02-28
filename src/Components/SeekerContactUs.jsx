import React from 'react'
import SeekersNavbar from './SeekersNavbar'

const SeekerContactUs = () => {
  return (
    <div>
        <SeekersNavbar/>
        
        <div className='contact-form'>
                <form className='contactus-form' action='' method='post'>
                    <h1>Your Suggestions</h1>
                    <div className="text">
                        <textarea name="suggestions" placeholder="Your Suggestions" required></textarea>
                    </div>
                    <button className='contact-button' type='submit'>Send</button>
                </form>
            </div>
    </div>
  )
}

export default SeekerContactUs