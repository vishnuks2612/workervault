import axios from "axios";
import React, { useEffect, useState } from "react";

const YChatMessage = ({ receiver_id }) => {
  const [inputField, setInputField] = useState({
    name: sessionStorage.getItem("userid"),
    receiver_name: 0,
  });
  const [data, setData] = useState([]);

  const fetchData = () => {
    axios
      .post("http://127.0.0.1:8000/api/get_full_chat/", inputField)
      .then((response) => {
        setData(response.data);
      });
  };

  useEffect(() => {
    setInputField((prevInputField) => ({
      ...prevInputField,
      receiver_name: receiver_id,
    }));
  }, [receiver_id]);

  useEffect(() => {
    fetchData();
  }, [inputField]); // Trigger fetchData when inputField changes

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

export default YChatMessage;
