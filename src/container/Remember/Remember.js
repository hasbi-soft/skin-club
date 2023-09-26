import React from "react";
import Sideimg3 from "../../Assets/Images/sideimg3.png";
import Logo from "../../Assets/Images/logo.png";
import { Link } from "react-router-dom";
import "./Remember.css";

const Remember = () => {
  return (
    <div className="wrapper">
      <div className="header">
        <img src={Logo} alt="logo" className="logo" />
      </div>
      <div className="container">
        <div className="left">
          <h1 className="text">Reset your password</h1>
          <p className="login2">
            NCreate a new strong password, must be at least 8 characters
            long
          </p>
          <form>
            <div className="inputs">
              <div className="input-wrapper">
                <label htmlFor="email">New Password</label>
                <input type="password" placeholder="**********" name="email" />
                <p className="error">Error message</p>
              </div>
              <div className="input-wrapper">
                <label htmlFor="email">Confirm Password</label>
                <input type="password" placeholder="**********" name="email" />
                <p className="error">Error message</p>
              </div>
            </div>
          </form>
          <button className="sign-up" style={{ marginTop: "20px" }}>
            Reset Password
          </button>
          <p className="login-text">
            <Link
              to="/signin"
              style={{
                fontSize: "14px",
                color: "#4C4D4F",
              }}
            >
              Back to Login
            </Link>
          </p>
        </div>
        <div className="right">
          <img src={Sideimg3} alt="Img" className="side-img" />
        </div>
      </div>
    </div>
  );
};

export default Remember;
