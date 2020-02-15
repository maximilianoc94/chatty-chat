import React from "react";

import { base, headerButtons } from "./contact-header.module.scss";

import Label from "../label";
import Button from "../button";

function ContactHeader(props) {
  const startCall = () => {
    console.log("Calling");
  };

  const startVideoCall = () => {
    console.log("VideoCalling");
  };

  return (
    <div className={base}>
      <Label
        name="Karl Hubane"
        pic=""
        status="online"
        firstMessage="false"
        layout="header"
      />
      <div className={headerButtons}>
        <Button
          icon={"call"}
          onClick={event => {
            startCall();
          }}
          size="medium"
        />
        <Button
          icon={"video"}
          onClick={event => {
            startVideoCall();
          }}
          size="medium"
        />
        <Button icon={"dropMenu"} size="medium" />
      </div>
    </div>
  );
}

export default ContactHeader;
