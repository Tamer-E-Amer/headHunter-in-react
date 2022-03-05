/**
 * @description this component holds the the main Information about the candidate that is hown on the left side upper the side bar menu in the pages of candidate
 */

import React from "react";
//css
import "../../assets/css/CandidateInfo/candidateInfo.css";
// icons
import { MdBusinessCenter, MdMailOutline, MdLocationPin } from "react-icons/md";
const CandidateInfo = () => {
  return (
    <div className="app__candidate-profile__candidate-info center">
      {/* candidate Name */}
      <div className="app__candidate-profile__candidate-info__name-wrapper center">
        <div className="app__candidate-profile__candidate-info__name__avatar center">
          avatar
        </div>
        <h1 className="app__candidate-profile__name-text">Candaite Name</h1>
      </div>
      {/* location */}
      <div className="app__candidate-profile__candidate-info__position">
        <MdBusinessCenter size={25} color={"#9f9a9a"} />
        <div className="text">Frontend Engineer</div>
      </div>
      {/* employees */}
      <div className="app__candidate-profile__candidate-info__mail">
        <MdMailOutline size={25} color={"#9f9a9a"} />
        <div className="text">John.Doe@gmail.com</div>
      </div>
      {/* location */}
      <div className="app__candidate-profile__candidate-info__location">
        <MdLocationPin size={25} color={"#a71717"} />
        <div className="text">Berlin | Germany</div>
      </div>
    </div>
  );
};

export default CandidateInfo;
