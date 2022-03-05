import React from "react";
//css
import "../../assets/css/SidebarMenu/sidebarMenu.css";
// sidebar data
import {
  employerSideBarMenu,
  candidateSideBarMenu,
} from "../../data/SidebarMenu";
const SidebarMenu = (props) => {
  //   console.log(employerSideBarMenu);
  // get candidate sideBarMenu
  // check the menuFor prop
  let menu = "";
  switch (props.menuFor) {
    case "candidate":
      menu = candidateSideBarMenu.map((item) => {
        return item;
      });
      break;

    default:
      menu = employerSideBarMenu.map((item) => {
        return item;
      });
      break;
  }

  const sideBar = menu.map((item) => {
    // test the color of the sidebar menu item
    const color = item.color;
    let backColorClass = "";
    console.log(color);
    switch (color) {
      case "#9f9a9a":
        backColorClass = "light-gray";
        break;
      case "#cf1919":
        backColorClass = "red";
        break;
      case "#2d2626":
        backColorClass = "dark-gray";
        break;
      case "#FEED00":
        backColorClass = "yellow";
        break;

      default:
        break;
    }
    return (
      // return menue item
      <div className="app__contact-alps-easr__side-bar__item" key={item.id}>
        <div
          className={`app__contact-alps-east__side-bar__left-border ${backColorClass}`}
        ></div>
        <div className="app__contact-alps-east__side-bar__text">
          {item.text}
        </div>
      </div>
    );
  });
  return <div>{sideBar}</div>;
};

export default SidebarMenu;
