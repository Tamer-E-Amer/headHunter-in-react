/**
 * @description this is a component for reusable input field and accept the following parameters as props
 * @param {string}    type        : accept the type of the input field
 * @param {string}    name        : accept the name of the input field
 * @param {string}    id          : accept the ID of the input field
 * @param {string}    htmlFor     : for the lable of the input field
 * @param {string}    labelText   : accept the text of the input field label
 * @param {string}    className   : the calssname of the input field to adjust its styling
 * @param {string}    placeHolder : the placeHolder of the input field
 * @param {string}    direction   : direction whether the lable and the input are incolumn or row firection
 */
import React from "react";
//css
import "./inputField.css";
const InputField = (props) => {
  /**
   * we want to test if the type of the input field is checkbox or radio buton then we make the label of it a little bit smaller that if it is a text field
   * first we asign radio and checkbox types to an array
   * then we test if the type of the input component is included in this array then assign certain class
   */
  let labelClass = "alps-east__input-field-label";
  let inputTypes = ["radio", "checkbox"];
  if (props.direction) {
    if (inputTypes.includes(props.type)) {
      labelClass = "alps-east__input-field__label-horizontal-radio";
    } else {
      labelClass = "alps-east__input-field__label-horizontal";
    }
  } else {
    labelClass = "alps-east__input-field__label";
  }
  /////////////////////////////////////////////////////////////////////////
  return (
    <div
      // test if there a direction prop then make the label beside input otherwise make them in column
      className={`${
        props.direction
          ? "alps-east__input-field-row-horizontal"
          : "alps-east__input-field-row"
      } `}
    >
      <label htmlFor={props.htmlFor} className={labelClass}>
        {props.labelText}
      </label>
      <input
        type={props.type}
        name={props.name}
        value={props.value}
        id={props.id}
        className={`alps-east__input-field ${props.className}`}
        placeholder={props.placeHolder}
        onChange={props.onChange}
        checked={props.checked}
      />
    </div>
  );
};

export default InputField;
