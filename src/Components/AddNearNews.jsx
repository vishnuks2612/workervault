import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AdminNavbar from "./AdminNavbar";

const AddNearNews = () => {

  const [inputField, changeInputField] = useState({
    title: "",
    description: "",
    image: "",
    location: "",
    content: "",
  });


  const navigate = useNavigate();

  const inputHandler = (newEvent) => {
    changeInputField({
      ...inputField,
      [newEvent.target.name]: newEvent.target.value,
    });
  };


  const readValue = () => {
    axios.post("http://127.0.0.1:8000/api/addnews/", inputField)
      .then((response) => {
        if (response.data.status === "Added") {
          navigate("/viewnearnews");
        } else {
          alert("Failed")
        }
      });
  };


  return (
    <div>
      <AdminNavbar />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="row g-3">
              <div className="col col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  Title:
                </label>
                <input type="text" name="title" className="form-control" value={inputField.title} onChange={inputHandler} />
              </div>
              <div className="col col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  Description:
                </label>
                <input type="text" name="description" className="form-control" value={inputField.description} onChange={inputHandler} />
              </div>
              <div className="col col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  Location:
                </label>
                <input type="text" name="location" className="form-control" value={inputField.location} onChange={inputHandler} />
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">
                  Content:
                </label>
                <textarea
                  name="content"
                  id=""
                  cols="30"
                  rows="10"
                  className="form-control"
                  value={inputField.content}
                  onChange={inputHandler}
                ></textarea>
              </div>
              <div className="col col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  Images:
                </label>
                <input type="text" name="image" className="form-control" value={inputField.image} onChange={inputHandler} />
              </div>


              <div className="col col-12">
                <button type="button" onClick={readValue} className="btn btn-primary">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNearNews;
