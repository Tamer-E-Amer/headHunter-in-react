/**
 * @description this container hold the contact information of the candidate in the candidate profile form
 */

import React from "react";
//css
import "../../assets/css/CandidateContact/candidateContact.css";
//components
import { List, InputField } from "../../components";
// icon
import { MdAdd, MdClear } from "react-icons/md";
const CandidateContact = ({
  contactData,
  setCandidateData,
  phoneDefaultValues,
  socialDefaultValues,
  onChangeHandler,
}) => {
  ////////////////////////// phone number logic ////////////////////
  const onChangeHandler_contactData_phone = (e, index) => {
    const { name, value } = e.target;
    const phones = [...contactData.phone];
    phones[index][name] = value;
    setCandidateData((prev) => {
      return {
        ...prev,
        candidateContactData: {
          ...prev.candidateContactData,
          phone: phones,
        },
      };
    });
    // console.log(index, e.target.name);
    console.log(`${name} : ${value}`);
  };
  // adding phone number
  const addPhoneNumberHandler = () => {
    setCandidateData((prev) => {
      return {
        ...prev,
        candidateContactData: {
          ...prev.candidateContactData,
          phone: [...prev.candidateContactData.phone, phoneDefaultValues],
        },
      };
    });
  };
  // delete phone number
  const delPhoneNumber = (index) => {
    const phoneListClone = [...contactData.phone];
    phoneListClone.splice(index, 1);
    setCandidateData((prev) => {
      return {
        ...prev,
        candidateContactData: {
          ...prev.candidateContactData,
          phone: phoneListClone,
        },
      };
    });
  };

  ///////////////////// social links logic/////////////////////
  const onChangeHandler_contactData_social = (e, index) => {
    const { name, value } = e.target;
    const socialLinks = [...contactData.social];
    socialLinks[index][name] = value;
    setCandidateData((prev) => {
      return {
        ...prev,
        candidateContactData: {
          ...prev.candidateContactData,
          social: socialLinks,
        },
      };
    });
    // console.log(index, e.target.name);
    console.log(`${name} : ${value}`);
  };

  // add social link
  const addSocialHandler = () => {
    setCandidateData((prev) => {
      return {
        ...prev,
        candidateContactData: {
          ...prev.candidateContactData,
          social: [...prev.candidateContactData.social, socialDefaultValues],
        },
      };
    });
  };

  // delete social link
  const delSocialHandler = (index) => {
    const socialLinksClone = [...contactData.social];
    socialLinksClone.splice(index, 1);
    setCandidateData((prev) => {
      return {
        ...prev,
        candidateContactData: {
          ...prev.candidateContactData,
          social: socialLinksClone,
        },
      };
    });
  };
  return (
    <div className="app__candidate-profile-form__contact ">
      {/* email */}
      <InputField
        type="email"
        name="email"
        id="email"
        value={contactData.email} //// making the React state is the single value of truth
        htmlFor="email"
        labelText="E-Mail"
        placeHolder="E-Mail"
        className="app__candidate-profile-form__input"
        direction="col"
        // labelClass="app__candidate-profile-form__input-label"
        onChange={onChangeHandler}
      />

      {/* phone number */}

      {contactData.phone.map((phone, index) => {
        return (
          <div className="phone center" key={index}>
            <List
              items={["Select phone type", "Mobile", "Office", "House"]}
              label="Phone number"
              idName="type"
              value={phone.type ?? ""}
              onChange={(e) => {
                onChangeHandler_contactData_phone(e, index);
              }}
            />
            <InputField
              type="text"
              name="number"
              value={phone.number ?? ""}
              id="number"
              htmlFor="number"
              labelText=""
              placeHolder="Phone Number"
              className="app__candidate-profile-form__input"
              direction=""
              // labelClass="app__candidate-profile-form__input-label"
              onChange={(e) => {
                onChangeHandler_contactData_phone(e, index);
              }}
            />
            {/* add/delete icon */}
            {/* delete phone when the phone array length >1 */}

            {contactData.phone.length - 1 === index && (
              <div className="add-role center">
                <MdAdd
                  size={25}
                  color={"#554a4a"}
                  onClick={addPhoneNumberHandler}
                />
              </div>
            )}
            {contactData.phone.length > 1 && (
              <div className="del-role center">
                <MdClear
                  size={25}
                  color={"#a71717"}
                  onClick={() => {
                    delPhoneNumber(index);
                  }}
                />
              </div>
            )}
          </div>
        );
      })}

      {/* socials */}
      {contactData.social.map((social, index) => {
        return (
          <div className="social center" key={index}>
            <List
              items={["Select network", "Facebook", "Twitter", "Youtube"]}
              label="Social"
              idName="netName"
              value={social.netName ?? ""}
              onChange={(e) => {
                onChangeHandler_contactData_social(e, index);
              }}
            />
            <InputField
              type="text"
              name="link"
              value={social.link ?? ""}
              id="link"
              htmlFor="link"
              labelText=""
              placeHolder="Social Network link"
              className="app__candidate-profile-form__input"
              direction=""
              // labelClass="app__candidate-profile-form__input-label"
              onChange={(e) => {
                onChangeHandler_contactData_social(e, index);
              }}
            />
            {/* add/ delete icon */}

            {contactData.social.length - 1 === index && (
              <div className="add-role center">
                <MdAdd size={25} color={"#554a4a"} onClick={addSocialHandler} />
              </div>
            )}
            {contactData.social.length > 1 && (
              <div className="del-role center">
                <MdClear
                  size={25}
                  color={"#a71717"}
                  onClick={() => {
                    delSocialHandler(index);
                  }}
                />
              </div>
            )}
          </div>
        );
      })}

      {/* skype */}
      <InputField
        type="text"
        name="skype"
        // value={companyProfileData.companyTitle} //// making the React state is the single value of truth
        id="skype"
        htmlFor="skype"
        labelText="Skype"
        placeHolder="Skype Account"
        className="app__candidate-profile-form__input"
        direction="col"
        // labelClass="app__candidate-profile-form__input-label"
        // onChange={onChangeHandler}
      />
    </div>
  );
};

export default CandidateContact;
