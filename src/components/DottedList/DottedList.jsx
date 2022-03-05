/**
 * @description this component hold any list of data and show it as doted unordered list - such as job requirements - job bebefits and roles
 * @params {String}     title - title of the list block
 */
import React from "react";
// css
import "../../assets/css/DottedList/dottedList.css";
const DottedList = (props) => {
  return (
    <div>
      <ul className="app__dotte-list__list">
        <li className="app__dotte-list__list-item">{props.listItem}</li>
      </ul>
    </div>
  );
};

export default DottedList;
