/**
 * @description main container for contact alps east page
 */

import React from "react";
//css
import "../../assets/css/ContactAlpsEastMain/contactAlpsEastMain.css";
// components
import { EmployerInfo, SidebarMenu, AlpsEastBenefits } from "../../components";
// containers
import { ContactAlpsEastForm } from "../../containers";
const ContactAlpsEastMain = () => {
  return (
    <div className="app__contact-alps-east__main">
      <div className="employer-info">
        <EmployerInfo />
      </div>
      <div className="contact-form">
        <ContactAlpsEastForm />
      </div>
      <div className="benefits">
        <AlpsEastBenefits title="Benefits of posting  jobs in Alps.East Portal" />
      </div>
      <div className="sidebar-menu">
        <SidebarMenu />
      </div>
    </div>
  );
};

export default ContactAlpsEastMain;
