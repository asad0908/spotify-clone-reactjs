import React from "react";
import "../css/Player.css";
import Sidebar from "./Sidebar";

const Player = ({ spotify }) => {
  return (
    <div className="player">
      <div className="player__body">
        <Sidebar />
      </div>
    </div>
  );
};

export default Player;
