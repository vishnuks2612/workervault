import React, { useState, useEffect, useRef } from "react";
import { formatDistanceToNow } from "date-fns";
import axios from "axios";
import { useParams } from "react-router-dom";
// import "./UserChat.css";
// import FileIcon from "./FileIcon";
// import Avatar from "./Avatar";

const UserChat = () => {
  const { userid, job_id } = useParams();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [file, setFile] = useState(null);
  const chatHistoryRef = useRef(null);

  useEffect(() => {
    // Retrieve messages from localStorage on component mount
    const storedMessages = localStorage.getItem(
      `chatMessages_${job_id}_${userid}_${sessionStorage.getItem("id")}`
    );
    if (storedMessages) {
      setMessages(JSON.parse(storedMessages));
    }
  }, [job_id, userid]);

  useEffect(() => {
    // Scroll to the latest message when messages change
    chatHistoryRef.current.scrollTop = chatHistoryRef.current.scrollHeight;
  }, [messages]);

  const saveMessagesToLocalStorage = (messages) => {
    // Save messages to localStorage
    localStorage.setItem(
      `chatMessages_${job_id}_${userid}_${sessionStorage.getItem("id")}`,
      JSON.stringify(messages)
    );
  };

  const handleSendMessage = async () => {
    try {
      const senderId = sessionStorage.getItem("id");
      const receiverId = parseInt(userid, 10);

      if (newMessage.trim() !== "" || file) {
        const formData = new FormData();
        formData.append("sender", senderId);
        formData.append("receiver", receiverId);
        formData.append("job_id", job_id);
        formData.append("text", newMessage);
        formData.append("timestamp", new Date().toISOString());

        if (file) {
          formData.append("file", file);
        }

        await axios.post("http://127.0.0.1:8000/api/send_message/", formData);

        const newMessageObj = {
          text: newMessage,
          sender: senderId,
          receiver: receiverId,
          job_id: job_id,
          type: "text",
          timestamp: new Date(),
          status: "sent",
        };

        if (file) {
          newMessageObj.file = file;
          newMessageObj.type = "file";
          setFile(null);
        }

        // Update messages state with the new message
        const updatedMessages = [...messages, newMessageObj];
        setMessages(updatedMessages);
        setNewMessage("");

        // Save updated messages to localStorage
        saveMessagesToLocalStorage(updatedMessages);
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  useEffect(() => {
    const fetchReceivedMessages = async () => {
      try {
        const receiverId = sessionStorage.getItem("id");
        const response = await axios.get(
          `http://127.0.0.1:8000/get_emp_messages/${receiverId}/${job_id}/${userid}`
        );
        const receivedMessages = response.data;

        setMessages(receivedMessages);
        saveMessagesToLocalStorage(receivedMessages);
      } catch (error) {
        console.error("Error fetching received messages:", error);
      }
    };

    // Fetch received messages only when the component mounts
    fetchReceivedMessages();
  }, [job_id, userid]);

return (
    <div>
      
      <br />
      <div className="chat-interface">
        <div className="chat-header">Chat</div>
        <div className="chat-history" ref={chatHistoryRef}>
          {messages.map((message, index) => (
            <div
              key={index}
              className={
                message.sender === sessionStorage.getItem("id")
                  ? "message sent"
                  : "message received"
              }
            >
              <div className="avatar-container">
                {message.sender !== sessionStorage.getItem("id")} 
                {/* <Avatar imageUrl="https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png" /> */}
              </div>
              <div className="message-content">
                {message.text && <p>{message.text}</p>}
                {message.file && (
                  <div className="file-message">
                    {/* <FileIcon /> */}

                    {/* Assuming 'file' contains the URL to the file */}
                    <a href={message.file} download>
                      <button>Download</button>
                    </a>
                  </div>
                )}
                <div className="message-metadata">
                  <div className="message-sender">{message.sender}</div>
                  <div className="message-timestamp">
                    {formatDistanceToNow(new Date(message.timestamp), {
                      addSuffix: true,
                    })}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="message-input">
          <textarea
            placeholder="Type a message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <input type="file" onChange={handleFileChange} />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default UserChat;