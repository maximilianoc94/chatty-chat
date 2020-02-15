import React from 'react';

import {
  base,
  nameAndText,
  profilePictureContainer,
  statusText,
} from './label.module.scss';

import profilePic from '../../images/profilePic.jpg';

function Label({ name, status }) {
  return (
    <div className={base}>
      <div className={profilePictureContainer}>
        <img src={profilePic} alt="profile" />
      </div>

      <div className={nameAndText}>
        <div>{name}</div>
        <p className={statusText}>{status}</p>
      </div>
    </div>
  );
}

export default Label;
