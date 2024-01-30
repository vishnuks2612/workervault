import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios';

const ViewNearNews = () => {

    const [data, changeData] = useState([]);

    const fetchData = () => {
        axios.get("http://127.0.0.1:8000/api/viewnearnews/").then((response) => {
            changeData(response.data)
        })
    }

    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div>
            <Navbar />

            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <div className='row g-3'>

                            {data.map((value, index)=>{
                                return <div className='col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3'>

                                <div className='card'>

                                    <ul className='list-group list-group-flush'>

                                        <li className='list-group-item'>Title: {value.title}</li>
                                        <li className='list-group-item'>Description: {value.descroption}</li>
                                        <li className='list-group-item'>Image: {value.image}</li>
                                        <li className='list-group-item'>Location: {value.location}</li>
                                        <li className='list-group-item'>Content: {value.content}</li>
                                    </ul>
                                </div>
                            </div>
                            })}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewNearNews