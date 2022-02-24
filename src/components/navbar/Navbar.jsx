import React from "react";
import "./navbar.css";
//react icons
import {
  FaHome,
  FaInfoCircle,
  FaPhoneAlt,
  FaSignInAlt,
  FaUsers,
  FaBars,
} from "react-icons/fa";
import { RiCloseLine } from "react-icons/ri";
import { MdBusinessCenter } from "react-icons/md";

import { IconContext } from "react-icons";
// logo
import logo from "../../images/logo.png";

const Navbar = () => {
  // state that holds the navbar menubar
  const [isMenuToggle, setIsMenuToggle] = React.useState(false);
  //state for screen of 700px
  const [windowSize, setWindowSize] = React.useState(window.outerWidth);

  // state for scrolling
  const [isScroll, setIsScroll] = React.useState(false);

  // functional component for navbar menu
  const NavbarButtons = (props) => (
    <>
      <li className="center active">
        <IconContext.Provider
          value={{ className: "alps-east__navbar__menu-buttons__icon" }}
        >
          <FaHome />
        </IconContext.Provider>
        {/* In order to Hide the name of the link in the Middle screen we need to check the value of the scrren is less than 700px and greater than 500 px */}
        {(props.windowSize > 700 || props.windowSize <= 500) && "Home"}
      </li>
      <li className="center">
        <IconContext.Provider
          value={{ className: "alps-east__navbar__menu-buttons__icon" }}
        >
          <MdBusinessCenter />
        </IconContext.Provider>
        {(props.windowSize > 700 || props.windowSize <= 500) && "Services"}
      </li>
      <li className="center">
        <IconContext.Provider
          value={{ className: "alps-east__navbar__menu-buttons__icon" }}
        >
          <FaInfoCircle />
        </IconContext.Provider>
        {(props.windowSize > 700 || props.windowSize <= 500) && "About"}
      </li>
      <li className="center">
        <IconContext.Provider
          value={{ className: "alps-east__navbar__menu-buttons__icon" }}
        >
          <FaPhoneAlt />
        </IconContext.Provider>
        {(props.windowSize > 700 || props.windowSize <= 500) && "Contact Us"}
      </li>
    </>
  );
  // functional component for the login-sign in buttons
  const LogInSignInButtons = (props) => (
    <>
      <li className="center">
        <IconContext.Provider
          value={{ className: "alps-east__navbar__menu-buttons__icon" }}
        >
          <FaSignInAlt />
        </IconContext.Provider>
        {(props.windowSize > 700 || props.windowSize <= 500) && "Login"}
      </li>
      <li className="center sign-up">
        <IconContext.Provider
          value={{ className: "alps-east__navbar__menu-buttons__icon" }}
        >
          <FaUsers />
        </IconContext.Provider>
        {(props.windowSize > 700 || props.windowSize <= 500) && "Sign Up"}
      </li>
    </>
  );
  // handle bar menu toggle
  const handleToggle = () => {
    setIsMenuToggle((previsMenuToogle) => !previsMenuToogle);
  };
  //console.log(windowSize);
  // console.log("isScroll", isScroll);

  // handle resize window
  React.useEffect(() => {
    const watchWidth = () => {
      setWindowSize(window.outerWidth);
    };
    // setWindowSize(window.outerWidth);
    window.addEventListener("resize", watchWidth);
    // clean up function to avoid memory leak
    return () => {
      window.removeEventListener("resize", watchWidth);
    };
  }, [windowSize]);

  //TODO: test scrolling in small pages such as login and sign in
  //test navbar with scrolling
  // React.useEffect(() => {
  //   const watchScroll = () => {
  //     if (window.scrollY > 100) {
  //       setIsScroll(true);
  //     }
  //   };

  //   window.addEventListener("scroll", watchScroll);
  // }, []);

  return (
    <div
      className={isScroll ? "alps-east__navbar fixed " : "alps-east__navbar"}
    >
      {/* logo */}
      <img src={logo} alt="logo" className="alps-east__navbar__logo" />
      {/* navbar Buttons from functional component */}
      <ul className="alps-east__navbar__menu-buttons center">
        <NavbarButtons windowSize={windowSize} />
      </ul>
      {/* login and signup butons */}
      <ul className="alps-east__navbar__login-signup-buttons center">
        <LogInSignInButtons windowSize={windowSize} />
      </ul>
      {/* medium and small screen bar menu */}
      <div className=" alps-east__navbar__bars ">
        {isMenuToggle ? (
          <RiCloseLine color="#fff" size={32} onClick={handleToggle} />
        ) : (
          <FaBars color="#fff" size={32} onClick={handleToggle} />
        )}
        {isMenuToggle && (
          <div className="alps-east__navbar__menu scale-up-top">
            <NavbarButtons windowSize={windowSize} />
            <LogInSignInButtons windowSize={windowSize} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
