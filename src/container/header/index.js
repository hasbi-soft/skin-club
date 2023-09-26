import React from "react";
import "./styles.css";
import { BellIcon } from "./images";
import Logo from "./images/logo.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header2">
      <Link to={"/"}>
        <img src={Logo} alt="logo" />
      </Link>
      <div className="right2">
        <p className="date">Sunday, 20 August</p>
        <p className="time">1:50 PM</p>
        <div className="bell-icon">
          <BellIcon />
        </div>
      </div>
    </div>
  );
}
