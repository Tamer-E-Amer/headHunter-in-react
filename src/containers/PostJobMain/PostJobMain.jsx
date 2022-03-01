/**
 * @description this container hold the structure of the post job page
 */

import React from "react";
//css
import "../../assets/css/PostJobMain/postJobMain.css";
// components
import { EmployerInfo, SidebarMenu, AlpsEastBenefits } from "../../components";

//containers
import { PostJobForm } from "../../containers";
const PostJobMain = () => {
  return (
    <div className="app__post-job__main">
      <div className="employer-info">
        <EmployerInfo />
      </div>
      <div className="post-job-wraper">
        {/* post job form*/}
        <PostJobForm />
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

export default PostJobMain;
