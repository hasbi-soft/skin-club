import React from "react";
import "./styles.module.css";
import Logo from "../../Assets/Images/logo.png";
import Facebook from "../../Assets/Images/facebook.svg";
import Google from "../../Assets/Images/google.svg";
import Twitter from "../../Assets/Images/twitter.svg";
import Sideimg from "../../Assets/Images/sideimg.jpeg";
import { Link } from "react-router-dom";

const RegisterAccount = () => {
  return (
    <div className="wrapper">
      <div className="header">
        <img src={Logo} alt="logo" className="logo" />
      </div>
      <div className="container">
        <div className="left">
          <h1 className="text">Create an account</h1>
          <p className="login">
            Already have an account? <span>Log in</span>
          </p>
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
          <div className="orWrapper">
            <hr className="line-wrapper" />
            <span
              style={{ padding: "0 0.5rem", color: "rgba(76, 77, 79, 0.50)" }}
            >
              Or
            </span>
            <hr className="line-wrapper" />
          </div>
          <form>
            <div className="name-wrapper">
              <div className="name">
                <label htmlFor="fname">First Name</label>
                <input
                  className="input-text"
                  type="text"
                  placeholder="jane"
                  name="fname"
                />
                <p className="error">Error message</p>
              </div>
              <div className="name">
                <label htmlFor="lname">Last Name</label>
                <input
                  className="input-text"
                  type="text"
                  placeholder="Doe"
                  name="lname"
                />
                <p className="error">Error message</p>
              </div>
            </div>
            <div className="inputs">
              <div className="input-wrapper">
                <label htmlFor="email">Email</label>
                <input
                  className="input-text"
                  type="email"
                  placeholder="john@email.com"
                  name="email"
                />
                <p className="error">Error message</p>
              </div>
              <div className="input-wrapper">
                <label htmlFor="password">Password</label>
                <input
                  className="input-text"
                  type="password"
                  placeholder="password"
                  name="password"
                />
                <p className="error">Error message</p>
              </div>
            </div>
          </form>
          <div className="radio-wrapper">
            <input className="input-text" type="checkbox" />
            <p>Subscribe to our monthly newsletter</p>
          </div>
          <p className="terms">
            By clicking below you agree to our <span> Terms of Service</span>{" "}
            and <span>Privacy Policy</span>
          </p>
          <button className="sign-up">Sign Up</button>
          <p className="login-text">
            Already have an account? <Link to="/signin">Log in</Link>
          </p>
        </div>
        <div className="right">
          <img src={Sideimg} alt="Img" className="side-img" />
        </div>
      </div>
    </div>
  );
};

export default RegisterAccount;
