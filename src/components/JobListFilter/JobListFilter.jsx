/**
 * @description this component contains the filter criteria that is shown in the Job list page beside the search field
 */
import React from "react";

//css
import "../../assets/css/JobListFilter/jobListFilter.css";

const JobListfilter = () => {

  return (
    <div className="app__job-list__search-filter__filter">
        <h4>Filter by:</h4>
        <div className="filters">
            {/* location */}
            <select name="location" id="location">
                <option>Select Location</option>
                <option value ="germany">Germany</option>
                <option value="swizerland">Swizerland</option>
                <option value="austria">Austria</option>
            </select>

            {/* job types */}
            {/* fulltime */}
            <input type="checkbox" name="fullTime" id="fullTime"/>
            <label htmlFor="fullTime">Full time</label>

            {/* part time */}
            <input type="checkbox" name="partTime" id="partTime"/>
            <label htmlFor="partTime">Part time</label>

            {/* students */}
            <input type="checkbox" name="students" id="students"/>
            <label htmlFor="students">Students</label>
        </div>
    </div>
  );
};

export default JobListfilter;
