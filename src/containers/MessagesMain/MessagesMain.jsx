/**
 * @description main container for Messages page
 */

import React from "react";
//css
import "../../assets/css/MessagesMain/messagesMain.css";
// components
import { EmployerInfo, SidebarMenu, AlpsEastBenefits } from "../../components";
// containers
import { MessageList, MessageDetails } from "../../containers";
const MessagesMain = () => {
  return (
    <div className="app__messages__main">
      <div className="employer-info">
        <EmployerInfo />
      </div>
      <div className="messages-wraper">
        {/* message List */}
        <MessageList />

        {/* message details */}
        <MessageDetails />
      </div>

      <div className="sidebar-menu">
        <SidebarMenu />
      </div>

      <div className="benefits">
        <AlpsEastBenefits title="Benefits of posting  jobs in Alps.East Portal" />
      </div>
    </div>
  );
};

export default MessagesMain;
