import logo from "../assets/Logo.svg";
import bell from "../assets/Bell.svg";
import bar from "./images/Bar.svg";
import DownArrow from "./images/DownArrow.svg";
import "./style.css";
import { Link } from "react-router-dom";
import googleMap from "./images/GoogleMap.png";

function Appointment() {
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
            className="bell-icon"
            alt="notification"
          />
        </div>
      </header>
      <div className="body">
        <div className="side-bar">
          <span className="side-bar-text">Overview</span>
          <span className="side-bar-text">Profile</span>
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
          <div style={{ padding: "30px", width:"40%" }}>
            <div className="title">
              <span style={{ fontSize: "30px" }}>Appointments </span>
            </div>
            <div style={{ color: "rgba(76, 77, 79, 0.85)", marginTop: "20px" }}>
              Choose a studio
            </div>
            <Link className="appointment-place" to={"/appointment/toorak"}>
              <span>Toorak</span>
              <span>
                <img src={DownArrow} alt="" />
              </span>
            </Link>
            <Link className="appointment-place" to={"/appointment/prahran"}>
              <span>Prahran</span>
              <span>
                <img src={DownArrow} alt="" />
              </span>
            </Link>
            <Link className="appointment-place" to={"/appointment/brighton"}>
              <span>Brighton</span>
              <span>
                <img src={DownArrow} alt="" />
              </span>
            </Link>
          </div>
          <div>
            <img src={googleMap} alt="" style={{ width: "100%" }} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Appointment;
