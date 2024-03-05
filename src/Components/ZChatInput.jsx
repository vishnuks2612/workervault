import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';


const ZChatInput = ({userId}) => {
    // console.log("recieierjfcd",userId)

    const [inputField, changeInputField] = useState({
        "description": "",
        "name": sessionStorage.getItem("userid"),
        "reciever_name": userId // Initialize reciever_name as null
      });


    const inputHandler = (newEvent) => {
        changeInputField({
            ...inputField,
            [newEvent.target.name]: newEvent.target.value,
        });
    };

    const readvalue = () => {
        console.log(inputField)
        axios.post("http://127.0.0.1:8000/api/saveChat/", inputField).then((response) => {
          console.log(response.data)
          alert(response.data.status)
        });
    };

    // Update reciever_name in inputField state
    useEffect(() => {
        changeInputField(prevState => ({
            ...prevState,
            "reciever_name": userId // Set reciever_name to the userId from URL parameters
        }));
    }, [userId]);
    return (
        <div>
            <div className='chatinput'>
                <input type="text" name='description' value={inputField.description} onChange={inputHandler} placeholder='Type Something...' />
                <div className="send">
                    <button type='button' onClick={readvalue}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default ZChatInput