import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ContactUs = () => {

    const [inputField, changeInputField] = useState({
        description: "",
        userid: sessionStorage.getItem("userid"),
    });

    const navigate = useNavigate();

    const inputHandler = (newEvent) => {
        changeInputField({
            ...inputField,
            [newEvent.target.name]: newEvent.target.value,
        });
    };

    const readvalue = () => {
        console.log(inputField)
        axios.post("http://127.0.0.1:8000/api/contactus/", inputField).then((response) => {
            alert(response.data.status)
            navigate('/home');
        });
    };

    return (
        <div>
            <Navbar />

            <div className='contact-form'>
                <form className='contactus-form'>
                    <h1>Your Suggestions</h1>
                    <div className="text">
                        <textarea name="description" placeholder="Your Suggestions" value={inputField.description} onChange={inputHandler} required></textarea>
                    </div>
                    <button className='contact-button' onClick={readvalue} type='submit'>Send</button>
                </form>
            </div>

        </div>
    )
}

export default ContactUs