import React, { useEffect } from "react";
import "../css/Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { useDataLayerValue } from "../DataLayer";

const Sidebar = () => {
  const [{ playlists }, dispatch] = useDataLayerValue();
  useEffect(() => {
    if (playlists) {
      console.log(playlists);
    }
  }, [playlists]);
  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="logo"
      />
      <SidebarOption Icon={HomeIcon} title="Home" />
      <SidebarOption Icon={SearchIcon} title="Search" />
      <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />
      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />
      {playlists?.items?.map((play) => (
        <SidebarOption title={play.name} />
      ))}
      <SidebarOption bold title="Discover Weekly" />
      <SidebarOption title="Rock" />
      <SidebarOption title="RnB" />
      <SidebarOption title="Snakers" />
      <SidebarOption title="Love Songs" />
      <SidebarOption title="Rap" />
      <SidebarOption title="Dance" />
      <SidebarOption title="Sad songs" />
      <SidebarOption title="Party" />
      <SidebarOption title="clubs" />
    </div>
  );
};

export default Sidebar;
