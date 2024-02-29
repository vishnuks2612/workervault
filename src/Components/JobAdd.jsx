import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const JobAdd = () => {

    const [inputField, changeInputField] = useState({
        job: "",
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
                    navigate("/jobadd");
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
        <div>
            <div className="input-box was-validated">
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
            <button type='button' onClick={readValue}>Add</button>
        </div>
    )
}

export default JobAdd