/**
 * @description this is a statistics box component that holds the summation of whether of candidates, opening jobs or companies
 * @params {string}   boxType         : that determine which count this box will have
 * @param  {integer}  positionCount   :count of the opening positions
 * @param  {integer}  candidatesCount :count of the candidates
 * @param  {integer}  companyCount    :count of the companies
 */
import React from "react";
//css
import "./statisticsBox.css";
const StatisticsBox = (props) => {
  /**
   * according the the value of the "boxType" prop it populates the box with suitable data comes with other props (positionCount, candidatesCount, companyCount )
   */
  let text = "";
  let count = 0;
  if (props.boxType == "jobCount") {
    text = "Positions";
    count = props.positionCount;
  } else if (props.boxType == "companyCount") {
    text = "Companies";
    count = props.companyCount;
  } else {
    text = "candidates";
    count = props.candidatesCount;
  }
  return (
    <div className="alps-east__statistics_statistics-box center">
      <div className="alps-east__statistics_statistics-box__count">{count}</div>
      <div className="alps-east__statistics_statistics-box__count-of">
        {text}
      </div>
    </div>
  );
};

export default StatisticsBox;
