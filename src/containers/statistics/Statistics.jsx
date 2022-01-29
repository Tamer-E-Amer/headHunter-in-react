/**
 * @description statistics container that hold statistics box components it has only three statistic box component
 */
import React from "react";
import { StatisticsBox } from "../../components";
// import positions and companies count
import { positionCount, companiesCount } from "../../data/statistics";
// candidates count will be read directly from JS data file
import candidates from "../../data/homePage";
//css
import "./statistics.css";
const Statistics = () => {
  const candidatesCount = candidates.statistics.candidates;
  return (
    <div className="alps-east__statistics center">
      <StatisticsBox
        boxType={"jobCount"}
        positionCount={positionCount.positions}
      />
      <StatisticsBox
        boxType="companyCount"
        companyCount={companiesCount.companies}
      />
      <StatisticsBox boxType={"candidate"} candidatesCount={candidatesCount} />
    </div>
  );
};

export default Statistics;
