import React from "react";
import Header from "../header/index";
import Sidebar from "../sidebar/index";
import Doctor from "../../Assets/Images/doctor.png";
import Student from "../../Assets/Images/student.png";
import Video from "../../Assets/Images/Video.svg";
import Mic from "../../Assets/Images/Mic.svg";
import Call from "../../Assets/Images/Call.svg";
import Record from "../../Assets/Images/record.svg";
import Screen from "../../Assets/Images/screen_share.svg";
import Subtitles from "../../Assets/Images/subtitles.svg";
import Appointment from "../../Assets/Images/appointment.svg";
import Options from "../../Assets/Images/more.svg";
import Photo from "../../Assets/Images/photo.png";
import Smile from "../../Assets/Images/Smile.svg";
import Attach from "../../Assets/Images/Attach.svg";
import Mic2 from "../../Assets/Images/mic2.svg";
import Send from "../../Assets/Images/send.svg";
import "./doctor.modules.css";

const VirtualConsultation = () => {
  return (
    <>
      <Header />
      <div className="wrappper">
        <Sidebar />
        <div className="main-container">
          <div className="text-wrapper">
            <h1 className="main-text">
              Virtual Consultation / <span>Live Consultation</span>
            </h1>
            <p className="consultation-text">Live Consultation</p>
            <div className="video-wrapper">
              <img src={Doctor} alt="doctor" className="img" />
              <div className="time2">
                <p className="remaining-text ">Time Remaining</p>
                <p className="remaining-time">11:40</p>
              </div>
              <img src={Student} alt="student" className="student" />
              <div className="wrapper-vid">
                <img src={Video} alt="video" />
              </div>
              <div className="wrapper-mic">
                <img src={Mic} alt="Mic" />
              </div>
              <div className="wrapper-leave">
                <img src={Call} alt="Leave Call" />
                <span>Leave</span>
              </div>
            </div>
            <div className="controls-wrapper">
              <div className="record-wrapper">
                <div className="record">
                  <img src={Record} alt="record" />
                </div>
                <p className="record-text">Record</p>
              </div>
              <div className="record-wrapper">
                <div className="record">
                  <img src={Screen} alt="screen" />
                </div>
                <p className="record-text">Screen Share</p>
              </div>
              <div className="record-wrapper">
                <div className="record">
                  <img src={Subtitles} alt="subtitles" />
                </div>
                <p className="record-text">Subtitles</p>
              </div>
              <div className="record-wrapper">
                <div className="record">
                  <img src={Appointment} alt="appointment" />
                </div>
                <p className="record-text">Appointment</p>
              </div>
              <div className="record-wrapper">
                <div className="record">
                  <img src={Options} alt="options" />
                </div>
                <p className="record-text">Options</p>
              </div>
            </div>
          </div>
          <div className="message">
            <div className="profile-wrapper">
              <img src={Photo} alt="photos" />
              <div className="text-wrapper">
                <p className="name">Jane Doe</p>
                <p className="title">
                  <span>For</span> PRP Injections
                </p>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div
                style={{
                  width: "85%",
                  border: "1px solid rgba(76, 77, 79, 0.20)",
                  margin: "20px 0",
                }}
              ></div>
            </div>
            <div className="msg">
              <p>
                Hi I was hoping if you could help me with appointment booking,
                i’m having some trouble filling in some info. thank you.
              </p>
            </div>
            <div className="orWrapper">
              <hr
                className="line-wrapper"
                style={{
                  border: "1px solid rgba(76, 77, 79, 0.2)",
                  width: "35%",
                }}
              />
              <span
                style={{ padding: "0 0.5rem", color: "rgba(76, 77, 79, 1)" }}
              >
                10:17 AM
              </span>
              <hr
                className="line-wrapper"
                style={{
                  border: "1px solid rgba(76, 77, 79, 0.2)",
                  width: "35%",
                }}
              />
            </div>
            <div className="client-msg">
              <p>Sure! help is on the way :)</p>
            </div>
            <div className="msg" style={{ marginTop: "30px" }}>
              <p>
                Hi I was hoping if you could help me with appointment booking,
                i’m having some trouble filling in some info. thank you.
              </p>
            </div>
            <div className="client-msg">
              <p>Sure! help is on the way :)</p>
            </div>
            <div className="input-wrapper2">
              <img src={Smile} alt="smile" />
              <img src={Attach} alt="attach" />
              <img src={Mic2} alt="mic" />
              <input type="text" placeholder="Write message..." />
              <img src={Send} alt="send" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VirtualConsultation;
