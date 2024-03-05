import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {

    const [inputField, setInputField] = useState({});

    const inputHandler = (event) => {
        setInputField({ ...inputField, [event.target.name]: event.target.value });
    };

    const readVal = () => {
        // console.log(inputField);
        axios
            .post("http://127.0.0.1:8000/api/adminLogin/", inputField)
            .then((response) => {
                console.log(response.data);
                if (response.data.length > 0) {
                    const getUserId = response.data[0].userid;
                    const getName = response.data[0].name;
                    const getRole = response.data[0].role

                    sessionStorage.setItem("userid", getUserId);
                    sessionStorage.setItem("name", getName);


                    navigate("/adminhome");


            } else {
                alert("invalid data");
            }
            });
};


const navigate = useNavigate();



return (
    <div>
        <section className="vh-100 gradient-custom">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card bg-dark text-white" >
                            <div className="card-body p-5 text-center">

                                <div className="mb-md-5 mt-md-4 pb-5">

                                    <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                                    <p className="text-white-50 mb-5">Please enter your login and password!</p>

                                    <div className="form-outline form-white mb-4">
                                        <input type="email" id="typeEmailX" name='username' value={inputField.username} onChange={inputHandler} className="form-control form-control-lg" />
                                        <label className="form-label" htmlFor="typeEmailX">Username</label>
                                    </div>

                                    <div className="form-outline form-white mb-4">
                                        <input type="password" name='password' value={inputField.password} onChange={inputHandler} id="typePasswordX" className="form-control form-control-lg" />
                                        <label className="form-label" htmlFor="typePasswordX">Password</label>
                                    </div>


                                    <button onClick={readVal} className="btn btn-outline-light btn-lg px-5" type="submit">Login</button>



                                </div>



                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
)
}

export default AdminLogin