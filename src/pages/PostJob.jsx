import React from "react";
// components
import { Navbar, PageHeader } from "../components";
import { Footer, PostJobMain } from "../containers";
// page title image
import mssageImage from "../images/title-header.png";
const PostJob = () => {
  // page header params
  const headerText = "Post ajob";
  // image from the import statement
  return (
    <div>
      <Navbar />
      <PageHeader image={mssageImage} text={headerText} />
      <PostJobMain />
      <Footer />
    </div>
  );
};

export default PostJob;
