import axios from "axios";
import React, { useEffect, useState } from "react";

const YChatInput = ({ receiver_id }) => {
  const [inputField, changeInputField] = useState({
    text: "",
    sender: sessionStorage.getItem("userid"),
    receiver: receiver_id, // Initialize reciever_name as null
  });

  const inputHandler = (newEvent) => {
    changeInputField({
      ...inputField,
      [newEvent.target.name]: newEvent.target.value,
    });
  };

  const readvalue = () => {
    console.log(inputField);
    axios
      .post("http://127.0.0.1:8000/api/send_message/", inputField)
      .then((response) => {
        console.log(response.data);
      });
  };

  // Update reciever_name in inputField state
  useEffect(() => {
    changeInputField((prevState) => ({
      ...prevState,
      receiver: receiver_id, // Set reciever_name to the userId from URL parameters
    }));
  }, [receiver_id]);
  return (
    <div>
      <div className="chatinput">
        <input
          type="text"
          name="text"
          value={inputField.text}
          onChange={inputHandler}
          placeholder="Type Something..."
        />
        <div className="send">
          <button type="button" onClick={readvalue}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default YChatInput;
