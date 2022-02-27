import React from "react";
// components
import { Navbar, PageHeader } from "../components";
import { Footer, MessagesMain } from "../containers";
// page title image
import mssageImage from "../images/title-header.png";
const Messages = () => {
  // page header params
  const headerText = "Messages";
  // image from the import statement
  return (
    <div>
      <Navbar />
      <PageHeader image={mssageImage} text={headerText} />
      <MessagesMain />
      <Footer />
    </div>
  );
};

export default Messages;
