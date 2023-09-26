import React from "react";
import Sideimg3 from "../../Assets/Images/sideimg3.png";
import Logo from "../../Assets/Images/logo.png";
import { Link } from "react-router-dom";
import "./Forgot.css";

const Forgot = () => {
  return (
    <div className="wrapper123">
      <div className="header123">
        <Link to={"/"}>
          <img src={Logo} alt="logo" className="logo" />
        </Link>
      </div>
      <div className="container">
        <div className="left">
          <h1 className="text">Forgot your password?</h1>
          <p className="login2">
            No worries, enter your email below to get instructions to reset your
            password
          </p>
          <form>
            <div className="inputs">
              <div className="input-wrapper123">
                <label htmlFor="email" style={{ marginBottom: "10px" }}>
                  Email
                </label>
                <input type="email" placeholder="john@email.com" name="email" />
                <p className="error">Error message</p>
              </div>
            </div>
          </form>
          <button className="sign-up" style={{ marginTop: "20px" }}>
            Reset Password
          </button>
          <p className="login-text">
            <Link
              to="/remember"
              style={{
                fontSize: "14px",
                color: "#4C4D4F",
              }}
            >
              I remember my password
            </Link>
          </p>
        </div>
        <div className="right123">
          <img src={Sideimg3} alt="Img" className="side-img" />
        </div>
      </div>
    </div>
  );
};

export default Forgot;
