import React from 'react';
import PropTypes from 'prop-types';
import {
  base,
  nameAndText,
  profilePictureContainer,
  statusText,
} from './label.module.scss';

function Label({ name, status, pic }) {
  return (
    <div className={base}>
      <div className={profilePictureContainer}>
        <img src={pic} alt="profile" />
      </div>

      <div className={nameAndText}>
        {name}
        <p className={statusText}>{status}</p>
      </div>
    </div>
  );
}

Label.propTypes = {
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  pic: PropTypes.string.isRequired,
};

export default Label;
