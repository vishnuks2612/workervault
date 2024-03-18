import React from "react";
import YChatMessage from "./YChatMessage";

const YChatMessages = ({ receiver_id }) => {
  return (
    <div className="zchatmessages">
      <YChatMessage receiver_id={receiver_id} />
    </div>
  );
};

export default YChatMessages;
