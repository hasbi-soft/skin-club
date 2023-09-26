import logo from "../assetsss/Logo.svg";
import ArrowUp from "../assetsss/VectorUp.svg";
import ArrowDown from "../assetsss/VectorDown.svg";
import bell from "../assetsss/bell.svg";
import pdficon from "../assetsss/pdficon.svg";
import delicon from "../assetsss/delicon.svg";
// import note2 from "../assetsss/Note2.png";
// import right from "../assetsss/Right.svg";
// import downArrow from "../assetsss/DownArrow.svg";
// import goto from "../assetsss/goto.svg";
import "./style.css";
import { Link } from "react-router-dom";
function AdminPanel() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to={'/'}><img src={logo} className="App-logo" alt="logo" /></Link>
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
              <button className="uploadform">
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to={"/drag-file"}
                >
                  Upload Form
                </Link>
              </button>
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
  );
}
export default AdminPanel;
