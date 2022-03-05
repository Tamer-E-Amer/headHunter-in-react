/**
 * @descriptionthis container hold the main structure of the Job details page such as job details, company Info, other Jobs of that company and other suggested related jobs
 * @param {string} props - this container accept the jobId as a prop and then filter the imported job according to this prop
 */

import React from "react";
//css
import "../../assets/css/JobDetailsMain/jobDetailsMain.css";
// components
import {
  JobItem,
  DottedList,
  RedButton,
  AlpsEastBenefits,
} from "../../components";

// import all jobs
import { jobs } from "../../data/jobs";
const JobDetailsMain = (props) => {
  // getting the job details according to the passed jobId
  const job = jobs.filter((job) => job.id === props.jobId);
  // getting job roles
  const jobRoles = job[0].yourRoles.map((role) => {
    return <DottedList listItem={role} />;
  });
  //getting job requirements
  const jobRequirements = job[0].requirements.map((req) => {
    return <DottedList listItem={req} />;
  });
  //getting job benefits
  const jobBenefits = job[0].weOffer.map((offer) => {
    return <DottedList listItem={offer} />;
  });

  // console.log("job roles", jobRoles);
  return (
    <>
      <div className="app__job-details-main center">
        <div className="app__job-details-main__details">
          {/* details of a certain Job */}
          <JobItem jobData={job[0]} />
          {/* your roles */}
          <div className="list">
            <h3 className="title">Your roles</h3>
            {jobRoles}
          </div>
          {/* requirements */}
          <div className="list">
            <h3 className="title">Requirements</h3>
            {jobRequirements}
          </div>

          {/* apply for the job  */}
          <RedButton
            text="Apply"
            className="app__contact-alps-east__form__button"
          />
        </div>
        <div className="app__job-details-main__benefits-suggestion center">
          {/* details of a certain Job */}
          {/* requirements */}
          <div className="list">
            {/* apply for the job  */}
            <RedButton
              text="Apply"
              className="app__contact-alps-east__form__button"
            />
            <h3 className="title">Benefits</h3>
            {jobBenefits}
          </div>
        </div>
      </div>
      {/* benefits with Alps.East */}
      <div className="app__job-details__alps-east-benefits">
        <AlpsEastBenefits title="Benefits of posting  jobs in Alps.East Portal" />
      </div>
    </>
  );
};

export default JobDetailsMain;
