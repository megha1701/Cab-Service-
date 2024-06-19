import React from "react";
import "./Header.css";
import { Menu, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Header(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    setAnchorEl(null);
    sessionStorage.setItem("isloggedIn", false);
    props.setHasAccess(false);
    navigate("/");
  };

  return (
    <div className="header">
      <div className="header__left">
        <div className="logo">
          <a to="/">CabService</a>
        </div>
      </div>
      <div
        className="header__icons"
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <div className="pro-title" id="basic-button">
          <div className="pro-img">
            <img src="images/pro.png" alt="Pavan Belure" />
          </div>
        </div>
        <span className="pro-name">John </span>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
      </div>
    </div>
  );
}

export default Header;
