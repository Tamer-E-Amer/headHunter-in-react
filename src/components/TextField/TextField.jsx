/**
 * @description this component to build a reusable text area field
 *  @param {string}    name        : accept the name of the input field
 *  @param {string}    id          : accept the ID of the input field
 *  @param {string}    htmlFor     : for the lable of the input field
 *  @param {string}    labelText   : accept the text of the input field label
 *  @param {string}    className   : the calssname of the input field to adjust its styling
 * @param {string}    placeHolder  : the placeHolder of the input field
 * @param {string}    onchange     : the name of the function for onChangeEvent
 */

import React from "react";
// css
import "../../assets/css/TextField/textField.css";
const TextField = (props) => {
  return (
    <div className="app__text-area-row">
      <label htmlFor={props.htmlFor} className="app__text-area__label">
        {props.labelText}
      </label>
      <textarea
        name={props.name}
        value={props.value}
        id={props.id}
        placeholder={props.placeHolder}
        className={`app__teat-area ${props.className}`}
        onChange={props.onChange}
      />
    </div>
  );
};

export default TextField;
