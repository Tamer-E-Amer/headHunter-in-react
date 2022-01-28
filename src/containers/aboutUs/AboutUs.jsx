import React from "react";
//css
import "./aboutUs.css";
//images
import ceo from "../../images/ceo.png";
const AboutUs = () => {
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
          <p>
            We are Alps.East, an online Web portal to connect the most talented
            candidates around the world and the companies / Employers in
            Austria, Switzerland and Germany
          </p>
          <p>
            You can find more than 600 job position for more than 70 companies
            in different fields.
          </p>
          <p>
            This Portal is founded by Mr. Adam Tarab. He lived in Austria more
            than 25 years ago. Mr. Adam Hopes the talented eastern youth can
            work in the large companies in Austria, Switzerland or Germany,
            because these countries have very big shortage in certain fields
            such as IT, Medicine and Engineering and they need qualified
            employees outside the EU, hence great chances that eastern youth can
            take.
          </p>
          <p>
            Alps.east will connect these qualified Youth and the large companies
            in these countries. we want also to say, we will your agent here. do
            not wory about some certain procedures that you should follow in
            order to have the Visa, renting an apartment and so on.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
