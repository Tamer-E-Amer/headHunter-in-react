/**
 * @description this container hold the part of the candidate learning in the candidate profile form
 */

import React from "react";
//css
import "../../assets/css/CandidateLearning/candidateLearning.css";
// components
import { CheckBoxGroup, DegreeEntry } from "../../components";
const CandidateLearning = () => {
  return (
    <div className="app__candidate-profile-form__learning">
      {/* degree */}
      {/* gender */}
      <CheckBoxGroup
        checkBoxItems={["Ausbildung", "Bachelor", "Master", "PHD"]}
        title="Degree"
      />
      <DegreeEntry />
    </div>
  );
};

export default CandidateLearning;
