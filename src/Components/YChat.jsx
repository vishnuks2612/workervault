import React from "react";
import YChatMessages from "./YChatMessages";
import YChatInput from "./YChatInput";

const YChat = ({ userId }) => {
  return (
    <div className="zchat">
      <div className="chatInfo">
        <span>Athul</span>
      </div>

      <YChatMessages receiver_id={userId} />

      <YChatInput receiver_id={userId} />
    </div>
  );
};

export default YChat;
