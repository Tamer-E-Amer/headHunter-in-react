/**
 * @description this is the container of post job form
 */
import React from "react";
//css
import "../../assets/css/PostJobForm/postJobform.css";
//icons
import { MdAddBox } from "react-icons/md";
// components
import { InputField, RedButton, TextField } from "../../components";

const PostJobForm = () => {
  return (
    <div>
      {/* colored bar */}
      <div className="app__post-job__upper-colored-bar center">
        <div className="light-gray"></div>
        <div className="red-color"></div>
        <div className="dark-yellow"></div>
      </div>

      {/* post job form */}
      <form>
        {/* company name */}
        <InputField
          type="text"
          name="companyTitle"
          // value={companyProfileData.companyTitle} //// making the React state is the single value of truth
          id="companyTitle"
          htmlFor="companyTitle"
          labelText="Title"
          placeHolder="Company title"
          className="app__job-post-form__input"
          direction="col"
          labelClass=""
          // onChange={onChangeHandler}
        />

        {/* Job field  */}
        <div className="app__company-profile__form__business-field">
          <div className="biusiness-field-label">Business</div>
          <div className="business-field-radio-group">
            {/* business field radio group */}

            <div className="center">
              <InputField
                type="radio"
                name="businessField"
                value="engineering"
                id="engineering"
                htmlFor="engineering"
                labelText="engineering"
                placeHolder=""
                className="app__post-Job-form__input-radio"
                direction="col"
                labelClass=""
                // checked={companyProfileData.businessField === "engineering"}
                // onChange={onChangeHandler}
              />
              <InputField
                type="radio"
                name="businessField"
                value="IT"
                id="IT"
                htmlFor="IT"
                labelText="IT"
                placeHolder=""
                className="app__post-Job-form__input-radio"
                direction="col"
                labelClass=""
                // checked={companyProfileData.businessField === "IT"}
                // onChange={onChangeHandler}
              />
              <InputField
                type="radio"
                name="businessField"
                value="medicine"
                id="medicine"
                htmlFor="medicine"
                labelText="Medicine"
                placeHolder=""
                className="app__post-Job-form__input-radio"
                direction="col"
                labelClass=""
                // checked={companyProfileData.businessField === "medicine"}
                // onChange={onChangeHandler}
              />
            </div>
          </div>
        </div>

        {/* job type */}
        <div className="app__company-profile__form__business-field">
          <div className="biusiness-field-label">Job Type</div>
          <div className="business-field-radio-group">
            {/* business field radio group */}
            <div className="center">
              <InputField
                type="radio"
                name="jobType"
                value="Full time"
                id="fullTime"
                htmlFor="fullTime"
                labelText="Full time"
                placeHolder=""
                className="app__post-Job-form__input-radio"
                direction="col"
                // checked={companyProfileData.businessField === "engineering"}
                // onChange={onChangeHandler}
              />
              <InputField
                type="radio"
                name="jobType"
                value="part Time"
                id="partTime"
                htmlFor="partTime"
                labelText="Part time"
                placeHolder=""
                className="app__post-Job-form__input-radio"
                direction="col"
                // checked={companyProfileData.businessField === "IT"}
                // onChange={onChangeHandler}
              />
              <InputField
                type="radio"
                name="jobType"
                value="remote"
                id="remote"
                htmlFor="remote"
                labelText="Remote"
                placeHolder=""
                className="app__post-Job-form__input-radio"
                direction="col"
                labelClass=""
                // checked={companyProfileData.businessField === "medicine"}
                // onChange={onChangeHandler}
              />
            </div>
          </div>
        </div>

        {/* place */}
        <InputField
          type="text"
          name="place"
          // value={companyProfileData.companyTitle} //// making the React state is the single value of truth
          id="place"
          htmlFor="place"
          labelText="Place"
          placeHolder="Place of work"
          className="app__job-post-form__input-work-place"
          direction="col"
          // onChange={onChangeHandler}
        />

        {/* status */}
        <div className="app__company-profile__form__business-field">
          <div className="biusiness-field-label">Job Type</div>
          <div className="business-field-radio-group">
            {/* business field radio group */}
            <div className="center">
              <InputField
                type="radio"
                name="status"
                value="opened"
                id="opened"
                htmlFor="opened"
                labelText="Opened"
                placeHolder=""
                className="app__post-Job-form__input-radio"
                direction="col"
                // checked={companyProfileData.businessField === "engineering"}
                // onChange={onChangeHandler}
              />
              <InputField
                type="radio"
                name="status"
                value="Closed"
                id="closed"
                htmlFor="closed"
                labelText="Closed"
                placeHolder=""
                className="app__post-Job-form__input-radio"
                direction="col"
                // checked={companyProfileData.businessField === "IT"}
                // onChange={onChangeHandler}
              />
            </div>
          </div>
        </div>

        {/* salary */}
        <InputField
          type="text"
          name="salary"
          // value={companyProfileData.companyTitle} //// making the React state is the single value of truth
          id="salary"
          htmlFor="salary"
          labelText="Salary"
          placeHolder="expected salary"
          className="app__job-post-form__input-salary"
          direction="col"
          // onChange={onChangeHandler}
        />

        {/* Job description */}
        <TextField
          labelText="Description"
          name="about"
          //   value={companyProfileData.about}
          id="desscription"
          placeHolder="Job description"
          className=""
          //   onChange={onChangeHandler}
        />

        {/* your roles */}
        <div className="app__post-job-form__add-role center">
          <TextField
            labelText="Your roles"
            name="roles"
            //   value={companyProfileData.about}
            id="reoles"
            placeHolder="Enter Job roles"
            className="app__post-job-form__add-role-field"
            //   onChange={onChangeHandler}
          />
          {/* add button */}
          <MdAddBox size={30} color={"#554a4a"} className="add-button" />
        </div>

        {/* requirements */}
        <div className="app__post-job-form__add-role center">
          <TextField
            labelText="Requirements"
            name="requirements"
            //   value={companyProfileData.about}
            id="requirements"
            placeHolder="Enter Job requirements"
            className="app__post-job-form__add-role-field"
            //   onChange={onChangeHandler}
          />
          {/* add button */}
          <MdAddBox size={30} color={"#554a4a"} className="add-button" />
        </div>

        {/* offers */}
        <div className="app__post-job-form__add-role center">
          <TextField
            labelText="We offer"
            name="offers"
            //   value={companyProfileData.about}
            id="offers"
            placeHolder="Enter Job offer"
            className="app__post-job-form__add-role-field"
            //   onChange={onChangeHandler}
          />
          {/* add button */}
          <MdAddBox size={30} color={"#554a4a"} className="add-button" />
        </div>

        {/* valid to */}
        <InputField
          type="date"
          name="validTo"
          // value={companyProfileData.companyTitle} //// making the React state is the single value of truth
          id="validto"
          htmlFor="validto"
          labelText="Valid to.."
          placeHolder=""
          className="app__job-post-form__input-work-place"
          direction="col"
          // onChange={onChangeHandler}
        />

        {/* submit button */}
        <div className="alps-east__contact-us__contact-form__messag-row center">
          <RedButton text="Post job" className="app__post-job__form__button" />
        </div>
      </form>
    </div>
  );
};

export default PostJobForm;
