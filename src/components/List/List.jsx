/**
 * @description reusable list component
 * accept props
 * @param {Array}   - items     : list items
 * @param {string}  - label     : title of the list component
 * @param {string}  - class     : additional styling for the list
 * @param {string}  - idName   : name and is of the list
 */

import React from "react";
//css
import "../../assets/css/List/list.css";
const List = (props) => {
  // getting the list items
  const items = props.items.map((item, index) => {
    return <option key={index}>{item}</option>;
  });
  return (
    <div className="app__list center">
      <div className="label">{props.label}</div>
      <select
        name={props.idName}
        id={props.idName}
        value={props.value}
        onChange={props.onChange}
      >
        {items}
      </select>
    </div>
  );
};

export default List;
