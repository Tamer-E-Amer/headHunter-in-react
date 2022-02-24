/**
 * @description header of each page except the home page that accept 2 paramaters
 * @params  1- image
 *          2- Header text
 */
import React from "react";
//css
import "../../assets/css/PageHeader/pageHeader.css";
const PageHeader = (params) => {
  return (
    <div className="regsiter__header">
      <img src={params.image} alt={params.text} />
      <div>{params.text}</div>
    </div>
  );
};

export default PageHeader;
