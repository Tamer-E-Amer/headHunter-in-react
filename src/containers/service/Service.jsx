/**
 * @description container components that holds the serive section components
 */
import React from "react";
import { UserType, CategoryCard } from "../../components";
//css
import "./service.css";
//service section data
import serviceData from "../../data/homePage";

// import positions count and companies count from statistics helper file
import { positionCount, companiesCount } from "../../data/statistics";

const Service = () => {
  // mapping through service data to extrct userType components data
  const userTypes = serviceData.service.userTypes.map((userType) => {
    return <UserType key={userType.id} data={userType} />;
  });

  // maping through serviceData to extract the categoryCard component data
  const categoryCards = serviceData.service.jobCategoryData.map(
    (categoryCard) => {
      return <CategoryCard key={categoryCard.id} data={categoryCard} />;
    }
  );

  return (
    <div className="alps-east__service">
      <h1 className="alps-east__service__title">Service</h1>
      <p className="alps-east__service__header-text">
        Once you logged into our portal, we have the honor to provide you the
        easiest way to find your dream Job in the biggest companies in countries
        (Austria, Switzerland and Germany). we will serve you as a as{" "}
        <strong>Employer </strong>
        or a <strong>candidate</strong>.
      </p>
      <div className="alps-east__user-type-container center">
        {/* put the user type component here */}
        {userTypes}
      </div>
      <p className="alps-east__service__header-text">
        You can find more than {positionCount.positions} job position provided
        from {companiesCount.companies} companies in different fields
      </p>
      <div className="alps-east__service__category-card-list">
        {/* list of category cards */}
        {categoryCards}
      </div>
    </div>
  );
};

export default Service;
