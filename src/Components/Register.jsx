import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [inputField, changeInputField] = useState({
    name: "",
    phoneno: "",
    emailid: "",
    job: "",
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
          navigate("/login");
        } else {
          alert("Failed");
        }
      });
  };

  const [data, changeData] = useState([]);

  const fetchData = () => {
    axios.post("http://127.0.0.1:8000/api/viewservicelist/").then(
      (response) => {
        changeData(response.data)
      }
    )
  }

  useEffect(() => { fetchData() }, [])


  return (
    <div className='register-image'>
      <div className='wrapper'>
        <h1>Register</h1>
        <form action="" className="needs-validation" novalidate>
          <div className="input-box was-validated">
            <input type='text' name='name' className="form-control" placeholder='Name' value={inputField.name} onChange={inputHandler} required />
          </div>
          <div className="input-box was-validated">
            <input type='number' name='phoneno' className="form-control" placeholder='Phone No' value={inputField.phoneno} onChange={inputHandler} required />
          </div>
          <div className="input-box was-validated">
            <input type='email' name='emailid' pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" className="form-control" placeholder='Email ID' value={inputField.emailid} onChange={inputHandler} required />
          </div>
          <div className="input-box was-validated">
            <input type='text' name='address' className="form-control" placeholder='Address' value={inputField.address} onChange={inputHandler} required />
          </div>
          
          <div className="input-box was-validated">
            <select
              name="gender"
              className="form-control"
              value={inputField.gender}
              onChange={inputHandler}
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="input-box was-validated">
            <select
              name="job"
              className="form-control"
              value={inputField.job}
              onChange={inputHandler}
              required
            >
              <option value="">Select Job</option>
              {data.map((value, index)=>{
                return (
                  <option>{value.job_name}</option>
                )
              })}

            </select>
          </div>


          <div className="input-box was-validated">
            <input type='text' name='location' className="form-control" placeholder='Location' value={inputField.location} onChange={inputHandler} required />
          </div>
          <div className="input-box was-validated">
            <input type='password' name='password' className="form-control" placeholder='Password' value={inputField.password} onChange={inputHandler} required />
          </div>
          <button type='button' onClick={readValue}>Register</button>
        </form>
        <div className='register-link'>
          <p>Already have an account?<Link to='/login'>Login</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Register;
