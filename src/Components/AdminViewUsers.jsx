import React, { useEffect, useState } from 'react'
import AdminNavbar from './AdminNavbar'
import axios from 'axios'

const AdminViewUsers = () => {

    const [data, changeData] = useState([

    ])

    const fetchData = () => {
        axios.post("http://127.0.0.1:8000/api/userview/").then((response) => {
            changeData(response.data)
            console.log(response.data)
        })
        
    }

    useEffect(() => { fetchData() }, [])


    return (
        <div>
            <AdminNavbar />


            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <div className='row g-3'>


                            {data.map(
                                (value, index) => {

                                    return <div className='col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3'>

                                        <div className='card'>

                                            <ul className='list-group list-group-flush'>

                                                <li className='list-group-item'>Name: {value.name}</li>
                                                <li className='list-group-item'>Phone no: {value.phoneno}</li>
                                                <li className='list-group-item'>Email ID: {value.emailid}</li>
                                                <li className='list-group-item'>Address: {value.address}</li>
                                                <li className='list-group-item'>Gender: {value.gender}</li>
                                                <li className='list-group-item'>Location: {value.location}</li>
                                            </ul>
                                        </div>
                                    </div>
                                }
                            )}


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminViewUsers