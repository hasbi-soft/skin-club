import logo from "../../assets/Logo.svg";
import bell from "../../assets/Bell.svg";
import bar from "../images/Bar.svg";
import "./style.css";
import { Link } from "react-router-dom";
import DownArrow from "../images/DownArrow.svg";
import HowWeCanHelp from "../images/howCanWeHelp.png";

function PrahranHelp() {
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
          <Link to={"/"} className="side-bar-text">
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
          <div style={{ padding: "30px", width: "40%" }}>
            <div className="title">
              <span style={{ fontSize: "30px" }}>Appointments </span>
              <span style={{ color: "rgba(0, 0, 0, 0.5)" }}> / Prahran</span>
            </div>
            <div style={{ color: "rgba(76, 77, 79, 0.85)", marginTop: "20px" }}>
              How can we help?
            </div>
            <Link className="appointment-place">
              <span>New Patient Consultation</span>
              <span>
                <img src={DownArrow} alt="" />
              </span>
            </Link>
            <Link className="appointment-place">
              <span>Treatment(10 minutes)</span>
              <span>
                <img src={DownArrow} alt="" />
              </span>
            </Link>
          </div>
          <div>
            <img src={HowWeCanHelp} alt="" style={{ width: "100%" }} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default PrahranHelp;
