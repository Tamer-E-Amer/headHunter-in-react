/**
 * @description this container hold the candidate profile form that is shown in the candidate profile page
 *  - This Container is devided into other sub containers as follow
 *    - CandidatePersonal
 *    - CandidateContact
 *    - CandidateLearning
 *    - CandidateTraining
 *    - CandidateExperience
 */
import React from "react";
//css
import "../../assets/css/CandidateProfileForm/candidateProfileForm.css";
//components
import { TopColoredBar } from "../../components";
// containers
import {
  CandidatePersonal,
  CandidateLearning,
  CandidateWorkExperience,
  CandidateContact,
} from "../../containers";
const CandidateProfileForm = () => {
  /**************************************************************************************************************
   *                                            Default values
   *************************************************************************************************************/
  const personalDataDefaultValues = {
    firstName: "",
    lastName: "",
    gender: "Male",
    birthDate: "",
    image: "",
  };

  const phoneDefaultValues = [{ type: "", number: "" }];
  const socialDefaultValues = [{ netName: "", link: "" }];

  const contactDataDefaultValues = {
    email: "tamer@gmail.com",
    phone: phoneDefaultValues,
    social: socialDefaultValues,
    skype: "",
  };

  // complete state data
  const CandidateDefaultData = {
    candidatePersonalData: personalDataDefaultValues,
    candidateContactData: contactDataDefaultValues,
  };

  /**************************************************************************************************************
   *                                           User profile state
   *************************************************************************************************************/
  const [candidateData, setCandidateData] =
    React.useState(CandidateDefaultData);

  // change Handler
  const onChangeHandler = (e) => {
    const { name, value, type, checked } = e.target;
    setCandidateData((prev) => {
      return {
        ...prev,
        candidatePersonalData: {
          ...prev.candidatePersonalData,
          [name]: type === "checkbox" ? checked : value,
        },
      };
    });
    console.log(`${name} : ${value}`);
  };

  // change handler for contact data
  const onChangeHandler_contactData = (e) => {
    const { name, value, type, checked } = e.target;
    setCandidateData((prev) => {
      return {
        ...prev,
        candidateContactData: {
          ...prev.candidateContactData,
          [name]: type === "checkbox" ? checked : value,
        },
      };
    });
    console.log(`${name} : ${value}`);
  };

  // submit form
  const onsubmitHandler = (e) => {
    e.preventDefault();
    console.log(candidateData);
  };

  return (
    <div>
      <TopColoredBar />
      <div>
        <form onSubmit={onsubmitHandler}>
          <CandidatePersonal
            personalData={candidateData.candidatePersonalData}
            onChangeHandler={onChangeHandler}
          />
          <CandidateContact
            contactData={candidateData.candidateContactData}
            setCandidateData={setCandidateData}
            phoneDefaultValues={phoneDefaultValues}
            socialDefaultValues={socialDefaultValues}
            onChangeHandler={onChangeHandler_contactData}
          />
          <CandidateLearning />
          <CandidateWorkExperience />
        </form>
      </div>
    </div>
  );
};

export default CandidateProfileForm;
