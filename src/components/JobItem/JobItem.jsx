/**
 * @description this reusable component is used to show some information about a job that is shown in job list container
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
const JobItem = () => {
  return (
    <div className="app__job-list__job-item">
      <div className="app__job-list__job-item__job-header center">
        {/* job title */}
        <h3 className="title">Frontend Engineer</h3>
        <div className="location center">
          {/* icon */}
          <MdLocationPin size={25} color={"#a71717"} />
          {/* city */}
          <div className="city">Berlin</div>
          <div className="separator">|</div>
          {/* state */}
          <div className="state">Germany</div>
        </div>
        {/* job type */}
        <div className="type center">
          <MdBusinessCenter size={25} color={"#9f9a9a"} />
          <div>Full time</div>
        </div>
        {/* job date */}

        <div className="date center">
          <MdOutlineAvTimer size={25} color={"#9f9a9a"} />
          <div>3 days ago</div>
        </div>
      </div>
      <p className="app__job-list__job-item__job-body">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est enim,
        perspiciatis exercitationem facilis blanditiis quisquam rem, dolorem
        necessitatibus, saepe magni deserunt laborum eum aperiam. Eligendi velit
        qui reprehenderit tempore fugit.
      </p>
    </div>
  );
};

export default JobItem;
