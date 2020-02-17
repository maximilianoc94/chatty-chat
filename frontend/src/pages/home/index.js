import React from 'react';

import { base, middlePanel } from './home.module.scss';

import ContactHeader from '../../components/contact-header';
import ChatList from '../../components/chat-list';
import ChatInputBox from '../../components/chat-input-box';

function Home() {
  return (
    <div className={base}>
      <div className={middlePanel}>
        <ContactHeader />
        <ChatList />
        <ChatInputBox />
      </div>
    </div>
  );
}

export default Home;
