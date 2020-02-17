import React from 'react';
import { base, chatList } from './chat-list.module.scss';

import Message from '../message';

function ChatList() {
  let messages = [
    {
      user: 1,
      data: 'Hello, have you finished the report?',
      timestamp: 1581849704,
      reply: 0,
      deleted_by: '',
    },

    {
      user: 2,
      data: "I'm sending the files now.",
      timestamp: 1581846584,
      reply: 0,
      deleted_by: '',
    },

    {
      user: 1,
      data: 'Thank you!',
      timestamp: 1581852644,
      reply: 0,
      deleted_by: '',
    },

    {
      user: 1,
      data:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      timestamp: 1581858830,
      reply: 0,
      deleted_by: '',
    },

    {
      user: 2,
      data: "I'm sending the files now.",
      timestamp: 1581846584,
      reply: 0,
      deleted_by: '',
    },

    {
      user: 1,
      data: 'Thank you!',
      timestamp: 1581852644,
      reply: 0,
      deleted_by: '',
    },

    {
      user: 1,
      data:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      timestamp: 1581858830,
      reply: 0,
      deleted_by: '',
    },

    {
      user: 2,
      data: "I'm sending the files now.",
      timestamp: 1581846584,
      reply: 0,
      deleted_by: '',
    },

    {
      user: 1,
      data: 'Thank you!',
      timestamp: 1581852644,
      reply: 0,
      deleted_by: '',
    },

    {
      user: 1,
      data:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      timestamp: 1581858830,
      reply: 0,
      deleted_by: '',
    },

    {
      user: 1,
      data: 'Hello, have you finished the report?',
      timestamp: 1581849704,
      reply: 0,
      deleted_by: '',
    },

    {
      user: 2,
      data: "I'm sending the files now.",
      timestamp: 1581846584,
      reply: 0,
      deleted_by: '',
    },

    {
      user: 1,
      data: 'Thank you!',
      timestamp: 1581852644,
      reply: 0,
      deleted_by: '',
    },

    {
      user: 1,
      data:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      timestamp: 1581858830,
      reply: 0,
      deleted_by: '',
    },

    {
      user: 2,
      data: "I'm sending the files now.",
      timestamp: 1581846584,
      reply: 0,
      deleted_by: '',
    },

    {
      user: 1,
      data: 'Thank you!',
      timestamp: 1581852644,
      reply: 0,
      deleted_by: '',
    },

    {
      user: 1,
      data:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      timestamp: 1581858830,
      reply: 0,
      deleted_by: '',
    },

    {
      user: 1,
      data: 'Hello, have you finished the report?',
      timestamp: 1581849704,
      reply: 0,
      deleted_by: '',
    },

    {
      user: 2,
      data: "I'm sending the files now.",
      timestamp: 1581846584,
      reply: 0,
      deleted_by: '',
    },

    {
      user: 1,
      data: 'Thank you!',
      timestamp: 1581852644,
      reply: 0,
      deleted_by: '',
    },

    {
      user: 1,
      data:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      timestamp: 1581858830,
      reply: 0,
      deleted_by: '',
    },
  ];
  let messageList = messages.map((mess, i) => {
    return (
      <Message
        user={mess.user}
        data={mess.data}
        timestamp={mess.timestamp}
        reply={mess.reply}
        deleted_by={mess.deleted_by}
        key={[i, mess.user]}
      />
    );
  });
  return (
    <div className={chatList}>
      <div className={base}>{messageList}</div>;
    </div>
  );
}

export default ChatList;
