import React from 'react'
import Navbar from './Navbar'

const ContactUs = () => {
    return (
        <div>
            <Navbar />

            <div className='contact-form'>
                <form className='contactus-form' action='' method='post'>
                    <h1>Your Suggestions</h1>
                    <div className="text">
                        <input type='text' name='email' placeholder='Email ID' required />
                    </div>
                    <div className="text">
                        <textarea name="suggestions" placeholder="Your Suggestions" required></textarea>
                    </div>
                    <button className='contact-button' type='submit'>Send</button>
                </form>
            </div>

        </div>
    )
}

export default ContactUs