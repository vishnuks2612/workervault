import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";


const JobAdd = () => {

    const [inputField, changeInputField] = useState({
        job: "",

        userid: sessionStorage.getItem("userid"),

    });

    const navigate = useNavigate();

    const inputHandler = (newEvent) => {
        changeInputField({
            ...inputField,
            [newEvent.target.name]: newEvent.target.value,
        });
    };

    const readValue = () => {
        console.log(inputField);
        axios
            .put("http://127.0.0.1:8000/api/AddJob/", inputField)
            .then((response) => {
                if (response.data.status === "Job Added") {
                    navigate("/home");
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
        <div className="jobadd">

            <Navbar/>
            
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <div className="input-box was-validated wrapper">
                <select
                    name="job"
                    className="form-control"
                    value={inputField.job}
                    onChange={inputHandler}
                    required
                >
                    <option value="">Select Job</option>
                    {data.map((value, index) => {
                        return (
                            <option>{value.job_name}</option>
                        )
                    })}

                </select>
            </div>
            <button className="jobadd_button" type='button' onClick={readValue}>Add</button>
        </div>
    )
}

export default JobAdd