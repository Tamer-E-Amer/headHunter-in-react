/**
 * @description RedButton component is aimed to make a reusable button that can be used within all entire application
 * @param {string} className : holds the className for adjusting the original styling
 * @param {string} text : holds the text that appears on the button
 *
 */
import React from "react";
//css
import "./redButton.css";
const RedButton = (props) => {
  return (
    <button
      className={`alps-east__red-button ${props.className}`}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
};

export default RedButton;
