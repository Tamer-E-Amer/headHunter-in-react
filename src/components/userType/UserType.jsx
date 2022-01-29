import React from "react";
// icon
//import { MdBusinessCenter } from "react-icons/md";
//css
import "./userType.css";
//data
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
        <div className="alps-east__service__login-button center">Login</div>
        <span>
          <a href="#">I do not have an account</a>
        </span>
      </div>
    </div>
  );
};

export default UserType;
