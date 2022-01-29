/**
 *@description this is About us container that holds paragraphs gathered dynamically from JS data file
 */
import React from "react";
//css
import "./aboutUs.css";
//images
import ceo from "../../images/ceo.png";
//import about text
import homePageData from "../../data/homePage";
const AboutUs = () => {
  // get about us data
  const aboutUsData = homePageData.aboutUs;

  // loop throught paragraphs array
  const paragraphs = aboutUsData.map((p) => {
    return <p key={p.pId}>{p.p}</p>;
  });
  return (
    <div className="alps-east__about-us">
      <h1 className="alps-east__about-us__header">About Us</h1>
      <div className="alps-east__about-us__about-data-container ">
        <img
          src={ceo}
          alt="ALps east founder"
          className="alps-east__about-us__about-data-container__ceo"
        />
        <div className="alps-east__about-us__about-data-container__text">
          {/* display about us paragraphs */}
          {paragraphs}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
