import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SeekerRegister = () => {
    const [inputField, changeInputField] = useState({
        name: "",
        phone: "",
        email: "",
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
            .post("http://127.0.0.1:8000/api/seekersJoin/", inputField)
            .then((response) => {
                if (response.data.status === "Success") {
                    navigate("/seekerlogin");
                } else {
                    alert("Failed");
                }
            });
    };


    return (
        <div className='register-image'>
            <div className='wrapper'>
                <h1>Register</h1>
                <form action="" className="needs-validation" novalidate>
                    <div className="input-box was-validated">
                        <input type='text' name='name' className="form-control" placeholder='Name' value={inputField.name} onChange={inputHandler} required />
                    </div>
                    <div className="input-box was-validated">
                        <input type='number' name='phone' className="form-control" placeholder='Phone No' value={inputField.phoneno} onChange={inputHandler} required />
                    </div>
                    <div className="input-box was-validated">
                        <input type='email' name='email' pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" className="form-control" placeholder='Email ID' value={inputField.emailid} onChange={inputHandler} required />
                    </div>
                    
                    
                    <div className="input-box was-validated">
                        <input type='password' name='password' className="form-control" placeholder='Password' value={inputField.password} onChange={inputHandler} required />
                    </div>
                    <button type='button' onClick={readValue}>Register</button>
                </form>
                <div className='register-link'>
                    <p>Already have an account?<Link to='/seekerlogin'>Login</Link></p>
                </div>
            </div>
        </div>
    )
}

export default SeekerRegister