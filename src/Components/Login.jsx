import axios from 'axios';
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [inputField, setInputField] = useState({});

    const inputHandler = (event) => {
        setInputField({ ...inputField, [event.target.name]: event.target.value });
    };

    const readVal = () => {
        console.log(inputField);
        axios
            .post("http://127.0.0.1:8000/api/login/", inputField)
            .then((response) => {
                console.log(response.data);
                if (response.data.length > 0) {
                    const getUserId = response.data[0].id;
                    const getName = response.data[0].name;

                    sessionStorage.setItem("userid", getUserId);
                    sessionStorage.setItem("name", getName);
                    navigate("/home");
                } else {
                    alert("invalid data");
                }
            });
    };


    const navigate = useNavigate();


    return (
        <div className="login-image">
            <div className="wrapper">
                <br></br>
                    <h1>Login</h1>
                    <div className="input-box">
                        <input type="text" placeholder="Username" name='emailid' value={inputField.emailid} onChange={inputHandler} required />
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder="Password" name='password' value={inputField.password} onChange={inputHandler} required />
                    </div>
                    <div className="remember-forgot">
                        <label>
                            <input type="checkbox" />
                            Remember Me
                        </label>
                        <Link to="#">Forgot Password?</Link>
                    </div>
                    <button type="submit" onClick={readVal}>Login</button>
                    <div className="register-link">
                        <p>
                            Don't have an account?<Link to="/register">Register</Link>
                        </p>
                    </div>
            </div>
        </div>
    );
};

export default Login;
