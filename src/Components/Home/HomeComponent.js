import React from "react";
import ChatsComponent from "../Chats/ChatsComponent";
import Conversation from "../Conversation/ConversationComponent";
import FooterComponent from "../Footer/FooterComponent";
import "./Home.css";

function HomeComponent() {
  return (
    <div className="overflow-hidden">
      This is home
      <div className="row mx-0 flex-grow-1">
        <div className="col-3 px-0">
          <ChatsComponent />
        </div>
        <div className="col-9 px-0">
          <Conversation />
        </div>
      </div>
      <FooterComponent />
    </div>
  );
}

export default HomeComponent;
