/**
 * @description this component deiplay a set of checkbox as a group
 * - @params {Array}    - checkBoxItems : array that define the name, id and title of the checkBox
 * - @params {text}     - title : title of the CheckBox group
 *
 */

import React from "react";
//css
import "../../assets/css/CheckBoxGroup/checkBoxGroup.css";
const CheckBoxGroup = (props) => {
  // Checkbox items

  const checkbox = props.checkBoxItems.map((item) => {
    return (
      <div key={item} className="app__check-box-group center">
        <input type="checkbox" name={item} id={item} />
        <label htmlFor={item}>{item}</label>
      </div>
    );
  });
  return (
    <div className="app__check-box-group-wrapper center">
      {/* Title */}
      <div className="label">{props.title}</div>
      {/* checkBoxes */}
      {checkbox}
    </div>
  );
};

export default CheckBoxGroup;
