import React from "react";
// components
import {
  Navbar,
  PageHeader,
  SidebarMenu,
  EmployerInfo,
  AlpsEastBenefits,
} from "../components";
import { Footer, ContactAlpsEastMain } from "../containers";
// page title image
import contactAlpsEastImage from "../images/title-header.png";
const ContactAlpsEast = () => {
  // page header params
  const headerText = "Contact Alps.East";
  // image from the import statement
  return (
    <div>
      <Navbar />
      <PageHeader image={contactAlpsEastImage} text={headerText} />
      <ContactAlpsEastMain />
      <Footer />
    </div>
  );
};

export default ContactAlpsEast;
