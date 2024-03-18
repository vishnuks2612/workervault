import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ZChatMessage = ({ userId }) => {
  const [inputField, changeInputField] = useState({
    name: sessionStorage.getItem("userid"),
    receiver_name: userId,
  });
  const [data, changeData] = useState([]);

  const fetchData = () => {
    axios
      .post("http://127.0.0.1:8000/api/get_full_chat/", inputField)
      .then((response) => {
        changeData(response.data);
        console.log(response.data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  const currentUserID = sessionStorage.getItem("userid");

  return (
    <div>
      {data.map((message, index) => (
        <div
          key={`message_${index}`}
          className={
            message.sender === parseInt(currentUserID)
              ? "zmessage owner"
              : "zmessage"
          }
        >
          <div className="zmessageContent">
            <p>{message.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ZChatMessage;
