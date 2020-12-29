import React from "react";
import "../css/Player.css";
import Body from "./Body";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

const Player = ({ spotify }) => {
  return (
    <div className="player">
      <div className="player__body">
        <Sidebar />
        <Body />
      </div>
      <Footer />
    </div>
  );
};

export default Player;
