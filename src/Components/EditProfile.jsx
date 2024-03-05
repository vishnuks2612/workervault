import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {
    const navigate = useNavigate()
    const [data, setData] = useState({
        userid: sessionStorage.getItem("userid"),
        name: "",
        emailid: "",
        phoneno: "",
        role: "",
        job: "",
        address: "",
        location: ""
    });

    const displayValue = () => {
        axios
            .post("http://127.0.0.1:8000/api/viewProfile/", { userid: data.userid })
            .then((response) => {
                console.log(response.data);
                setData(response.data[0]);
            })
            .catch(error => {
                console.error("Error fetching profile data:", error);
            });
    };

    const updateData = (value, name) => {
        setData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };

    useEffect(() => {
        displayValue();
    }, []);

    const saveData = () => {
        console.log(data);
        axios.put("http://127.0.0.1:8000/api/EditProfile/", data)
            .then((response) => {
                alert(response.data.status);
                if (data.role == "Employer") {
                    navigate('/seekershome')
                } else {
                    navigate('/home')
                }
            })
            .catch(error => {
                console.error("Error saving profile data:", error);
            });
    };

    return (
        <div>
            <div className="container rounded bg-white mt-5">
                <div className="row">
                    <div className="col-md-8">
                        <div className="p-3 py-5">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <div className="d-flex flex-row align-items-center back">
                                    <i className="fa fa-long-arrow-left mr-1 mb-1"></i>
                                    <h6>Back to home</h6>
                                </div>
                                <h6 className="text-right">Edit Profile</h6>
                            </div>
                            <div className="row mt-2">
                                <div className="col-md-6">
                                    <input
                                        name="name"
                                        value={data.name}
                                        onChange={(ev) => updateData(ev.target.value, "name")}
                                        type="text"
                                        className="form-control"
                                        placeholder="Name"
                                    />
                                </div>
                                <div className="col-md-6">
                                    <input
                                        name="emailid"
                                        value={data.emailid}
                                        onChange={(ev) => updateData(ev.target.value, "emailid")}
                                        type="text"
                                        className="form-control"
                                        placeholder="Email"
                                    />
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-6">
                                    <input
                                        name="phoneno"
                                        value={data.phoneno}
                                        onChange={(ev) => updateData(ev.target.value, "phoneno")}
                                        type="text"
                                        className="form-control"
                                        placeholder="Phone number"
                                    />
                                </div>
                                <div className="col-md-6">
                                    <input
                                        name="job"
                                        value={data.job}
                                        onChange={(ev) => updateData(ev.target.value, "job")}
                                        type="text"
                                        className="form-control"
                                        placeholder="Job"
                                    />
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-6">
                                    <input
                                        name="address"
                                        value={data.address}
                                        onChange={(ev) => updateData(ev.target.value, "address")}
                                        type="text"
                                        className="form-control"
                                        placeholder="Address"
                                    />
                                </div>
                                <div className="col-md-6">
                                    <input
                                        name="location"
                                        value={data.location}
                                        onChange={(ev) => updateData(ev.target.value, "location")}
                                        type="text"
                                        className="form-control"
                                        placeholder="Location"
                                    />
                                </div>
                            </div>
                            <div className="mt-5 text-right">
                                <button
                                    onClick={saveData}
                                    className="btn btn-primary profile-button"
                                    type="button"
                                >
                                    Save Profile
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditProfile;
