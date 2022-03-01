/**
 * @description company profile form container
 */

/**
 * @description container of the form in the contact alps east page
 */
import React from "react";
//css
import "../../assets/css/CompanyProfileForm/companyProfileForm.css";
// components
import { InputField, RedButton, TextField } from "../../components";

//icons
import { MdAddBox } from "react-icons/md";
const CompanyProfileForm = () => {
  // company profile data state
  const [companyProfileData, setCompanyProfileData] = React.useState({
    companyTitle: "",
    businessField: "",
    about: "",
    foundedIn: "",
    employeeNo: "",
    address: "",
  });

  // on change handler
  const onChangeHandler = (event) => {
    const { name, value, type, checked } = event.target;
    setCompanyProfileData((prevCompanyProfileData) => {
      return {
        ...prevCompanyProfileData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

  //on submit handler
  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(companyProfileData);
  };
  // console.log(companyProfileData);
  return (
    <div>
      {/* colored bar */}
      <div className="app__company-profile__upper-colored-bar center">
        <div className="light-gray"></div>
        <div className="red-color"></div>
        <div className="dark-yellow"></div>
      </div>
      {/* company profile form */}
      <div>
        <form onSubmit={onSubmitHandler}>
          {/* company name */}
          <InputField
            type="text"
            name="companyTitle"
            value={companyProfileData.companyTitle} //// making the React state is the single value of truth
            id="companyTitle"
            htmlFor="companyTitle"
            labelText="Title"
            placeHolder="Company title"
            className="app__company-profile-form__input"
            direction="col"
            labelClass="app__company-profile-form__input-label"
            onChange={onChangeHandler}
          />

          {/* business field */}
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
                  className="app__company-profile-form__input-radio"
                  direction="col"
                  labelClass="app__company-profile-form__input-label"
                  checked={companyProfileData.businessField === "engineering"}
                  onChange={onChangeHandler}
                />
                <InputField
                  type="radio"
                  name="businessField"
                  value="IT"
                  id="IT"
                  htmlFor="IT"
                  labelText="IT"
                  placeHolder=""
                  className="app__company-profile-form__input-radio"
                  direction="col"
                  labelClass="app__company-profile-form__input-label"
                  checked={companyProfileData.businessField === "IT"}
                  onChange={onChangeHandler}
                />
                <InputField
                  type="radio"
                  name="businessField"
                  value="medicine"
                  id="medicine"
                  htmlFor="medicine"
                  labelText="Medicine"
                  placeHolder=""
                  className="app__company-profile-form__input-radio"
                  direction="col"
                  labelClass="app__company-profile-form__input-label"
                  checked={companyProfileData.businessField === "medicine"}
                  onChange={onChangeHandler}
                />
              </div>
            </div>
          </div>
          {/* about with text field component */}
          <TextField
            labelText="About"
            name="about"
            value={companyProfileData.about}
            id="about"
            placeHolder="About your company"
            className=""
            onChange={onChangeHandler}
          />

          {/* Date */}
          <InputField
            type="date"
            name="foundedIn"
            // value={companyProfileData.foundedIn} //// making the React state is the single value of truth
            id="foundedIn"
            htmlFor="foundedIn"
            labelText="Founded in"
            placeHolder="Founded in date"
            className="app__company-profile-form__input"
            direction="col"
            labelClass="app__company-profile-form__input-label"
            onChange={onChangeHandler}
          />

          {/* no of employees */}
          <InputField
            type="text"
            name="employeeNo"
            // value={companyProfileData.employeeNo} //// making the React state is the single value of truth
            id="employeeNo"
            htmlFor="employeeNo"
            labelText="Employees"
            placeHolder="No of Employees i.e:10-15 employees"
            className="app__company-profile-form__input"
            direction="col"
            onChange={onChangeHandler}
          />
          {/* address */}
          <div className="app_company-profile-address center">
            <InputField
              type="text"
              name="address"
              value={companyProfileData.address} //// making the React state is the single value of truth
              id="address"
              htmlFor="address"
              labelText="Address"
              placeHolder="Type here your address "
              className="app__company-profile-form__input"
              direction="col"
              onChange={onChangeHandler}
            />
            {/* add button */}
            <MdAddBox size={30} color={"#554a4a"} className="add-button" />
          </div>

          {/* submit button */}
          <div className="alps-east__contact-us__contact-form__messag-row center">
            <RedButton
              text="Save"
              className="app__company-profile__form__button"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CompanyProfileForm;
