import React from 'react'
import { useEffect, useState } from 'react'
import ZChatMessage from './ZChatMessage'
import axios from 'axios';

const ZChatMessages = ({ userId }) => {
  const [inputField, changeInputField] = useState({
    "name": sessionStorage.getItem("userid"),
    "reciever_name": userId
  });
  const [data, changeData] = useState([
  ])
  const fetchData = () => {
    axios.post("http://127.0.0.1:8000/api/viewChat/", inputField)
      .then(response => {
        changeData(response.data);
        console.log(response.data)
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='zmessage owner'>
      <div className="zmessageContent">
        {data.map((value, index) => {
          return (

            <div key={`messages_${index}`}>
              <p>{value.description}</p>
            </div>
          )
        })}

      </div>
    </div>
  )
}

export default ZChatMessages