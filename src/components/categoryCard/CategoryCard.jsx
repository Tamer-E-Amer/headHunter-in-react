import React from "react";
//icons
import { FaGraduationCap } from "react-icons/fa";
//css
import "./categoryCard.css";

const CategoryCard = () => {
  return (
    <div className="alps-east__service__category-card center">
      <FaGraduationCap color="#554A4A" size={70} />
      <p className="alps-east__service__category-card__title">Engineering</p>
      <p className="alps-east__service__category-card__position-count">
        <span className="number">2555</span>{" "}
        <span className="count-for-what">Opening positions</span>
      </p>
      <p className="alps-east__service__category-card__company-count">
        <span className="number">4</span>{" "}
        <span className="count-for-what">Employers</span>
      </p>
    </div>
  );
};

export default CategoryCard;
