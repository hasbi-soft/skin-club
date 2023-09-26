import React from "react";
import "./Page404.css";
import Logo from "../../Assets/Images/logo.png";

const Page404 = () => {
  return (
    <div className="wrapper">
      <div className="header">
        <img src={Logo} alt="logo" className="logo" />
      </div>
      <div className="container2">
        <div className="error-box">
          <h1 className="error-num">404</h1>
          <h1 className="error-text">Page Not Found</h1>
          <p className="error-message">
            We’re sorry, the page you requested could not be found
          </p>
          <button className="sign-up" style={{ marginTop: "20px" }}>
            Let’s Go Back To Home Page
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page404;
