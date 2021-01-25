import React from "react";

const Chat = ({ darkMode }) => {
  return (
    <div
    className={"dashboard-section " + (darkMode ? "graydark" : "graylight")}
  >
      <h1>Chat</h1>
    </div>
  );
};

export default Chat;
