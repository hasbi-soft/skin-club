import React from "react";
import "./styles.css";

export default function SideBar() {
  return (
    <div className="sb-content">
      <ul className="main-menu">
        <li>Overview</li>
        <li>Profile</li>
        <li>Appointments</li>
        <li>History</li>
        <div className="sub-menu">
          <ul>
            <li>Videos</li>
            <li>Videos Library</li>
          </ul>
        </div>
        <li>Messages</li>
        <li>Support</li>
        <div className="sub-menu">
          <ul>
            <li>FAQ’s</li>
            <li>Procedure Information</li>
          </ul>
        </div>

        <li>Aftercare</li>
        <div className="sub-menu">
          <ul>
            <li>Quizzes</li>
            <li>Health & Skin Assesment</li>
          </ul>
        </div>
        <li>Finances</li>
        <li>Virtual Consultation</li>
      </ul>
    </div>
  );
}
