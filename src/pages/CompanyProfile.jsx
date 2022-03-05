import React from "react";
// components
import { Navbar, PageHeader } from "../components";
//containers
import { Footer, CompanyProfileMain } from "../containers";
// page title image
import mssageImage from "../images/title-header.png";
const Messages = () => {
  // page header params
  const headerText = "Company profile";
  // image from the import statement
  return (
    <div>
      <Navbar />
      <PageHeader image={mssageImage} text={headerText} />
      <CompanyProfileMain />
      <Footer />
    </div>
  );
};

export default Messages;
