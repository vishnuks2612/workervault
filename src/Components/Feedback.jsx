import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import FeedbackView from './FeedbackView';

const Feedback = () => {
  const { userId } = useParams();
  console.log("reciever", userId)

  const [inputField, changeInputField] = useState({
    feedback: "",
    sender_name: sessionStorage.getItem("userid"),
    reciever_name: userId,
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
    axios.post("http://127.0.0.1:8000/api/savefeedback/", inputField).then((response) => {
      alert(response.data.status)
      navigate('/home');
    });
  };
  return (
    <div>
      <Navbar />

      <div className='contact-form'>
        <form className='contactus-form'>
          <h1>Your Feedback</h1>
          <div className="text">
            <textarea name="feedback" placeholder="Your Suggestions" value={inputField.feedback} onChange={inputHandler} required></textarea>
          </div>
          <button className='contact-button' onClick={readvalue} type='button'>Send</button>
        </form>
      </div>
      <div className="row">
        <div className="col-12">
          <FeedbackView/>
        </div>
      </div>
    </div>
  )
}

export default Feedback