import React from 'react';

import { base, headerButtons } from './contact-header.module.scss';

import Label from '../shared/label';
import Button from '../shared/button';

function ContactHeader() {
  const startCall = () => {
    // console.log('Calling');
  };

  const startVideoCall = () => {
    // console.log('VideoCalling');
  };

  return (
    <div className={base}>
      <Label
        name="Karl Hubane"
        pic="https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png"
        status="online"
        firstMessage="false"
        layout="header"
      />
      <div className={headerButtons}>
        <Button
          icon="call"
          onClick={(event) => {
            event.preventDefault();
            startCall();
          }}
          size="medium"
        />
        <Button
          icon="video"
          onClick={(event) => {
            event.preventDefault();
            startVideoCall();
          }}
          size="medium"
        />
        <Button icon="dropMenu" size="medium" />
      </div>
    </div>
  );
}

export default ContactHeader;
