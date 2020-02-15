import React from "react";

import { base } from "./home.module.scss";

import ContactHeader from "../../components/contact-header";
import ChatFrame from "../../components/chat-frame";

function Home(props) {
  return (
    <div className={base}>
      <ContactHeader />
      <ChatFrame />
    </div>
  );
}

export default Home;
