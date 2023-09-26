import React from "react";
import Logo from "../../Assets/Images/logo.png";
import Sideimg2 from "../../Assets/Images/Sideimg2.png";
import Facebook from "../../Assets/Images/facebook.svg";
import Google from "../../Assets/Images/google.svg";
import Twitter from "../../Assets/Images/twitter.svg";
import { Link } from "react-router-dom";
import "./Signin.css";

const Signin = () => {
  return (
    <div className="wrapper">
      <div className="headerrrrr">
        <img src={Logo} alt="logo" className="logo" />
      </div>
      <div className="container">
        <div className="left">
          <h1 className="text">Welcome to Skin Club</h1>
          <p className="login">
            Don’t have an account?{" "}
            <Link
              to="/"
              style={{
                fontSize: "14px",
                color: "#4C4D4F",
              }}
            >
              Sign up
            </Link>
          </p>
          <div className="inputs">
            <div className="input-wrapperer">
              <label htmlFor="email" style={{ marginBottom: "10px" }}>
                Email
              </label>
              <input type="email" placeholder="john@email.com" name="email" />
              <p className="errorrrr">Error message</p>
            </div>
            <div className="input-wrapperer">
              <label htmlFor="password" style={{ marginBottom: "10px" }}>
                Password
              </label>
              <input type="password" placeholder="**********" name="password" />
              <div className="error-wrapperr">
                <p className="errorrrr"></p>
                <Link
                  to="/forgot"
                  style={{
                    display: "inline",
                    float: "right",
                    fontSize: "14px",
                    paddingTop: "2px",
                    color: "#4C4D4F",
                  }}
                >
                  Forgot your password
                </Link>
              </div>
            </div>
          </div>
          <div className="radio-wrapper">
            <input type="checkbox" />
            <p>Remember Me</p>
          </div>
          <button className="sign-up" style={{ marginTop: "20px" }}>
            <Link
              to={"/patient-dashboard"}
              style={{ textDecoration: "none", color: "#fff" }}
            >
              Log In
            </Link>
          </button>
          <p className="login-text">
            Don’t have an account?{" "}
            <Link
              to="/"
              style={{
                fontSize: "14px",
                color: "#4C4D4F",
              }}
            >
              Sign up
            </Link>
          </p>
          <div className="orWrapper">
            <hr className="line-wrapper" />
            <span
              style={{ padding: "0 0.5rem", color: "rgba(76, 77, 79, 0.50)" }}
            >
              Or
            </span>
            <hr className="line-wrapper" />
          </div>
          <div className="login-with-wrapper">
            <div className="login-with">
              <img src={Facebook} alt="facebook" className="facebook-logo" />
              <span>Continue with Facebook</span>
            </div>
            <div className="login-with">
              <img src={Google} alt="google" className="facebook-logo" />
              <span>Continue with Google</span>
            </div>
            <div className="login-with">
              <img src={Twitter} alt="twitter" className="facebook-logo" />
              <span>Continue with Twitter</span>
            </div>
          </div>
        </div>
        <div className="righttt">
          <img src={Sideimg2} alt="Img" className="side-img" />
        </div>
      </div>
    </div>
  );
};

export default Signin;
