import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [inputField, changeInputField] = useState({
    name: "",
    phoneno: "",
    emailid: "",
    address: "",
    gender: "",
    location: "",
    password: "",
  });

  const navigate = useNavigate();

  const inputHandler = (newEvent) => {
    changeInputField({
      ...inputField,
      [newEvent.target.name]: newEvent.target.value,
    });
  };

  const readValue = () => {
    axios
      .post("http://127.0.0.1:8000/api/register/", inputField)
      .then((response) => {
        if (response.data.status === "Success") {
          navigate("/");
        } else {
          alert("Failed");
        }
      });
  };


  return (
    <div className='register-image'>
      <div className='wrapper'>
        <h1>Register</h1>
        <div className="input-box">
          <input type='text' name='name' placeholder='Name' value={inputField.name} onChange={inputHandler} required />
        </div>
        <div className="input-box">
          <input type='text' name='phoneno' placeholder='Phone No' value={inputField.phoneno} onChange={inputHandler} required />
        </div>
        <div className="input-box">
          <input type='email' name='emailid' placeholder='Email ID' value={inputField.emailid} onChange={inputHandler} required />
        </div>
        <div className="input-box">
          <input type='text' name='address' placeholder='Address' value={inputField.address} onChange={inputHandler} required />
        </div>
        <div className="input-box">
          <input type='text' name='gender' placeholder='Gender' value={inputField.gender} onChange={inputHandler} required />
        </div>
        <div className="input-box">
          <input type='text' name='location' placeholder='Location' value={inputField.location} onChange={inputHandler} required />
        </div>
        <div className="input-box">
          <input type='password' name='password' placeholder='Password' value={inputField.password} onChange={inputHandler} required />
        </div>
        <button type='submit' onClick={readValue}>Register</button>
        <div className='register-link'>
          <p>Already have an account?<Link href='/'>Login</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Register;
