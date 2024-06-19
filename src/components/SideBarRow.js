import React from "react";

function SideBarRow({ Icon, title }) {
  return (
    <div className="sidebarRow">
      <Icon classNamee="sidebarRow__icon"></Icon>
      <h2 className="sidebarRow__title">{title}</h2>
    </div>
  );
}

export default SideBarRow;
