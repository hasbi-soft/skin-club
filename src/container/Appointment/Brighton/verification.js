import logo from "../../assets/Logo.svg";
import bell from "../../assets/Bell.svg";
import bar from "../images/Bar.svg";
import "./style.css";
import { Link } from "react-router-dom";
import verify from "../images/verify.png";

function BrightonVerification() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="bar-content">
          <img src={bar} alt="" />
        </div>
        <Link to={"/"}>
          <img src={logo} className="App-logo" alt="logo" />
        </Link>
        <div className="header-content">
          <span>Sunday, 20 August</span>
          <span>1:50 PM</span>
          <img
            src={bell}
            style={{ color: "#4C4D4F" }}
            className="bell-icon-header"
            alt="notification"
          />
        </div>
      </header>
      <div className="body">
        <div className="side-bar">
          <Link to={"/doctor-dashboard"} className="side-bar-text">
            Overview
          </Link>
          <Link to={"/doctor-detail"} className="side-bar-text">
            Profile
          </Link>
          <Link to={"/appointment"} className="side-bar-text active">
            Appointments
          </Link>
          <span className="side-bar-text">History</span>
          <span className="side-bar-text">Messages</span>
          <span className="side-bar-text">Support</span>
          <span className="side-bar-text">Aftercare</span>
          <span className="side-bar-text">Invoices</span>
        </div>
        <div className="wrappers">
          <div style={{ padding: "30px" }}>
            <div className="title">
              <span style={{ fontSize: "30px" }}>Appointments </span>
              <span style={{ color: "rgba(0, 0, 0, 0.5)" }}> / Brighton</span>
            </div>
            <div style={{ color: "rgba(76, 77, 79, 0.85)", marginTop: "20px" }}>
              Enter verification code
            </div>
            <div style={{ color: "rgba(76, 77, 79, 0.5)", marginTop: "20px" }}>
              Enter the 6 digit code sent to xxx-xxx-xxxx. This may take a
              moment
            </div>
            <div className="input-wrapper">
              <label htmlFor="email">Email</label>
              <input
                className="input-text"
                type="email"
                placeholder="Enter verification code"
                name="email"
              />
            </div>
            <button className="sign-up">Verify</button>
            <div style={{ textAlign: "center", marginTop: "30px" }}>OR</div>
            <div className="guest-text">Continue as a Guest</div>
          </div>
          <div>
            <img src={verify} alt="" style={{ width: "100%" }} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default BrightonVerification;
