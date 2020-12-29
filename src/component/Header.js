import React from "react";
import "../css/Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import { useDataLayerValue } from "../DataLayer";

const Header = () => {
  const [{ user }, dispatch] = useDataLayerValue();
  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />
        <input type="text" placeholder="Search for Artists, Songs" />
      </div>
      <div className="header__right">
        <Avatar src="https://i.ibb.co/58fRjz0/wedding.jpg" alt="RQ" />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
};

export default Header;
