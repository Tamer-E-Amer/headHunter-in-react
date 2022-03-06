/**
 * @description this component contains the top colored bar that appears in many pages such as candidate form, contact alpseast and many other forms
 */

import React from "react";
//css
import "../../assets/css/TopColoredBar/TopColoredBar.css";
const TopColoredBar = () => {
  return (
    <div className="app__upper-colored-bar center">
      <div className="light-gray"></div>
      <div className="red-color"></div>
      <div className="dark-yellow"></div>
    </div>
  );
};

export default TopColoredBar;
