import React, { useEffect, useState } from 'react'
import AdminNavbar from './AdminNavbar'
import axios from 'axios';

const AdminViewServiceList = () => {

    const [data, changeData] = useState([]);

    const fetchData = () => {
        axios.post("http://127.0.0.1:8000/api/viewservicelist/").then(
            (response) => {
                changeData(response.data)
            }
        )
    }

    const deletePost = (id) => {
        axios
            .delete("http://127.0.0.1:8000/api/deleteView/?id=" + id)
            .then((response) => {
                alert(response.data.status);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => { fetchData() }, [])


    return (
        <div>
            <AdminNavbar />

            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <div className='row g-3'>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Sl No</th>
                                            <th scope="col">Services</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map((value, index) => {
                                            return (
                                                <tr>
                                                    <td>{value.job_id}</td>
                                                    <td>{value.job_name}</td>
                                                    <td><button className='btn btn-danger' onClick={() => {
                                                        deletePost(value.job_id);
                                                    }}>Delete</button></td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminViewServiceList