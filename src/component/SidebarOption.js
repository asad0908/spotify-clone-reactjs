import React from "react";
import "../css/SidebarOption.css";

const SidebarOption = ({ title, Icon, bold }) => {
  const styles = {
    color: "#fff",
  };
  return (
    <div className="sidebarOption">
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? <h4>{title}</h4> : <p style={bold && styles}>{title}</p>}
    </div>
  );
};

export default SidebarOption;
