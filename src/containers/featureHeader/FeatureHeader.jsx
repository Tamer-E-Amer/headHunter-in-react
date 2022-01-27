import React from "react";
// css
import "./featureHeader.css";
const FeatureHeader = () => {
  return (
    <div className="alps-east__feature-header center">
      <h1 className="alps-east__feature-header__title">
        Search your dream job here
      </h1>
      <p className="alps-east__feature-header__body">
        Easy simple steps in <strong>Alps.East</strong> Portal and get your
        dream job in the biggest companies in{" "}
        <strong>Austria, Switzerland and Germany</strong>
      </p>
      {/* job search form */}
      <form
        action=""
        method="post"
        className="alps-east__feature-header__search-form "
      >
        <div className="form-row center">
          <label htmlFor="searchFor">Search for</label>
          <input
            type="text"
            name="searchFor"
            id="searchFor"
            placeholder="Job title, category or skill"
          />
        </div>
        <div className="form-row center">
          <label htmlFor="searchIn">Search in</label>
          <input
            type="text"
            name="searchIn"
            id="searchIn"
            placeholder="Country,City or Postal Code"
          />
        </div>

        <button className="alps-east__feature-header__search-form__button">
          search
        </button>
      </form>
    </div>
  );
};

export default FeatureHeader;
