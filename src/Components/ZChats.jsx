import axios from "axios";
import React, { useEffect, useState } from "react";

const ZChats = ({ userId }) => {
  const [inputField, changeInputField] = useState({
    receiver_name: sessionStorage.getItem("userid"),
    name: userId, // Initialize reciever_name as null
  });

  const [data, changeData] = useState([]);

  const fetchData = () => {
    console.log(inputField);
    axios
      .post("http://127.0.0.1:8000/api/get_employer_details/", inputField)
      .then((response) => {
        changeData(response.data);
        console.log(response.data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="zchats">
      <div className="userchat">
        <img
          src="data:image/jpeg;base64,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"
          alt=""
        />
        {data.map((value, index) => {
          return (
            <div key={`users_${index}`} className="userChatInfo">
              <span>{value.name}</span>
              <p>{value.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ZChats;
