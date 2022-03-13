/**
 * @description this is the container of post job form
 */
import React from "react";
//css
import "../../assets/css/PostJobForm/postJobform.css";
//icons
import { MdClear } from "react-icons/md";
// components
import { InputField, RedButton, TextField, RadioGroup } from "../../components";

const PostJobForm = () => {
  // default values for the place data state
  const placeDataDefaultValues = {
    city: "",
    state: "",
  };

  // roles default sate
  const rolesDefaultValues = [{ role: "" }];
  // default values for the form data state
  const jobDataDefaultValues = {
    title: "",
    description: "",
    jobType: "",
    yourRoles: rolesDefaultValues,
    requirements: [],
    weOffer: [],
    salary: "",
    jobField: [],
    company: "",
    place: placeDataDefaultValues,
    status: "",
    validTo: "",
  };
  // state for postJob data
  const [postJobData, setPostJobData] = React.useState(jobDataDefaultValues);

  // destructing postJobData
  const {
    title,
    description,
    salary,
    validTo,
    jobType,
    status,
    jobField,
    yourRoles,
  } = postJobData;
  // destructing place
  const { city, state } = postJobData.place;
  // on change for add role text input
  const onChangeHandler = (e) => {
    const { name, value, type, checked } = e.target;
    setPostJobData((prevPostJobData) => {
      return {
        ...prevPostJobData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
    console.log(`${name} : ${value}`);
  };

  // handle place Change
  const placeChangeHandler = (e) => {
    const { name, value } = e.target;
    setPostJobData((prev) => {
      return {
        ...prev,
        place: {
          ...prev.place,
          [name]: value,
        },
      };
    });
    console.log(`${name} : ${value}`);
  };
  // roles change handler
  const rolesChangeHandler = (index, e) => {
    const { name, value } = e.target;
    const roles = [...postJobData.yourRoles];
    roles[index][name] = value;
    setPostJobData((prev) => {
      return {
        ...prev,
        roles,
      };
    });
    // console.log(index, e.target.name);
  };

  // add roles handler
  const addRoleHandler = () => {
    setPostJobData((prev) => {
      return {
        ...prev,
        yourRoles: [...prev.yourRoles, rolesDefaultValues],
      };
    });
  };

  // delet role handler
  const delRoleHandler = (index) => {
    const rolesClone = [...postJobData.yourRoles];
    rolesClone.splice(index, 1);
    setPostJobData((prev) => {
      return {
        ...prev,
        yourRoles: rolesClone,
      };
    });
    // console.log("delete");
  };
  // from submit handler
  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log(postJobData);
  };
  return (
    <div>
      {/* colored bar */}
      <div className="app__post-job__upper-colored-bar center">
        <div className="light-gray"></div>
        <div className="red-color"></div>
        <div className="dark-yellow"></div>
      </div>

      {/* post job form */}
      <form onSubmit={formSubmitHandler}>
        {/* job title */}
        <InputField
          type="text"
          name="title"
          value={title} //// making the React state is the single value of truth
          id="title"
          htmlFor="title"
          labelText="Title"
          placeHolder="Job title"
          className="app__job-post-form__input"
          direction="col"
          labelClass=""
          onChange={onChangeHandler}
        />
        {/* Job description */}
        <TextField
          labelText="Description"
          name="description"
          value={description}
          id="desscription"
          placeHolder="Job description"
          className=""
          onChange={onChangeHandler}
        />
        {/* Job field  */}
        <RadioGroup
          radioItems={["Engineering", "IT", "Medicine"]}
          name="jobField"
          title="Job Field"
          onChange={onChangeHandler}
          checked={jobField}
        />
        {/* Job Type  */}
        <RadioGroup
          radioItems={["Full time", "Part time", "Remote"]}
          name="jobType"
          title="Job Type"
          onChange={onChangeHandler}
          checked={jobType}
        />

        {/* place city state - style as the first name and last name in candidate profile form*/}
        <div className="app__candidate-profile-form__name center">
          <InputField
            type="text"
            name="city"
            value={city} //// making the React state is the single value of truth
            id="city"
            htmlFor="city"
            labelText="City"
            placeHolder="City"
            className="app__candidate-profile-form__input-short"
            direction="col"
            labelClass="app__candidate-profile-form__input-label"
            onChange={placeChangeHandler}
          />
          {/* state */}
          <InputField
            type="text"
            name="state"
            value={state} //// making the React state is the single value of truth
            id="state"
            htmlFor="state"
            labelText="State"
            placeHolder="State"
            className="app__candidate-profile-form__input-short"
            direction="col"
            // labelClass="app__candidate-profile-form__input-label"
            onChange={placeChangeHandler}
          />
        </div>

        {/* Status */}
        <RadioGroup
          radioItems={["Opened", "Closed"]}
          name="status"
          title="Status"
          onChange={onChangeHandler}
          checked={status}
        />

        {/* salary */}
        <InputField
          type="text"
          name="salary"
          value={salary} //// making the React state is the single value of truth
          id="salary"
          htmlFor="salary"
          labelText="Salary"
          placeHolder="expected salary"
          className="app__job-post-form__input-salary"
          direction="col"
          onChange={onChangeHandler}
        />

        {/* your roles */}
        {/* mapping through roles */}

        {postJobData.yourRoles.map((role, index) => (
          <div key={index}>
            <div className="app__post-job-form__add-role center">
              <TextField
                labelText="Your roles"
                name="role"
                value={role.role}
                id="role"
                placeHolder="Enter Job roles"
                className="app__post-job-form__add-role-field"
                onChange={(e) => {
                  rolesChangeHandler(index, e);
                }}
              />
              {/* delte role button */}
              {postJobData.yourRoles.length > 1 && (
                <MdClear
                  size={30}
                  color={"#a71717"}
                  className="del-button"
                  onClick={() => {
                    delRoleHandler(index);
                  }}
                />
              )}
            </div>
            {postJobData.yourRoles.length - 1 === index && (
              <div className="app__post-job-form__add-role__button center">
                {/* add roel button */}
                <RedButton
                  text="Add Role"
                  className="app__post-job-form__add-role__button"
                  onClick={addRoleHandler}
                />
              </div>
            )}
          </div>
        ))}

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
          <MdClear size={30} color={"#a71717"} className="del-button" />
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
          <MdClear size={30} color={"#a71717"} className="del-button" />
        </div>

        {/* valid to */}
        <InputField
          type="date"
          name="validTo"
          value={validTo} //// making the React state is the single value of truth
          id="validto"
          htmlFor="validto"
          labelText="Valid to.."
          placeHolder=""
          className="app__job-post-form__input-work-place"
          direction="col"
          onChange={onChangeHandler}
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
