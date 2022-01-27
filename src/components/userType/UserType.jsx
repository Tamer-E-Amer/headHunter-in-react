import React from "react";
//icon
import { MdBusinessCenter } from "react-icons/md";
//css
import "./userType.css";
const UserType = () => {
  return (
    <div className="alps-east__service__user-type center">
      <MdBusinessCenter size={45} color="#fff" />
      <p className="alps-east__service__user-type__text">
        If you are an Employer, you can register the site completely for free
        and then select one of our planes that matches your needs with very
        competitive fees.
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
