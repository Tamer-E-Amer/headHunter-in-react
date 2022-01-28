/**
 * @description this is a component for reusable input field and accept the following parameters as props
 * @param {string} type : accept the type of the input field
 * @param {string} name : accept the name of the input field
 * @param {string} id : accept the ID of the input field
 * @param {string} htmlFor : for the lable of the input field
 * @param {string} labelText : accept the text of the input field label
 * @param {string} className : the calssname of the input field to adjust its styling
 * @param {string} placeHolder : the placeHolder of the input field
 */
import React from "react";
//css
import "./inputField.css";
const InputField = (props) => {
  return (
    <div className="alps-east__input-field-row">
      <label htmlFor={props.htmlFor} className="alps-east__input-field-label">
        {props.labelText}
      </label>
      <input
        type={props.type}
        name={props.name}
        id={props.id}
        className={`alps-east__input-field ${props.className}`}
        placeholder={props.placeHolder}
      />
    </div>
  );
};

export default InputField;
