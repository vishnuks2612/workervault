import axios from 'axios'
import React, { useEffect, useState } from 'react'

const FeedbackView = () => {

    const [input, setInput] = useState({ "reciever_name": 1 })

    const [data, changeData] = useState(
        [{
            "id": 1, "sender": {
                "userid": 2, "name": "Alfin", "phoneno": 56765675, "emailid": "kunchu@gmail.com", "role":
                    "Employee", "job": "Home Nurse", "address": "idukki", "gender": "Male", "location": "Kuttikkanam", "password": "1234"
            },
            "feedback": "test", "sender_name": 2, "reciever_name": 1
        }, {
            "id": 2, "sender": {
                "userid": 2, "name": "Alfin", "phoneno":
                    56765675, "emailid": "kunchu@gmail.com", "role": "Employee", "job": "Home Nurse", "address": "idukki", "gender": "Male",
                "location": "Kuttikkanam", "password": "1234"
            }, "feedback": "test", "sender_name": 2, "reciever_name": 1
        }]
    )

    const fetchData = () => {
        axios.post("http://127.0.0.1:8000/api/viewFeedback/", input).then((response) => {
            changeData(response.data)
            console.log(response.data)
        })

    }

    useEffect(() => { fetchData() }, [])


    return (
        <div>


            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <div className='row g-3'>


                            {data.map(
                                (value, index) => {
                                    return (
                                        <div className='col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3'>

                                            <div className='card'>

                                                <ul className='list-group list-group-flush'>

                                                    <li className='list-group-item'>Name:{value.sender.name} </li>
                                                    <li className='list-group-item'>Feedback: {value.feedback}</li>
                                                </ul>
                                            </div>
                                        </div>
                                    )
                                }
                            )}

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default FeedbackView