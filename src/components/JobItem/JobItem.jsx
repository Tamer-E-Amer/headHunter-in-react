/**
 * @description this reusable component is used to show some information about a job that is shown in job list container
 * @param {Object}  :jobData       - details of the job
 * @param {String}  :categoryInURL - the category of the job list that appears in URl i.e:localhost/jobList/engineering
 */

import React from "react";
//css
import "../../assets/css/JobItem/jobItem.css";
//icons
import {
  MdLocationPin,
  MdBusinessCenter,
  MdOutlineAvTimer,
} from "react-icons/md";

// react-router-dom
import { Link } from "react-router-dom";
// props are : jobData - categoryURL
const JobItem = (props) => {
  return (
    <div className="app__job-list__job-item">
      <div className="app__job-list__job-item__job-header center">
        {/* job title */}
        <Link to="/jobDetails/987987897979">
          <h3 className="title">{props.jobData.title}</h3>
        </Link>
        <div className="app__job-list__job-item__loc-type-date center">
          <div className="location center">
            {/* icon */}
            <MdLocationPin size={25} color={"#a71717"} />
            {/* city */}
            <div className="city">{props.jobData.place.city}</div>
            <div className="separator">|</div>
            {/* state */}
            <div className="state">{props.jobData.place.state}</div>
          </div>
          {/* job type */}
          <div className="type center">
            <MdBusinessCenter size={25} color={"#9f9a9a"} />
            <div>{props.jobData.jobType}</div>
          </div>
          {/* job date */}

          <div className="date center">
            <MdOutlineAvTimer size={25} color={"#9f9a9a"} />
            <div>{props.jobData.createdAt}</div>
          </div>
        </div>
      </div>

      {/* job description */}
      <p className="app__job-list__job-item__job-body">
        {props.jobData.description}
      </p>
    </div>
  );
};

export default JobItem;
