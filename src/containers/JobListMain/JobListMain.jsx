/**
 * @description this container holds the main part of the JobList page. it holds the list of the jobs and the large job category related image and the benefits component
 */

import React from "react";
//css
import "../../assets/css/JobListMain/jobListMain.css";
// components
import { JobItem, JobListLargeImage, AlpsEastBenefits } from "../../components";
// job list data
import { jobs } from "../../data/jobs";

const JobListMain = () => {
  // looping throught jobs data
  const jobList = jobs.map((job) => {
    return <JobItem jobData={job} key={job.id} />;
  });
  return (
    <div className="app__job-list__main center">
      <div className="app__job-list__list">
        {jobList}
        <div className="benefits">
          <AlpsEastBenefits title="Benefits of finding jobs with Alps.East" />
        </div>
      </div>
      <div className="app__job-list__image">
        <JobListLargeImage />
      </div>
    </div>
  );
};

export default JobListMain;
