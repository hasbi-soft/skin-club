import React from "react";
import "./styles.css";
import Logo from "./Images/logo.png";
import Bell from "./Images/bell.svg";
import Yt from "./Images/yt.png";
import playbtn from "./Images/playbutton.svg";
import Down from "./Images/Down.svg";
import List from "./Images/List.svg";
import Grid from "./Images/Grid.svg";
import { Link } from "react-router-dom";

const VideoLibraryYouTube = () => {
  return (
    <div className="video-libraryyoutube">
      <div className="history-videos-container">
        <span>{`History `}</span>
        <span className="videos-library">/ Videos Library</span>
      </div>
      <div className="video-libraryyoutube-item" />
      <img className="skinclublogo-logotype-white-1-icon" alt="" src={Logo} />
      <div className="sunday-20-august">Sunday, 20 August</div>
      <div className="pm">1:50 PM</div>
      <div className="video-libraryyoutube-inner" />
      <img className="vector-icon" alt="" src={Bell} />
      <div className="rectangle-div" />
      <div className="overview">
        <Link
          style={{ textDecoration: "none", color: "#4c4d4f" }}
          to={"/patient-dashboard"}
        >
          Overview
        </Link>
      </div>
      <div className="profile">Profile</div>
      <div className="appointments">Appointments</div>
      <div className="messages">Messages</div>
      <div className="support">Support</div>
      <div className="aftercare">Aftercare</div>
      <div className="finances">Finances</div>
      <div className="virtual-consultation">
        <Link
          style={{ textDecoration: "none", color: "#4c4d4f" }}
          to={"/virtual-consultation"}
        >
          Virtual Consultation
        </Link>
      </div>
      <div className="history12">History</div>
      <div className="videos">Videos</div>
      <div className="faqs">FAQ’s</div>
      <div className="quizzes">Quizzes</div>
      <div className="videos-library1">Videos Library</div>
      <div className="procedure-information">Procedure Information</div>
      <div className="health-skin">{`Health & Skin Assesment`}</div>
      <img className="vector-icon1" alt="" src="/vector1.svg" />
      <img className="vector-icon2" alt="" src="/vector2.svg" />
      <img className="vector-icon3" alt="" src="/vector3.svg" />
      <div className="choose-a-library">Choose a Library</div>
      <div className="video-libraryyoutube-child1" />
      <Link style={{ textDecoration: "none", color: "rgba(76, 77, 79, 0.7)" }}>
        <div className="tiktok-clips">TikTok Clips</div>
      </Link>
      <div className="you-tube-videos">You Tube Videos</div>
      <div className="line-div" />
      <div className="video-libraryyoutube-child2" />
      <div className="video-libraryyoutube-child3" />
      <div className="video-libraryyoutube-child3" />
      <div className="rectangle-parent">
        <div className="group-child" />
        <div className="category1">category1</div>
      </div>
      <div className="rectangle-group">
        <div className="group-child" />
        <div className="category2">category2</div>
      </div>
      <div className="rectangle-container">
        <div className="group-child" />
        <div className="category2">category3</div>
      </div>
      <div className="group-div">
        <div className="group-child" />
        <div className="category4">category4</div>
      </div>
      <div className="rectangle-parent1">
        <div className="group-child2" />
        <img className="frame-icon" alt="" src={Grid} />
        <div className="grid">Grid</div>
      </div>
      <div className="rectangle-parent2">
        <div className="group-child3" />
        <img className="frame-icon1" alt="" src={List} />
        <div className="list">List</div>
      </div>
      <div className="rectangle-parent3">
        <div className="group-child4" />
        <img className="rectangle-icon" alt="" src={Yt} />
        <img className="frame-icon2" alt="" src={playbtn} />
        <div className="tittle-of-the">Tittle Of the video</div>
        <div className="aug-25-2023">Aug 25 2023, 01:12 AM - 1Highlight</div>
        <div className="group-child5" />
        <div className="m">3m</div>
      </div>
      <div className="rectangle-parent4">
        <div className="group-child4" />
        <img className="rectangle-icon" alt="" src={Yt} />
        <img className="frame-icon2" alt="" src={playbtn} />
        <div className="tittle-of-the">Tittle Of the video</div>
        <div className="aug-25-2023">Aug 25 2023, 01:12 AM - 1Highlight</div>
        <div className="group-child5" />
        <div className="m">3m</div>
      </div>
      <div className="rectangle-parent5">
        <div className="group-child4" />
        <img className="rectangle-icon" alt="" src={Yt} />
        <img className="frame-icon2" alt="" src={playbtn} />
        <div className="tittle-of-the">Tittle Of the video</div>
        <div className="aug-25-2023">Aug 25 2023, 01:12 AM - 1Highlight</div>
        <div className="group-child5" />
        <div className="m">3m</div>
      </div>
      <div className="rectangle-parent6">
        <div className="group-child4" />
        <img className="rectangle-icon" alt="" src={Yt} />
        <img className="frame-icon2" alt="" src={playbtn} />
        <div className="tittle-of-the">Tittle Of the video</div>
        <div className="aug-25-2023">Aug 25 2023, 01:12 AM - 1Highlight</div>
        <div className="group-child5" />
        <div className="m">3m</div>
      </div>
      <div className="rectangle-parent7">
        <div className="group-child15" />
        <div className="videos1">Videos</div>
        <img className="vector-icon4" alt="" src={Down} />
        <div className="type">Type</div>
        <img className="line-icon" alt="" src="/line-18.svg" />
      </div>
    </div>
  );
};

export default VideoLibraryYouTube;
