import axios from 'axios';
import React, { useEffect, useState } from 'react'
import SeekersNavbar from './SeekersNavbar'
import { Link } from 'react-router-dom';

const FindWorkers = () => {
    const [data, changeData] = useState([]);
    const [inputField, changeInputField] = useState({ job: "Farmer" });
    const [search, setSearch] = useState([]);

    const fetchData = () => {
        axios.post("http://127.0.0.1:8000/api/viewservicelist/")
            .then(response => {
                changeData(response.data);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

    const inputHandler = (newEvent) => {
        changeInputField({
            ...inputField,
            [newEvent.target.name]: newEvent.target.value,
        });
    };

    const readvalue = () => {
        console.log(inputField);
        axios.post("http://127.0.0.1:8000/api/findWorkers/", inputField)
            .then(response => {
                setSearch(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.error("Error searching workers:", error);
            });
    };

    return (
        <div className='find-workers'>
            <SeekersNavbar />
            <br /><br /><br /><br />
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className='row'>
                            <div className="col m-5">
                            <select
                                name="job"
                                className="form-control col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"
                                value={inputField.job}
                                onChange={inputHandler}
                                required
                            >
                                <option value="">Select Job</option>
                                {data.map((value, index_data) => (
                                    <option key={index_data} value={value.job_name}>{value.job_name}</option>
                                ))}
                            </select>
                            <button type='button' className='btn btn-primary' onClick={readvalue}>Search</button>
                            </div>
                        </div>
                        <div className='row'>
                            {search.map((value, index) => {
                                console.log("reciever", value.userid);
                                return (
                                    <div
                                        key={`search_${index}`}
                                        className="col col-12 col-sm-6 col-md-3 col-lg-4 col-xl-3 col-xxl-3 m-1 card-group"
                                    >
                                        <div className="card team-item">
                                            <div className="text-center px-5 py-3">
                                                <h3 className="team-name">{value.name}</h3>
                                                <p>{value.phoneno}</p>
                                                <p>{value.emailid}</p>
                                                <p>{value.address}</p>
                                                <p>{value.location}</p>
                                                {/* Pass the userId to the Chat component */}

                                                <Link
                                                    to={`/feedback/${value.userid}`}
                                                    className="btn btn-primary"
                                                    type="button"
                                                >Feedback</Link>
                                                <Link
                                                    to={`/chat/${value.userid}`}
                                                    className="btn  btn-primary"
                                                    type="button"
                                                >Chat</Link>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FindWorkers;