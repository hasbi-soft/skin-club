import logo from "../../assets/Logo.svg";
import bell from "../../assets/Bell.svg";
import bar from "../images/Bar.svg";
import "./style.css";
import { Link } from "react-router-dom";
import emailAndPhone from "../images/emailAndPhone 1.png";

function Prahran() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="bar-content">
          <img src={bar} alt="" />
        </div>
        <img src={logo} className="App-logo" alt="logo" />
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
              <span style={{ color: "rgba(0, 0, 0, 0.5)" }}> / Prahran</span>
            </div>
            <div style={{ color: "rgba(76, 77, 79, 0.85)", marginTop: "20px" }}>
              Enter your email and phone number
            </div>
            <div style={{ color: "rgba(76, 77, 79, 0.5)", marginTop: "20px" }}>
              Help us find or set up your account by verifying your email and
              phone. Referral credit is only valid for verified new patients
            </div>
            <div className="input-wrapper">
              <label htmlFor="email">Email</label>
              <input
                className="input-text"
                type="email"
                placeholder="john@email.com"
                name="email"
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="email">Phone</label>
              <div style={{ width: "100%" }}>
                <input
                  className="input-text"
                  type="email"
                  placeholder="+0097123456789"
                  name="email"
                />
              </div>
            </div>
            <button className="sign-up">
              <Link
                style={{ textDecoration: "none", color: "#fff" }}
                to={"/appointment/prahran/verification"}
              >
                Continue
              </Link>
            </button>
          </div>
          <div>
            <img src={emailAndPhone} alt="" style={{ width: "100%" }} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Prahran;
