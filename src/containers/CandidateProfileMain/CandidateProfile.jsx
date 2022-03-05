/**
 * @description this container holds the main section of the candidate profile page
 */

import React from "react";
//css
import "../../assets/css/CandidateProfileMain/candidateProfileMain.css";
// components
import {
  EmployerInfo,
  SidebarMenu,
  AlpsEastBenefits,
  CandidateInfo,
} from "../../components";
// containers
import { CompanyProfileForm } from "../../containers";
const CandidateProfile = () => {
  return (
    <div className="app__candidate-profile__main">
      <div className="candidate-info">
        <CandidateInfo />
      </div>
      <div className="candidate-profile-wraper">
        {/* candidate profile form*/}
        <CompanyProfileForm />
      </div>
      {/* side bar menu */}
      <div className="sidebar-menu">
        <SidebarMenu menuFor="candidate" />
      </div>

      <div className="benefits">
        <AlpsEastBenefits title="Benefits of posting  jobs in Alps.East Portal" />
      </div>
    </div>
  );
};

export default CandidateProfile;
