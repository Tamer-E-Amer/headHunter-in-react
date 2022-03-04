/**
 * @description this reusable component is used to show the corresponding large image that appears in the right side of the job list page
 */
import React from "react";
//css
import "../../assets/css/JobListLargeImage/jobListLargeImage.css";
//images
import jobListIT from "../../images/jobListIT.png";
const JobListLargeImage = () => {
  return (
    <div className="app__job-list__large-image">
      <div className="title center">Information Technology</div>
      <div className="image">
        <img src={jobListIT} alt="" />
      </div>
    </div>
  );
};

export default JobListLargeImage;
