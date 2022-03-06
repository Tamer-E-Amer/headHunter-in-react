/**
 * @description this component deiplay a set of radio button as a group
 * - @params {Array}    - radioItems : array that define the name, id and title of the input radio
 * - @params {text}     - name  : name of the radio group - will be used later in the form logic
 * - @params {text}     - title : title of the radio group
 *
 */

import React from "react";
//css
import "../../assets/css/RadioGroup/radioGroup.css";
const RadioGroup = (props) => {
  // radio items

  const radio = props.radioItems.map((item) => {
    return (
      <div key={item} className="app__radio-group center">
        <input type="radio" name={props.name} id={item} value={item} />
        <label htmlFor={item}>{item}</label>
      </div>
    );
  });
  return (
    <div className="app__radio-group-wrapper center">
      {/* Title */}
      <div className="label">{props.title}</div>
      {/* radio buttons */}
      {radio}
    </div>
  );
};

export default RadioGroup;
