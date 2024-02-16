import React, { useState } from 'react'
import AdminNavbar from './AdminNavbar'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminAddServices = () => {

  const [inputField, changeInputField] = useState({
    job_name: "",
  });

  const navigate = useNavigate();

  const inputHandler = (newEvent) => {
    changeInputField({
      ...inputField,
      [newEvent.target.name]: newEvent.target.value,
    });
  };

  const readValue = () => {
    axios.post("http://127.0.0.1:8000/api/addservicesview/", inputField).then((response) => {
      if (response.data.status === "Added") {
        navigate("/adminaddservices");
      } else {
        alert("Failed")
      }
    })
  }


  return (
    <div>
      <AdminNavbar />

      <br></br>
      <br></br>
      <br></br>
      <br></br>


      <div className="add-service-image">
        <div className="wrapper">
          <br></br>
          <h1>Add Services</h1>
          <form action="" className='needs-validation' noValidate >
            <div className="input-box was-validated">
              <input className='form-control' type="text" placeholder="Add Service" name='job_name' value={inputField.job_name} onChange={inputHandler} required />
            </div>
            <button type='button' onClick={readValue}>Add</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AdminAddServices