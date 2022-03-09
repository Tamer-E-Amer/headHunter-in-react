/**
 * @description this is UserType component which is placed in the service section in the homepage. it show the type of the user of the page wheather it is a candidate or an employer
 * it accept props of the following properties
 * @param {integer} id              : id of the user type
 * @param {string}  type            : type of the user (candidate or employer)
 * @param {svg}     Icon            : Icon of the component
 * @param {string}  backgroundColor : background of the component
 */
import React from "react";
//css
import "./userType.css";
// react router rom
import { Link } from "react-router-dom";
const UserType = (props) => {
  return (
    // assign background color of the component according to the user type
    <div
      className={
        props.data.type === "employer"
          ? "alps-east__service__user-type center"
          : "alps-east__service__user-type alps-east__service__user-type-candidate center"
      }
    >
      {/* icon component that is imported in data file and passed as a prop */}
      {props.data.Icon}
      <p className="alps-east__service__user-type__text">
        {props.data.componentText}
      </p>
      <div className=" alps-east__service__user-type__button-container center">
        {/* link to login form */}
        <Link to="/login">
          <div className="alps-east__service__login-button center">Login</div>
        </Link>

        {/* link to register page */}
        <Link to="/register">
          <span>
            <a href="#">I do not have an account</a>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default UserType;
