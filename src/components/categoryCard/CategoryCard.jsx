/**
 * @description this is job category card components.it is in the Service section. it contains information about number of the job positions and related companies
 * it accept props of the following properties
 * @param {integer}   id        : id of the job category
 * @param {string}    category  : category name
 * @param {integer}   positions : number of openining position
 * @param {sv}        Icon      : Icon of the category card
 */
import React from "react";
//css
import "./categoryCard.css";
// raect router dom
import { Link } from "react-router-dom";
const CategoryCard = (props) => {
  return (
    <Link to={`/jobList/${props.data.category}`}>
      <div className="alps-east__service__category-card center">
        {/* catrgory card icon */}
        {props.data.Icon}
        <p className="alps-east__service__category-card__title">
          {/* category name */}
          {props.data.category}
        </p>
        <p className="alps-east__service__category-card__position-count">
          {/* opening positions count */}
          <span className="number">{props.data.positions}</span>{" "}
          <span className="count-for-what">Opening positions</span>
        </p>
        <p className="alps-east__service__category-card__company-count">
          {/* company count */}
          <span className="number">{props.data.companies}</span>{" "}
          <span className="count-for-what">Employers</span>
        </p>
      </div>
    </Link>
  );
};

export default CategoryCard;
