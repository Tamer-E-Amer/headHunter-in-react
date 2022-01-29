import React from "react";
// import components
import { InputField, RedButton } from "../../components";
//css
import "./footer.css";
// importing data from JS data file
import homePageData from "../../data/homePage";
const Footer = () => {
  // initialize state for subscription form
  const [subscriptionMail, setSubscriptionMail] = React.useState("");

  console.log(subscriptionMail);
  // onChangeHandler for the subscription mail
  const onChangeHandler = (event) => {
    setSubscriptionMail(event.target.value);
  };
  // subscription submit handling
  const subscriptionSubitHandle = (event) => {
    event.preventDefault();
    console.log({ subscriptionMail });
  };
  // get navigation data
  const navigation = homePageData.footer.navigation;
  //get external links
  const externalLinks = homePageData.footer.externalLinks;
  // get copyrights
  const copyRights = homePageData.footer.copyrights;
  // mapping throught navigation array
  const links = navigation.map((nav) => {
    return (
      <a href={nav.url} key={nav.id}>
        {nav.linkName}
      </a>
    );
  });
  // mapping through external links
  const exLinks = externalLinks.map((link) => {
    return (
      <a href={link.url} key={link.id}>
        {link.linkName}
      </a>
    );
  });
  return (
    <>
      <div className="alps-east__footer center">
        {/* navigation links */}
        <div className="alps-east__footer__footer-col">{links}</div>
        {/* external links */}
        <div className="alps-east__footer__footer-col">{exLinks}</div>

        <div className="alps-east__footer__footer-col alps-east__footer__footer-subscription-column">
          <h3 className="alsp-east__footer__footer-col__subscription-title">
            Subscribe Us
          </h3>
          <p className="alsp-east__footer__footer-col__subscription-text">
            Sign Up to our news Letter to get the latest job posting
          </p>
          <form onSubmit={subscriptionSubitHandle}>
            {/* input filed component */}
            <InputField
              type="email"
              name="subscriptionMail"
              value={subscriptionMail} // making the React state is the single value of truth
              id="subscription"
              htmlFor="subscription"
              labelText="E-Mail"
              className="alps-east__footer__subscription-input-field"
              onChange={onChangeHandler}
            />
            {/* red button component */}
            <RedButton
              text="Get notified"
              className="alps-east__footer__subscription-button center"
            />
          </form>
        </div>
      </div>
      <div className="alps-east__copyrights center">{copyRights}</div>
    </>
  );
};

export default Footer;
