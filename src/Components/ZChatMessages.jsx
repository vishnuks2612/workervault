import React from "react";
import ZChatMessage from "./ZChatMessage";

const ZChatMessages = ({ userId }) => {
  return (
    <div className="zchatmessages">
      <ZChatMessage userId={userId} />
    </div>
  );
};

export default ZChatMessages;
