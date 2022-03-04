/**
 * @description this page contains the job details of a certain job. It also show the compnay Info, more Jobs of that company and suggestion for related jobs
 */

import React from "react";
import { Navbar, PageHeader } from "../components";
import { Footer, JobDetailsMain } from "../containers";
// page title image
import contactAlpsEastImage from "../images/title-header.png";
const JobDetails = () => {
  const headerText = "Job details";
  return (
    <div>
      <Navbar />
      <PageHeader image={contactAlpsEastImage} text={headerText} />
      <JobDetailsMain/>
      <Footer />
    </div>
  );
};

export default JobDetails;
