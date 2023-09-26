import logo from "../assetsss/Logo.svg";
import ArrowUp from "../assetsss/VectorUp.svg";
import ArrowDown from "../assetsss/VectorDown.svg";
import bell from "../assetsss/bell.svg";
import pdficon from "../assetsss/pdficon.svg";
import delicon from "../assetsss/delicon.svg";

import dragfilesvg from "../assetsss/dragfilesvg.svg";
// import right from "../assetsss/Right.svg";
// import downArrow from "../assetsss/DownArrow.svg";
// import goto from "../assetsss/goto.svg";
import "./style.css";
import { Link } from "react-router-dom";
function DragFile() {
  return (
    <div style={{ position: "fixed", width: "100%" }}>
      <div>
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
          <div className="side-bar34">
            <span className="side-bar-text">Overview</span>
            <br />
            <br />
            <span className="side-bar-text">Forms</span>
            <img src={ArrowUp} alt="updown" className="arrow" />
            <br />
            <br />
            <div>
              <span className="side-bar-text">Product</span>
              <img src={ArrowDown} alt="updown" className="arro" />
              <br />
              <br />
              <p className="product">SkinCare</p>

              <p className="product">SkinCare</p>
            </div>
            <br />
            <span className="side-bar-text">Session</span>
          </div>
          <div className="wrapper34">
            <div>
              <span className="mainheading">Admin Panel</span>
              <span>
                <button className="uploadform">Upload Form</button>
              </span>
            </div>

            <br />
            <span className="subheading">Aftercare Form</span>
            <br />
            <br />
            <div className="maindiv">
              <div>
                <div className="pdf">
                  <img src={delicon} alt="delicon" className="delicon" />
                </div>
                <div className="subdiv">
                  <img src={pdficon} alt="" />
                  <span className="Hair">Hair Treatment After care</span>
                </div>
              </div>
              <div>
                <div className="pdf">
                  <img src={delicon} alt="delicon" className="delicon" />
                </div>
                <div className="subdiv">
                  <img src={pdficon} alt="" />
                  <span className="Hair">Hair Treatment After care</span>
                </div>
              </div>
              <div>
                <div className="pdf">
                  <img src={delicon} alt="delicon" className="delicon" />
                </div>
                <div className="subdiv">
                  <img src={pdficon} alt="" />
                  <span className="Hair">Hair Treatment After care</span>
                </div>
              </div>
              <div>
                <div className="pdf">
                  <img src={delicon} alt="delicon" className="delicon" />
                </div>
                <div className="subdiv">
                  <img src={pdficon} alt="" />
                  <span className="Hair">Hair Treatment After care</span>
                </div>
              </div>
            </div>
            {/*  */}
            <br />
            <div className="maindiv">
              <div>
                <div className="pdf">
                  <img src={delicon} alt="delicon" className="delicon" />
                </div>
                <div className="subdiv">
                  <img src={pdficon} alt="" />
                  <span className="Hair">Hair Treatment After care</span>
                </div>
              </div>
              <div>
                <div className="pdf">
                  <img src={delicon} alt="delicon" className="delicon" />
                </div>
                <div className="subdiv">
                  <img src={pdficon} alt="" />
                  <span className="Hair">Hair Treatment After care</span>
                </div>
              </div>
              <div>
                <div className="pdf">
                  <img src={delicon} alt="delicon" className="delicon" />
                </div>
                <div className="subdiv">
                  <img src={pdficon} alt="" />
                  <span className="Hair">Hair Treatment After care</span>
                </div>
              </div>
              <div>
                <div className="pdf">
                  <img src={delicon} alt="delicon" className="delicon" />
                </div>
                <div className="subdiv">
                  <img src={pdficon} alt="" />
                  <span className="Hair">Hair Treatment After care</span>
                </div>
              </div>
            </div>
            <br />
            <div className="maindiv">
              <div>
                <div className="pdf">
                  <img src={delicon} alt="delicon" className="delicon" />
                </div>
                <div className="subdiv">
                  <img src={pdficon} alt="" />
                  <span className="Hair">Hair Treatment After care</span>
                </div>
              </div>
              <div>
                <div className="pdf">
                  <img src={delicon} alt="delicon" className="delicon" />
                </div>
                <div className="subdiv">
                  <img src={pdficon} alt="" />
                  <span className="Hair">Hair Treatment After care</span>
                </div>
              </div>
              <div>
                <div className="pdf">
                  <img src={delicon} alt="delicon" className="delicon" />
                </div>
                <div className="subdiv">
                  <img src={pdficon} alt="" />
                  <span className="Hair">Hair Treatment After care</span>
                </div>
              </div>
              <div>
                <div className="pdf">
                  <img src={delicon} alt="delicon" className="delicon" />
                </div>
                <div className="subdiv">
                  <img src={pdficon} alt="" />
                  <span className="Hair">Hair Treatment After care</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          background: "rgba(76, 77, 79, 0.4)",
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      >
        <div className="drag">
          {/* <header className="App-header-drag">
          <img src={logo} className="App-logo" alt="logo" />
        </header> */}
          <div className="wrapperdrag">
            <div>
              <span className="mainheading-drag">Upload Form</span>
              <br />
              <br />
              <span className="slectfile">Select a file from your device</span>

              <div className="dragfile-space">
                <img src={dragfilesvg} alt="" className="dragfilesvg" /> <br />
                Upload/ Drag amd Drop file here
              </div>
              <span>
                <button className="uploadformdrag">
                  <Link
                    style={{ textDecoration: "none", color: "white" }}
                    to={"/admin"}
                  >
                    Upload
                  </Link>
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default DragFile;
