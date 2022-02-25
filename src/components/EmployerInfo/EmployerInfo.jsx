/**
 * @description component of Employer information that appears in the upper left side up to the sidebar menu  of the employer pages
 */
import React from "react";

//css
import "../../assets/css/EmployerInfo/employerInfo.css";
// icons
import { IoLocationSharp, IoCalendarSharp, IoPeople } from "react-icons/io5";
const EmployerInfo = () => {
  return (
    <div className="app__contact-alps-east__employer-info center">
      {/* company title */}
      <div className="app__contact-alps-east__employer-info__title-wrapper center">
        <div className="app__contact-alps-east__employer-info__title__logo center">
          logo
        </div>
        <h1 className="app__contact-alps-east__employer-text">Company name</h1>
      </div>
      {/* location */}
      <div className="app__contact-alps-east_employer-info__location">
        <IoLocationSharp size={25} color={"cf1919"} />
        <div className="text">Berlin | Germany</div>
      </div>
      {/* employees */}
      <div className="app__contact-alps-east_employer-info__employees">
        <IoPeople size={20} color={"#9f9a9a"} />
        <div className="text">25 Employees</div>
      </div>
      {/* foundation date */}
      <div className="app__contact-alps-east_employer-info__found-in">
        <IoCalendarSharp size={20} color={"#9f9a9a"} />
        <div className="text">Founded in 2003</div>
      </div>
    </div>
  );
};

export default EmployerInfo;
