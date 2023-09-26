import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <div className="sb-content">
      <ul className="main-menu">
        <li className="active">
          <Link
            style={{ textDecoration: "none", color: "#4c4d4f" }}
            to={"/patient-dashboard"}
          >
            Overview
          </Link>
        </li>
        <li>
          <Link style={{ textDecoration: "none", color: "#4c4d4f" }}>
            Profile
          </Link>
        </li>
        <li>
          <Link style={{ textDecoration: "none", color: "#4c4d4f" }}>
            Appointments
          </Link>
        </li>
        <li>History</li>
        <div className="sub-menu">
          <ul>
            <li>Videos</li>
            <li>
              <Link
                to={"/video-library"}
                style={{ textDecoration: "none", color: "#4c4d4f" }}
              >
                Videos Library
              </Link>
            </li>
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
        <li>
          <Link
            style={{ textDecoration: "none", color: "#4c4d4f" }}
            to={"/virtual-consultation"}
          >
            Virtual Consultation
          </Link>
        </li>
      </ul>
    </div>
  );
}
