import React from 'react';
import PropTypes from 'prop-types';

import {
  messageRow,
  sent,
  recieved,
  dataText,
  timeStmp,
} from './message.module.scss';

function Message({ user, data, timestamp, reply, deleted_by }) {
  const userId = 1; ///// From props
  const messageClass = user === userId ? sent : recieved;

  let time = new Date(); ///// From props

  function leadingZero(number) {
    if (number < 10) {
      return '0' + number;
    } else {
      return number;
    }
  }
  const messageDate =
    time.getDate() +
    '/' +
    time.getMonth() +
    1 +
    '/' +
    time.getFullYear() +
    ' - ' +
    time.getHours() +
    ':' +
    leadingZero(time.getMinutes());

  return (
    <div className={[messageRow, messageClass].join(' ')}>
      <p className={dataText}>{data}</p>
      <p className={timeStmp}>{messageDate}</p>
    </div>
  );
}

Message.propTypes = {
  user: PropTypes.number.isRequired,
  data: PropTypes.string.isRequired,
  timestamp: PropTypes.number.isRequired,
  reply: PropTypes.number.isRequired,
  deleted_by: PropTypes.string.isRequired,
};

export default Message;
