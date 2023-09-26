import React from "react";
import "./styles.css";
import { BellIcon } from "./images";
import Logo from "./images/logo.png";
import { Link } from "react-router-dom";

export default function Header(props) {
  return (
    <div className="header">
      <div
        className={`navbar__toggle ${props.open ? "is-active" : ""} `}
        onClick={props.togglemenu}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <Link to={"/"}>
        <img src={Logo} alt="logo" />
      </Link>

      <div className="right">
        <p className="date">Sunday, 20 August</p>
        <p className="time">1:50 PM</p>
        <div className="bell-icon">
          <BellIcon />
        </div>
      </div>
    </div>
  );
}
