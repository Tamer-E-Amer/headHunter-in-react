/**
 * @description this reusable component is used to show the corresponding large image that appears in the right side of the job list page
 * @param {string} categoryInUrl - the job category in URL to determin the realted image of the page
 */
import React from "react";
//css
import "../../assets/css/JobListLargeImage/jobListLargeImage.css";
//images
import jobListIT from "../../images/jobListIT.png";
import jobListStudents from "../../images/jobListStudents.png";
import jobListEngineering from "../../images/jobListEngineering.png";
import jobListMedicine from "../../images/jobListMedicine.png";
const JobListLargeImage = (props) => {
  // mak image of the job list dynamic according to the category in URL
  let imageTitle = "";
  let imageSrc = "";
  switch (props.categoryInURL) {
    case "IT":
      imageTitle = "Information Technology Jobs";
      imageSrc = `${jobListIT}`;
      break;
    case "Students":
      imageTitle = "Students Jobs";
      imageSrc = `${jobListStudents}`;
      break;
    case "Medicine":
      imageTitle = "Medicine jobs";
      imageSrc = `${jobListMedicine}`;
      break;
    case "Engineering":
      imageTitle = "Engineering jobs";
      imageSrc = `${jobListEngineering}`;
      break;

    default:
      break;
  }
  return (
    <div className="app__job-list__large-image">
      <div className="title center">{imageTitle}</div>
      <div className="image">
        <img src={imageSrc} alt="" />
      </div>
    </div>
  );
};

export default JobListLargeImage;
