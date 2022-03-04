/**
 * @description this container for search and filter capabilities in the top of the JobList page
 */
import React from "react";
//css
import "../../assets/css/SearchFilterBar/searchFilterBar.css";
//components
import { InputField, JobListfilter } from "../../components";
const SearchFilterBar = () => {
  return (
    <div className="app__job-list__search-filter-bar center">
      <div className="job-list__search-filter-bar__search">
        {/* search field */}
        <InputField
          type="text"
          name="search"
          // value={companyProfileData.companyTitle} //// making the React state is the single value of truth
          id="search"
          htmlFor=""
          labelText=""
          placeHolder="search job here i.e: web developer"
          //   className="app__job-post-form__input"
          direction="col"
          labelClass=""
          // onChange={onChangeHandler}
        />
      </div>
      <div className="job-list__search-filter-bar__filter">
        <JobListfilter/>
      </div>
    </div>
  );
};

export default SearchFilterBar;
