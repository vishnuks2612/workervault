import React, { useState } from "react";
import Navbar from "./Navbar";
import YChatSidebar from "./YChatSidebar";
import YChat from "./YChat";

const ChatEmployee = () => {
  // Retrieve userId from sessionStorage
  const [sidebarData, setSidebarData] = useState(null);

  // Function to receive user id from YChatSidebar
  const receiveUserIdFromSidebar = (userId) => {
    // Process the received user id here
    // You can set the received user id in state or perform any other action
    setSidebarData(userId);
  };

  return (
    <div>
      <Navbar />
      <br />
      <div className="chat">
        <div className="container">
          {/* Pass receiveUserIdFromSidebar function as a prop */}
          <YChatSidebar sendUserIdToParent={receiveUserIdFromSidebar} />
          {/* Pass userId as a prop to YChat */}
          <YChat userId={sidebarData} />
        </div>
      </div>
    </div>
  );
};

export default ChatEmployee;
