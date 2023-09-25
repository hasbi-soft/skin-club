import logo from "../assets/Logo.svg";
import bell from "../assets/Bell.svg";
import search from "../assets/Search.svg";
import message from "../assets/Message.svg";
import edit from "../assets/Edit.svg";
import call from "../assets/Call.svg";
import note1 from "../assets/Note1.png";
import note2 from "../assets/Note2.png";
import right from "../assets/Right.svg";
import downArrow from "../assets/DownArrow.svg";
import goto from "../assets/goto.svg";
import edit2 from "../assets/Edit2.svg";
import "./style.css";

function DoctorDetail() {
  return (
    <div className="App">
      <header className="App-header">
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
          <span className="side-bar-text active">Overview</span>
          <span className="side-bar-text">Profile</span>
          <span className="side-bar-text">Appointments</span>
          <span className="side-bar-text">History</span>
          <span className="side-bar-text">Messages</span>
          <span className="side-bar-text">Support</span>
          <span className="side-bar-text">Aftercare</span>
          <span className="side-bar-text">Invoices</span>
        </div>
        <div className="wrapper">
          <div className="top-bar">
            <div className="title">
              <span style={{ fontSize: "30px" }}>PRP Injections</span>/ Dr.
              Vihang Sharma
            </div>
            <div className="search-faq-bar">
              <div className="search-bar">
                <span>Search</span>
                <img src={search} className="search-icon" alt="search" />
              </div>
              <div className="faq">Support & FAQ’s</div>
              <div className="appointment-btn">Cancel Appointment</div>
            </div>
          </div>
          <div className="date-time-bar">
            <div className="date-bar">
              <span className="title-text">Date:</span>
              <span>25 Aug, 2023</span>
            </div>
            <div className="time-bar">
              <span className="title-text">Time:</span>
              <span>12:00 PM - 02:00 PM</span>
            </div>
            <div className="studio">
              <span className="title-text">Studio:</span>
              <span>Toorak</span>
            </div>
          </div>
          <div style={{ display: "flex", gap: "10px" }}>
            <div className="doctor-profile">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <p
                    style={{
                      fontSize: "25px",
                      lineHeight: "10px",
                      color: "rgba(76, 77, 79, 1)",
                    }}
                  >
                    John Deo
                  </p>
                  <p
                    style={{
                      fontSize: "14px",
                      lineHeight: "10px",
                      color: "rgba(76, 77, 79, 1)",
                    }}
                  >
                    <span style={{ color: "rgba(76, 77, 79, 0.5)" }}>For</span>{" "}
                    PRP Injections
                  </p>
                </div>
                <div style={{ marginTop: "25px", display: "flex" }}>
                  <div>
                    <span
                      style={{
                        padding: "20px",
                        backgroundColor: "#F8F8F8",
                        borderRadius: "12px",
                        marginRight: "20px",
                      }}
                    >
                      <img src={message} alt="message" />
                    </span>
                    <p style={{ fontSize: "8px", marginTop: "25px" }}>
                      instant Message
                    </p>
                  </div>
                  <div>
                    <span
                      style={{
                        padding: "20px",
                        backgroundColor: "#F8F8F8",
                        borderRadius: "12px",
                      }}
                    >
                      <img src={call} alt="call" />
                    </span>
                    <p style={{ fontSize: "8px", marginTop: "25px" }}>
                      Call via mobile
                    </p>
                  </div>
                </div>
              </div>
              <div className="appiontments">
                <div style={{ color: "rgba(76, 77, 79, 0.5)" }}>
                  Appointments
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <span
                    className="appiontments-text"
                    style={{
                      borderRight: "2px solid rgba(76, 77, 79, 0.2)",
                      paddingRight: "65px",
                    }}
                  >
                    <p>4</p>
                    <p>Past</p>
                  </span>
                  <span className="appiontments-text">
                    <p>10</p>
                    <p>Upcoming</p>
                  </span>
                </div>
              </div>
              <div className="patient-details">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "30px",
                  }}
                >
                  <p style={{ lineHeight: "25px" }}>Patient Details</p>
                  <span
                    style={{
                      padding: "15px",
                      backgroundColor: "#F8F8F8",
                      borderRadius: "12px",
                    }}
                  >
                    <img src={edit} alt="message" />
                  </span>
                </div>
              </div>
              <table className="patient-detail">
                <tr style={{ height: "30px" }}>
                  <td>D.O.B</td>
                  <td style={{ color: "rgba(76, 77, 79, 0.5)" }}>
                    14 Aug, 1995
                  </td>
                  <td>Allergies</td>
                </tr>
                <tr style={{ height: "30px" }}>
                  <td>Age</td>
                  <td style={{ color: "rgba(76, 77, 79, 0.5)" }}>29 Y</td>
                  <td style={{ color: "rgba(76, 77, 79, 0.5)" }}>Peanuts</td>
                </tr>
                <tr style={{ height: "30px" }}>
                  <td>Height</td>
                  <td style={{ color: "rgba(76, 77, 79, 0.5)" }}>185 cm</td>
                  <td style={{ color: "rgba(76, 77, 79, 0.5)" }}>Pollen</td>
                </tr>
                <tr style={{ height: "30px" }}>
                  <td>Weight</td>
                  <td style={{ color: "rgba(76, 77, 79, 0.5)" }}>75 kg</td>
                  <td style={{ color: "rgba(76, 77, 79, 0.5)" }}>
                    Household Chemicals
                  </td>
                </tr>
              </table>
            </div>
            <div className="doctor-notes">
              <h3 style={{ color: "#4C4D4F" }}>Notes</h3>
              <div style={{ display: "flex", gap: "10px" }}>
                <div className="notes">
                  <div>
                    <p style={{ color: "rgba(76, 77, 79, 0.5)" }}>
                      It is a long established fact that a reader will be
                      distracted by the readable content. It is a long
                      established fact that a reader.
                    </p>
                    <div style={{ display: "flex", gap: "10px" }}>
                      <img src={note1} className="note-pic" alt="detail" />
                      <img src={note2} className="note-pic" alt="detail" />
                    </div>
                  </div>
                  <div className="send-message">
                    <input type="text" placeholder="Write note..." />
                    <div
                      style={{
                        backgroundColor: "#F1B34A",
                        height: "30px",
                        width: "30px",
                        borderRadius: "10px",
                      }}
                    >
                      <img src={right} alt="send" style={{ padding: "8px" }} />
                    </div>
                  </div>
                </div>
                <div style={{ width: "50%" }}>
                  <div className="treatment-performed">
                    <div>
                      <p
                        className="treatment-title"
                        style={{
                          borderBottom: "1px solid rgba(188, 188, 188, 0.25)",
                          fontWeight: "700",
                        }}
                      >
                        <span>Treatment Performed</span>
                        <span
                          style={{
                            color: "rgba(188, 188, 188, 0.25)",
                          }}
                        >
                          14 Aug, 2023
                        </span>
                      </p>
                      <table>
                        <th>
                          <td>Dr. Vihang Sharma</td>
                        </th>
                        <tr style={{ height: "30px", fontSize: "12px" }}>
                          <td style={{ color: "rgba(76, 77, 79, 0.65)" }}>
                            Anesthesia:
                          </td>
                          <td>Isoflurane</td>
                        </tr>
                        <tr style={{ height: "30px", fontSize: "12px" }}>
                          <td style={{ color: "rgba(76, 77, 79, 0.65)" }}>
                            MLS Units:
                          </td>
                          <td>100</td>
                        </tr>
                        <tr style={{ height: "30px", fontSize: "12px" }}>
                          <td style={{ color: "rgba(76, 77, 79, 0.65)" }}>
                            Dosing:
                          </td>
                          <td>2.5 ml</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                  <div className="treatment-performed">
                    <div>
                      <p
                        className="treatment-title"
                        style={{
                          borderBottom: "1px solid rgba(188, 188, 188, 0.25)",
                          fontWeight: "700",
                        }}
                      >
                        <span>Other Notes:</span>
                      </p>
                      <p style={{ color: "#4C4D4F", fontSize: "12px" }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed commodo eget velit non luctus. Duis at enim eu elit
                        facilisis fermentum.
                      </p>
                    </div>
                  </div>
                  <div style={{ marginTop: "30px", textAlign: "end" }}>
                    <span
                      style={{
                        padding: "15px",
                        border: "1px solid black",
                        marginRight: "15px",
                        borderRadius: "15px",
                      }}
                    >
                      Overview
                    </span>
                    <span
                      style={{
                        padding: "15px",
                        border: "1px solid black",
                        backgroundColor: "black",
                        color: "white",
                        borderRadius: "15px",
                      }}
                    >
                      Add notes
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="treatment-history">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div style={{ marginTop: "10px" }}>Treatment History</div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  backgroundColor: "#F8F8F8",
                  borderRadius: "10px",
                  padding: "0 15px 0 15px",
                  gap: "20px",
                }}
              >
                <p
                  style={{
                    lineHeight: "8px",
                  }}
                >
                  Filter By :
                </p>
                <span style={{ marginTop: "8px" }}>|</span>
                <p
                  style={{
                    lineHeight: "0px",
                  }}
                >
                  Upcoming <img src={downArrow} alt="" />
                </p>
              </div>
            </div>
            <table className="treatment-table">
              <tr>
                <th>Treatment</th>
                <th>Procedure Notes</th>
                <th>Date</th>
                <th>Time</th>
                <th>Doctor</th>
                <th>Studio</th>
                <th>Payment</th>
                <th>Detail</th>
              </tr>
              <tr>
                <td>PRP Injections</td>
                <td>View Notes</td>
                <td>28/08/23</td>
                <td>09:00am</td>
                <td>Vihang Sharma</td>
                <td>Toorak</td>
                <td>
                  <span className="pending-text">Pending</span>
                </td>
                <td>
                  <img src={goto} alt="" />
                </td>
              </tr>
              <tr>
                <td>PRP Injections</td>
                <td>View Notes</td>
                <td>28/08/23</td>
                <td>09:00am</td>
                <td>Vihang Sharma</td>
                <td>Toorak</td>
                <td>
                  <span className="pending-text">Pending</span>
                </td>
                <td>
                  <img src={goto} alt="" />
                </td>
              </tr>
              <tr>
                <td>PRP Injections</td>
                <td>View Notes</td>
                <td>28/08/23</td>
                <td>09:00am</td>
                <td>Vihang Sharma</td>
                <td>Toorak</td>
                <td>
                  <span className="pending-text">Pending</span>
                </td>
                <td>
                  <img src={goto} alt="" />
                </td>
              </tr>
              <tr>
                <td colSpan={8} style={{ textDecoration: "underline" }}>
                  Veiw More
                </td>
              </tr>
            </table>
          </div>
          <div style={{ display: "flex", gap: "15px", marginTop: "30px" }}>
            <div style={{ width: "70%" }}>
              <div className="surgical-history">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "20px",
                    borderBottom: "1px solid rgba(76, 77, 79, 0.2)",
                  }}
                >
                  <span className="history-title">Surgical History</span>
                  <span className="history-icon-bg">
                    <img src={edit2} alt="" />
                  </span>
                </div>
                <div style={{height:"200px", overflow:"scroll"}}>
                  <div className="liposuction">
                    <p>1. Liposuction</p>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <span>
                        Date:
                        <span style={{ color: "rgba(76, 77, 79, 0.5)" }}>
                          {" "}
                          14 Aug, 2023
                        </span>
                      </span>
                      <span>
                        Reason:
                        <span style={{ color: "rgba(76, 77, 79, 0.5)" }}>
                          {" "}
                          Cosmetic Enhancement
                        </span>
                      </span>
                      <span>
                        Location:
                        <span style={{ color: "rgba(76, 77, 79, 0.5)" }}>
                          {" "}
                          Indicate the medical facility
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="liposuction">
                    <p>1. Liposuction</p>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <span>
                        Date:
                        <span style={{ color: "rgba(76, 77, 79, 0.5)" }}>
                          {" "}
                          14 Aug, 2023
                        </span>
                      </span>
                      <span>
                        Reason:
                        <span style={{ color: "rgba(76, 77, 79, 0.5)" }}>
                          {" "}
                          Cosmetic Enhancement
                        </span>
                      </span>
                      <span>
                        Location:
                        <span style={{ color: "rgba(76, 77, 79, 0.5)" }}>
                          {" "}
                          Indicate the medical facility
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="liposuction">
                    <p>1. Liposuction</p>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <span>
                        Date:
                        <span style={{ color: "rgba(76, 77, 79, 0.5)" }}>
                          {" "}
                          14 Aug, 2023
                        </span>
                      </span>
                      <span>
                        Reason:
                        <span style={{ color: "rgba(76, 77, 79, 0.5)" }}>
                          {" "}
                          Cosmetic Enhancement
                        </span>
                      </span>
                      <span>
                        Location:
                        <span style={{ color: "rgba(76, 77, 79, 0.5)" }}>
                          {" "}
                          Indicate the medical facility
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="liposuction">
                    <p>1. Liposuction</p>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <span>
                        Date:
                        <span style={{ color: "rgba(76, 77, 79, 0.5)" }}>
                          {" "}
                          14 Aug, 2023
                        </span>
                      </span>
                      <span>
                        Reason:
                        <span style={{ color: "rgba(76, 77, 79, 0.5)" }}>
                          {" "}
                          Cosmetic Enhancement
                        </span>
                      </span>
                      <span>
                        Location:
                        <span style={{ color: "rgba(76, 77, 79, 0.5)" }}>
                          {" "}
                          Indicate the medical facility
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="liposuction">
                    <p>1. Liposuction</p>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <span>
                        Date:
                        <span style={{ color: "rgba(76, 77, 79, 0.5)" }}>
                          {" "}
                          14 Aug, 2023
                        </span>
                      </span>
                      <span>
                        Reason:
                        <span style={{ color: "rgba(76, 77, 79, 0.5)" }}>
                          {" "}
                          Cosmetic Enhancement
                        </span>
                      </span>
                      <span>
                        Location:
                        <span style={{ color: "rgba(76, 77, 79, 0.5)" }}>
                          {" "}
                          Indicate the medical facility
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ width: "30%" }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorDetail;
