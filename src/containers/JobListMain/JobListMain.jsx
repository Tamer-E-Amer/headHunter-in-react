/**
 * @description this container holds the main part of the JobList page. it holds the list of the jobs and the large job category related image and the benefits component
 */

import React from "react";
//css
import "../../assets/css/JobListMain/jobListMain.css";
// components
import { JobItem, JobListLargeImage, AlpsEastBenefits } from "../../components";
// // job list data
// import { jobs } from "../../data/jobs";
// react router dom
import { useLocation } from "react-router-dom";
// axios
import axios from "axios";
const JobListMain = () => {
  // get job category in the URL
  const categoryInURL = useLocation().pathname.split("/")[2];
  //  get jobs data from API
  const [jobsData, setJobsData] = React.useState([]);

  React.useEffect(() => {
    const getJobsData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/jobPosition/${categoryInURL}`
        );
        setJobsData(res.data);
      } catch (error) {}
    };
    getJobsData();
  }, [categoryInURL]);
  // looping throught jobs data
  const jobList = jobsData.map((job) => {
    return (
      <JobItem jobData={job} key={job._id} categoryInURL={categoryInURL} />
    );
  });
  return (
    <div className="app__job-list__main center">
      <div className="app__job-list__list">
        <span>
          {jobList.length} hits for {categoryInURL} jobs
        </span>
        {jobList}
        <div className="benefits">
          <AlpsEastBenefits title="Benefits of finding jobs with Alps.East" />
        </div>
      </div>
      <div className="app__job-list__image">
        <JobListLargeImage categoryInURL={categoryInURL} />
      </div>
    </div>
  );
};

export default JobListMain;
