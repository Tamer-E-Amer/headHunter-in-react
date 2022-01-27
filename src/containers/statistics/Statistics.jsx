import React from "react";
import { StatisticsBox } from "../../components";
//css
import "./statistics.css";
const Statistics = () => {
  return (
    <div className="alps-east__statistics center">
      <StatisticsBox />
      <StatisticsBox />
      <StatisticsBox />
    </div>
  );
};

export default Statistics;
