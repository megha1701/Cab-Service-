import React from "react";
import "./SideBar.css";
import { NavLink } from "react-router-dom";
import SideBarRow from "./SideBarRow";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
function SideBar() {
  return (
    <div className="sidebar">
      <NavLink className="" to="/dashboard">
        <SideBarRow Icon={HomeIcon} title="Dashboard" />
      </NavLink>
      <NavLink className="" to="/users">
        <SideBarRow Icon={PeopleIcon} title="Users" />
      </NavLink>
      <NavLink className="" to="/drivers">
        <SideBarRow Icon={HomeIcon} title="Drivers" />
      </NavLink>
      <NavLink className="" to="/cabs">
        <SideBarRow Icon={DirectionsBusIcon} title="Cabs" />
      </NavLink>
      <NavLink className="" to="/company">
        <SideBarRow Icon={HomeIcon} title="Company" />
      </NavLink>
      <NavLink className="" to="/trips">
        <SideBarRow Icon={HomeIcon} title="Trips" />
      </NavLink>
      <hr />
    </div>
  );
}

export default SideBar;
