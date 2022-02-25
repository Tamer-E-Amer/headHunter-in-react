/**
 * @descriptio components that holds the benegits of alps east
 */
import React from "react";
//css
import "../../assets/css/AlpsEastBenefits/alpsEastBenefits.css";
// Alps east benefits
import { alpsEastBenifit_employer } from "../../data/alpsEastBenefits";

const AlpsEastBenefits = (props) => {
  // mapping throught benefits data
  const employerBenefits = alpsEastBenifit_employer.map((benefit) => {
    return (
      <p className="app__alps-east-benefits__text" key={benefit.id}>
        {benefit.benifit}
      </p>
    );
  });
  return (
    <div className="app__alps-east-benefits">
      {/* title */}
      <h3 className="app__alps-east-benefits__title">{props.title}</h3>
      {/* benefits */}
      {employerBenefits}
    </div>
  );
};

export default AlpsEastBenefits;
