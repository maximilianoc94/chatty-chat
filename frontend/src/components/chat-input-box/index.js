import React from 'react';

import {
  base,
  baseBox,
  msgBox,
  inputMsg,
  inputButtons,
} from './chat-input-box.module.scss';

import Button from '../shared/button';

function ChatInputBox(props) {
  function sendMessage(params) {
    console.log('Sending Message');
  }
  return (
    <div className={base}>
      <div className={baseBox}>
        <div className={msgBox}>
          <input className={inputMsg} placeholder="Enter your Message" />
          <div className={inputButtons}>
            <Button
              icon="attach"
              onClick={(event) => {
                event.preventDefault();
                sendMessage();
              }}
              size="medium"
              background={'grayBack'}
            />
            <Button
              icon="record"
              onClick={(event) => {
                event.preventDefault();
                sendMessage();
              }}
              size="medium"
              background={'grayBack'}
            />
            <Button
              icon="send"
              onClick={(event) => {
                event.preventDefault();
                sendMessage();
              }}
              size="medium"
              background={'grayBack'}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatInputBox;
