/**
 * @description this is the candidate profile Page that contains candidate profile form, initial information about the candidate, sidebar and benefits with Alps.east component
 */

import React from "react";
// components
import { Navbar, PageHeader } from "../components";
//containers
import { Footer, CandidateProfileMain } from "../containers";
// page title image
import mssageImage from "../images/title-header.png";
const CandidateProfile = () => {
  // page header params
  const headerText = "User profile";
  // image from the import statement
  return (
    <div>
      <Navbar />
      <PageHeader image={mssageImage} text={headerText} />
      <CandidateProfileMain />
      <Footer />
    </div>
  );
};

export default CandidateProfile;
