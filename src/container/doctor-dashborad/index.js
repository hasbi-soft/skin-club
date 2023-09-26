import logo from "../assets/Logo.svg";
import bell from "../assets/Bell.svg";
import search from "../assets/Search.svg";
import message from "./images/Message.svg";
import call from "./images/Call.svg";
import downArrow from "../assets/DownArrow.svg";
import Arrow from "./images/Arrow.svg";
import bars from "./images/octicon_filter.svg";
import "./style.css";
import { Link } from "react-router-dom";

function DoctorDashboard() {
  return (
    <div className="App">
      <header className="App-header">
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
          <Link to={"/doctor-dashboard"} className="side-bar-text active">
            Overview
          </Link>
          <Link to={"/doctor-detail"} className="side-bar-text">
            Profile
          </Link>
          <Link to={"/appointment"} className="side-bar-text">
            Appointments
          </Link>
          <span className="side-bar-text">History</span>
          <span className="side-bar-text">Messages</span>
          <span className="side-bar-text">Support</span>
          <span className="side-bar-text">Aftercare</span>
          <span className="side-bar-text">Invoices</span>
        </div>
        <div className="wrapperrs">
          <div className="top-bar">
            <div className="title">
              <span style={{ fontSize: "30px" }}>Welcome, Dr. Vihang</span>
            </div>
            <div className="search-faq-bar">
              <img src={bars} className="search-icon" alt="search" />
              <div className="search-bar">
                <span>Search</span>
                <img src={search} className="search-icon" alt="search" />
              </div>
            </div>
          </div>
          <div className="date-time-barr">
            <div className="date-bar">
              <span className="title-text" style={{ color: "#000" }}>
                Check the latest updates on your account
              </span>
            </div>
          </div>
          <div style={{ display: "flex", gap: "15px", marginTop: "30px" }}>
            <div style={{ width: "70%" }}>
              <div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "10px",
                  }}
                >
                  <div
                    style={{
                      background: "#E1D0C1",
                      padding: "15px",
                      borderRadius: "20px",
                      width: "50%",
                    }}
                  >
                    <p>Todays Appointments</p>
                    <p>
                      <span style={{ fontSize: "22px" }}>8</span>
                      <span style={{ color: "rgba(76, 77, 79, 0.50)" }}>
                        /10
                      </span>
                    </p>
                    <p style={{ color: "rgba(76, 77, 79, 0.50)" }}>
                      Next appointment at:{" "}
                      <span style={{ color: "#000" }}>9:00 am</span>
                    </p>
                    <p
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <span>Progress</span>
                      <span>75%</span>
                    </p>
                    <p
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <span
                        style={{ border: "1px solid black", width: "75%" }}
                      ></span>
                      <span
                        style={{
                          border: "1px solid rgba(76, 77, 79, 0.50)",
                          width: "25%",
                        }}
                      ></span>
                    </p>
                  </div>
                  <div
                    style={{
                      background: "#C2D5DC",
                      padding: "15px",
                      borderRadius: "20px",
                      width: "50%",
                    }}
                  >
                    <p>Canceled Appointments</p>
                    <p>
                      <span style={{ fontSize: "22px" }}>2</span>
                      <span style={{ color: "rgba(76, 77, 79, 0.50)" }}>
                        /12
                      </span>
                    </p>
                    <p style={{ color: "rgba(76, 77, 79, 0.50)" }}>
                      Empty Slots:{" "}
                    </p>
                    <p
                      style={{
                        display: "flex",
                        gap: "20px",
                        fontSize: "12px",
                        color: "#4C4D4F",
                      }}
                    >
                      <span
                        style={{
                          background: "rgba(244, 244, 242, 0.5)",
                          borderRadius: "10px",
                          padding: "0 20px",
                        }}
                      >
                        10:30 - 12:00
                      </span>
                      <span
                        style={{
                          background: "rgba(244, 244, 242, 0.5)",
                          borderRadius: "10px",
                          padding: "0 10px",
                        }}
                      >
                        03:30 - 05:00
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="surgical-historyy">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "10px 40px",
                  }}
                >
                  <span className="history-title">Consent Forms</span>
                  <div style={{ display: "flex", gap: "10px" }}>
                    <div
                      className="search-bar"
                      style={{
                        background: "#F8F8F8",
                        borderRadius: "10px",
                        width: "200px",
                      }}
                    >
                      <span style={{ color: "rgba(76, 77, 79, 0.5)" }}>
                        Search by patient name
                      </span>
                      <div
                        style={{
                          borderLeft: "1px solid black",
                          paddingLeft: "10px",
                        }}
                      >
                        <img
                          src={search}
                          className="search-icon"
                          alt="search"
                        />
                      </div>
                    </div>
                    <div
                      className="search-bar"
                      style={{
                        background: "#F8F8F8",
                        borderRadius: "10px",
                        width: "150px",
                      }}
                    >
                      <span>Select Date:</span>
                      <div
                        style={{
                          borderLeft: "1px solid black",
                          paddingLeft: "10px",
                        }}
                      >
                        20 Aug
                        <img
                          src={downArrow}
                          className="search-icon"
                          alt="search"
                          style={{ marginLeft: "5px" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      border: "1px solid rgba(76, 77, 79, 0.2)",
                      borderRadius: "20px",
                      margin: "10px",
                      fontSize: "12px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "20px",
                      }}
                    >
                      <span style={{ width: "20%" }}>Treatment</span>
                      <span style={{ width: "20%" }}>Time</span>
                      <span style={{ width: "20%" }}>Patient</span>
                      <span style={{ width: "20%" }}>Practitioner</span>
                      <span style={{ width: "20%" }}>Status</span>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "20px",
                        background: "#F8F8F8",
                        borderBottom: "1px solid rgba(76, 77, 79, 0.2)",
                      }}
                    >
                      <span style={{ width: "20%" }}>PRP Injections</span>
                      <span style={{ width: "20%" }}>09:00 - 10:30</span>
                      <span style={{ width: "20%" }}>Jane Doe</span>
                      <span style={{ width: "20%" }}>Dr. Vihang</span>
                      <span style={{ width: "20%" }}>
                        <div
                          style={{
                            width: "80px",
                            padding: "5px 0px",
                            background: "#F1B34A",
                            borderRadius: "15px",
                            textAlign: "center",
                            color: "white",
                            fontSize: "10px",
                          }}
                        >
                          In Progress
                        </div>
                      </span>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "20px ",
                        background: "#F8F8F8",
                        borderBottom: "1px solid rgba(76, 77, 79, 0.2)",
                      }}
                    >
                      <span style={{ width: "20%" }}>PRP Injections</span>
                      <span style={{ width: "20%" }}>09:00 - 10:30</span>
                      <span style={{ width: "20%" }}>Jane Doe</span>
                      <span style={{ width: "20%" }}>Dr. Vihang</span>
                      <span style={{ width: "20%" }}>
                        <div
                          style={{
                            width: "80px",
                            padding: "5px 0px",
                            background: "#36C490",
                            borderRadius: "15px",
                            textAlign: "center",
                            color: "white",
                            fontSize: "10px",
                          }}
                        >
                          Complete
                        </div>
                      </span>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "20px",
                        background: "#F8F8F8",
                        borderBottom: "1px solid rgba(76, 77, 79, 0.2)",
                      }}
                    >
                      <span style={{ width: "20%" }}>PRP Injections</span>
                      <span style={{ width: "20%" }}>09:00 - 10:30</span>
                      <span style={{ width: "20%" }}>Jane Doe</span>
                      <span style={{ width: "20%" }}>Dr. Vihang</span>
                      <span style={{ width: "20%" }}>
                        <div
                          style={{
                            width: "80px",
                            padding: "5px 0px",
                            background: "#FFF9F1",
                            borderRadius: "15px",
                            textAlign: "center",
                            color: "black",
                            fontSize: "10px",
                          }}
                        >
                          Cancel
                        </div>
                      </span>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "20px ",
                        background: "#F8F8F8",
                        borderBottom: "1px solid rgba(76, 77, 79, 0.2)",
                      }}
                    >
                      <span style={{ width: "20%" }}>PRP Injections</span>
                      <span style={{ width: "20%" }}>09:00 - 10:30</span>
                      <span style={{ width: "20%" }}>Jane Doe</span>
                      <span style={{ width: "20%" }}>Dr. Vihang</span>
                      <span style={{ width: "20%" }}>
                        <div
                          style={{
                            width: "80px",
                            padding: "5px 0px",
                            background: "#36C490",
                            borderRadius: "15px",
                            textAlign: "center",
                            color: "white",
                            fontSize: "10px",
                          }}
                        >
                          Complete
                        </div>
                      </span>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "20px ",
                        background: "#F8F8F8",
                        borderBottom: "1px solid rgba(76, 77, 79, 0.2)",
                      }}
                    >
                      <span style={{ width: "20%" }}>PRP Injections</span>
                      <span style={{ width: "20%" }}>09:00 - 10:30</span>
                      <span style={{ width: "20%" }}>Jane Doe</span>
                      <span style={{ width: "20%" }}>Dr. Vihang</span>
                      <span style={{ width: "20%" }}>
                        <div
                          style={{
                            width: "80px",
                            padding: "5px 0px",
                            background: "#36C490",
                            borderRadius: "15px",
                            textAlign: "center",
                            color: "white",
                            fontSize: "10px",
                          }}
                        >
                          Complete
                        </div>
                      </span>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "20px ",
                        background: "#F8F8F8",
                        borderBottom: "1px solid rgba(76, 77, 79, 0.2)",
                      }}
                    >
                      <span style={{ width: "20%" }}>PRP Injections</span>
                      <span style={{ width: "20%" }}>09:00 - 10:30</span>
                      <span style={{ width: "20%" }}>Jane Doe</span>
                      <span style={{ width: "20%" }}>Dr. Vihang</span>
                      <span style={{ width: "20%" }}>
                        <div
                          style={{
                            width: "80px",
                            padding: "5px 0px",
                            background: "#36C490",
                            borderRadius: "15px",
                            textAlign: "center",
                            color: "white",
                            fontSize: "10px",
                          }}
                        >
                          Complete
                        </div>
                      </span>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "20px ",
                        background: "#F8F8F8",
                        textAlign: "center",
                        borderRadius: "0 0 20px 20px",
                      }}
                    >
                      <span
                        style={{ width: "100%", textDecoration: "underline" }}
                      >
                        View More
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ width: "30%" }}>
              <div
                style={{
                  background: "white",
                  borderRadius: "20px",
                  padding: "20px",
                }}
              >
                <div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <div>
                      <p style={{ lineHeight: "0" }}>
                        <span>Current Appointment</span>
                      </p>
                    </div>
                    <div>
                      <span
                        style={{
                          background: "#F8F8F8",
                          borderRadius: "15px",
                          padding: "15px",
                        }}
                      >
                        <img src={Arrow} alt="" />
                      </span>
                    </div>
                  </div>
                  <h4>Jane Doe</h4>
                  <p>For PRP Injections</p>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable.
                  </p>
                  <div
                    style={{
                      borderBottom: "1px solid rgba(76, 77, 79, 0.2)",
                      padding: "20px 0",
                    }}
                  >
                    <span
                      style={{
                        background: "#F8F8F8",
                        borderRadius: "15px",
                        padding: "15px",
                        marginRight: "10px",
                      }}
                    >
                      <img src={message} alt="" />
                    </span>
                    <span
                      style={{
                        background: "#F8F8F8",
                        borderRadius: "15px",
                        padding: "15px",
                      }}
                    >
                      <img src={call} alt="" />
                    </span>
                  </div>
                </div>
                <div>
                  <p>Patient Detail</p>
                  <p
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <span>D.O.B</span>
                    <span style={{ color: "rgba(76, 77, 79, 0.5)" }}>
                      14 Aug, 1995
                    </span>
                  </p>
                  <p
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <span>Age</span>
                    <span style={{ color: "rgba(76, 77, 79, 0.5)" }}>29 Y</span>
                  </p>
                  <p
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <span>Height</span>
                    <span style={{ color: "rgba(76, 77, 79, 0.5)" }}>
                      185 cm
                    </span>
                  </p>
                  <p
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <span>Weight</span>
                    <span style={{ color: "rgba(76, 77, 79, 0.5)" }}>
                      75 kg
                    </span>
                  </p>
                  <p>Medical History</p>
                  <p style={{ color: "rgba(76, 77, 79, 0.5)" }}>
                    1. Patient suffers from dust allergy
                  </p>
                  <p style={{ color: "rgba(76, 77, 79, 0.5)" }}>
                    2. Patient had a major accident last year and lost his
                    hearing.
                  </p>
                  <p>Ongoing Treatments</p>
                  <p style={{ color: "rgba(76, 77, 79, 0.5)" }}>
                    1. PRP Injections
                  </p>
                  <p style={{ color: "rgba(76, 77, 79, 0.5)" }}>
                    2. Dermal Fillers
                  </p>
                  <p
                    style={{ textDecoration: "underline", textAlign: "center" }}
                  >
                    View Detail
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorDashboard;
