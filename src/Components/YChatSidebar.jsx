import React from "react";
import YChatNavbar from "./YChatNavbar";
import YChatSearch from "./YChatSearch";
import YChats from "./YChats";

const YChatSidebar = ({ sendUserIdToParent }) => {
  const passUserId = (userId) => {
    // Handle userId in the parent componen
    // Pass the user id to the parent component
    sendUserIdToParent(userId);
  };

  return (
    <div className="sidebar">
      <YChatNavbar />
      <YChatSearch />
      {/* Pass passUserId function as a prop */}
      <YChats passUserId={passUserId} />
    </div>
  );
};

export default YChatSidebar;
