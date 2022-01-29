import React from "react";
import { UserType, CategoryCard } from "../../components";
//css
import "./service.css";
//service section data
import serviceData from "../../data/homePage";

const Service = () => {
  // mapping through service data to extrct userType components
  const userTypes = serviceData.service.userTypes.map((userType) => {
    return <UserType key={userType.id} data={userType} />;
  });

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
        {/* <UserType />
        <UserType /> */}
        {userTypes}
      </div>
      <p className="alps-east__service__header-text">
        You can find more than 600 job position for more than 40 companies in
        different fields
      </p>
      <div className="alps-east__service__category-card-list">
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </div>
    </div>
  );
};

export default Service;
