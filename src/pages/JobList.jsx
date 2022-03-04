/**
 * @description this page contains a list of jobs according to click on certain category in the homepage
 * it has also search and filter capabilities
 */
import React from "react";
import { Navbar, PageHeader } from "../components";
import { Footer, SearchFilterBar, JobListMain } from "../containers";
// page title image
import contactAlpsEastImage from "../images/title-header.png";
const JobList = () => {
  const headerText = "Job list";
  return (
    <div>
      <Navbar />
      <PageHeader image={contactAlpsEastImage} text={headerText} />
      <SearchFilterBar />
      <JobListMain />
      <Footer />
    </div>
  );
};

export default JobList;
