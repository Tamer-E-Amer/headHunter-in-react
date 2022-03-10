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
// axios request
import { publicRequest } from "../../requestMethods";

const JobDetailsMain = (props) => {
  // get the jobid in the URL
  const [jobDetail, setJobDetail] = React.useState({
    yourRoles: [],
    requirements: [],
    weOffer: [],
    place: {},
  });
  // get the job details from API using axios
  React.useEffect(() => {
    const getJobDetails = async () => {
      try {
        const res = await publicRequest.get(
          `jobPosition/find/${props.jobIDInURL}`
        );
        setJobDetail(res.data);
      } catch (error) {}
    };
    getJobDetails();
  }, [props.jobIDInURL]);
  // getting the job details according to the passed jobId
  // getting job roles
  const jobRoles = jobDetail.yourRoles.map((role, index) => {
    return <DottedList listItem={role} key={index} />;
  });
  //getting job requirements
  const jobRequirements = jobDetail.requirements.map((req, index) => {
    return <DottedList listItem={req} key={index} />;
  });
  //getting job benefits
  const jobBenefits = jobDetail.weOffer.map((offer, index) => {
    return <DottedList listItem={offer} key={index} />;
  });

  return (
    <>
      <div className="app__job-details-main center">
        <div className="app__job-details-main__details">
          {/* details of a certain Job */}
          <JobItem jobData={jobDetail} />
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
