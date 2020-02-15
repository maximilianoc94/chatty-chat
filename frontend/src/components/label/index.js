import React from "react";

import {
  base,
  nameAndText,
  profilePictureContainer,
  statusText
} from "./label.module.scss";

import profilePic from "../../images/profilePic.jpg";

function Label(props) {
  return (
    <div className={base}>
      <div className={profilePictureContainer}>
        <img src={profilePic} alt="profile" />
      </div>

      <div className={nameAndText}>
        <div>{props.name}</div>
        <p className={statusText}>{props.status}</p>
      </div>
    </div>
  );
}

export default Label;
