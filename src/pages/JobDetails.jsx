/**
 * @description this page contains the job details of a certain job. It also show the compnay Info, more Jobs of that company and suggestion for related jobs
 */

import React from "react";
import { Navbar, PageHeader } from "../components";
import { Footer, JobDetailsMain } from "../containers";
// page title image
import contactAlpsEastImage from "../images/title-header.png";
import { useLocation } from "react-router-dom";
const JobDetails = () => {
  const headerText = "Job details";
  // job id - we pass the job id to the JobDetailsMain container as a prop to get the job details according to it
  // const jobId = 1;
  // get the jobId in URL
  const jobIDInURL = useLocation().pathname.split("/")[2];
  return (
    <div>
      <Navbar />
      <PageHeader image={contactAlpsEastImage} text={headerText} />
      <JobDetailsMain jobIDInURL={jobIDInURL} />
      <Footer />
    </div>
  );
};

export default JobDetails;
