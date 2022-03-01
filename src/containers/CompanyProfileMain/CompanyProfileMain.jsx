/**
 * @description main container for Company profile page
 */

import React from "react";
//css
import "../../assets/css/CompanyProfileMain/companyProfileMain.css";
// components
import { EmployerInfo, SidebarMenu, AlpsEastBenefits } from "../../components";
// containers
import {CompanyProfileForm} from "..";
const CompanyProfileMain = () => {
  return (
    <div className="app__company-profile__main">
      <div className="employer-info">
        <EmployerInfo />
      </div>
      <div className="company-profile-wraper">
        {/* company profile form*/}
       <CompanyProfileForm />
      </div>
      {/* side bar menu */}
      <div className="sidebar-menu">
        <SidebarMenu />
      </div>

      <div className="benefits">
        <AlpsEastBenefits title="Benefits of posting  jobs in Alps.East Portal" />
      </div>
    </div>
  );
};

export default CompanyProfileMain;
