/**
 * @description this is MessageDetails cntainer that holds the message details
 */
import React from "react";

//css
import "../../assets/css/MessageDetails/messageDetails.css";
// icons
import { FaBuilding, FaCalendarAlt, FaUser } from "react-icons/fa";
// components
import { RedButton } from "../../components";
const MessageDetails = () => {
  return (
    <div className="app__messages__message-details">
      {/* from */}
      <div className="header-row center">
        <FaBuilding size={20} color={"#9f9a9a"} />
        <span>From:</span>
        <span>Alps.East</span>
      </div>

      {/* to */}
      <div className="header-row center">
        <FaUser size={20} color={"#9f9a9a"} />
        <span>to:</span>
        <span>Johne Doe</span>
      </div>

      {/* date */}
      <div className="header-row center">
        <FaCalendarAlt size={20} color={"#9f9a9a"} />
        <span>Date:</span>
        <span>22-02-2022</span>
      </div>

      {/* details */}
      <p className="details">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, neque
        sunt. Cum, sit eaque nesciunt, sunt libero quam voluptatum neque harum
        consequuntur ab aspernatur at, dolorem ea saepe tempora magnam!
      </p>

      {/* reply button */}
      <RedButton
        text="Reply"
        className="app__messages__message-details__reply"
      />
    </div>
  );
};

export default MessageDetails;
