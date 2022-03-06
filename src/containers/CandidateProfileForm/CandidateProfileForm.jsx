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
import { TopColoredBar, InputField } from "../../components";
// containers
import { CandidatePersonal } from "../../containers";
const CandidateProfileForm = () => {
  return (
    <div>
      <TopColoredBar />
      <div>
        <form>
          <CandidatePersonal />
        </form>
      </div>
    </div>
  );
};

export default CandidateProfileForm;
