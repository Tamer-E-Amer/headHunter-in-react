/**
 * @description MessageList container to hold a list of message that are comming from alpseast to the employers
 */
import React from "react";
//css
import "../../assets/css/MessageList/messageList.css";
// components
import { MessageItem, RedButton } from "../../components";
// message data
import { messages } from "../../data/messages";
const MessageList = () => {
  const allMessages = messages.map((message) => {
    return <MessageItem messageData={message} key={message.id} />;
  });
  return (
    <div className="app__messages__message-list">
      {/* top colored line */}
      <div className="app__messages__message-list__top-colored-line center">
        <div className="light-gray"></div>
        <div className="red-color"></div>
        <div className="dark-yellow"></div>
      </div>

      {/* checkall and delete buttons */}
      <div className="app__messages__message-list__check-del-buttons">
        <RedButton
          text="Check all"
          className="app__messages__messageList__check-all-btn"
        />
        <RedButton
          text="Delete"
          className="app__messages__messageList__delete-btn"
        />
      </div>
      {allMessages}
    </div>
  );
};

export default MessageList;
