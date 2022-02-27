/**
 * @description MessageItem component to hold a message data. it accepts props that hold an object of message item (messageData)
 */
import React from "react";
//css
import "../../assets/css/MessageItem/messageItem.css";
// icons
import { TiDeleteOutline } from "react-icons/ti";
import { IoCalendarOutline } from "react-icons/io5";
const MessageItem = (props) => {
  return (
    <div className="app__message__message-item">
      {/* checkbox */}
      <div className="app__message__message-item__checkbox">
        <input type="checkbox" name="deleteMessage" id="deleteMessage" />
      </div>

      {/* title */}
      <div className="app__message__message-item__title center">
        {/* message circle */}
        <div className="app__message__message-item____title__circle"></div>
        {/* message title */}
        <div className="app__message__message-item__title__text">
          {props.messageData.title}
        </div>
      </div>

      {/* sender  */}
      <div className="app__message__message-item__sender center">
        {/* sender image */}
        <div className="app__message__message-item__sender__image center">
          {props.messageData.senderImage}
        </div>
        {/* sender name */}
        <div className="app__message__message-item__sender__name">
          {props.messageData.senderName}
        </div>
      </div>

      {/* date */}
      <div className="app__message__message-item__date center">
        {/*calendar icon */}
        <div className="app__message__message-item__date__calendar">
          <IoCalendarOutline size={20} color={"#554a4a"} />
        </div>
        {/* message date */}
        <div className="app__message__message-item__date__date-text">
          {props.messageData.date}
        </div>
      </div>

      {/*delete icon */}
      <div className="app__message__message-item__deleteIcon">
        <TiDeleteOutline size={25} color={"#cf1919"} />
      </div>
    </div>
  );
};

export default MessageItem;
