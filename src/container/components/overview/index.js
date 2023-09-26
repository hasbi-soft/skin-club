import React from "react";
import "./overview.modules.css";
import { SlideDots, Plus, Close, Link, Arrow, Edit } from "./images/index";
import Treatment from "./images/treatment.png";
import TableImg from "./images/table-img.png";
export default function Overview() {
  return (
    <div className="containerWrapper">
      <div className="welcome">
        <div className="wel-txt">
          <h1>Welcome, Jane</h1>
          <p>Check the latest updates on your account</p>
        </div>
        <div className="wel-btns">
          <button className="support">Support & FAQ’s</button>
          <button className="book">Book an appointment</button>
        </div>
      </div>
      <div className="boxes">
        <div className="box-1">
          <div className="top">
            <p className="sub-heading">Ongoing Treatment</p>
            <h2 className="heading">PRP Injections</h2>
            <p className="date">
              <span>Start Date: </span>31 July, 2023
            </p>
          </div>
          <div className="bottom">
            <div className="progress-title">
              <p className="title">Progress</p>
              <p className="percentage">45%</p>
            </div>
            <div className="bar">
              <div className="progress"></div>
            </div>
          </div>
        </div>
        <div className="box-2">
          <div className="top">
            <div className="edit"><Edit/></div>
            <p className="sub-heading">Upcoming Appointment</p>
            <h2 className="heading">25 Aug, 2023</h2>
            <p className="time">
              <span>At </span>12:00 PM
            </p>
          </div>
          <div className="bottom">
            <p>
              <span>Provider: </span>Dr. Vihang Sharma
            </p>
            <p>
              <span>Studio: </span>Toorak
            </p>
          </div>
        </div>
        <div className="box-3">
          <div className="arrow"><Arrow/></div>
          <div className="top">
            <p className="sub-heading">Recent Payment</p>
            <h2 className="heading">$350.00</h2>
            <p>
              <span>Paid via: </span>Master Card (***456)
            </p>
          </div>
          <div className="bottom">
            <p className="date">
              <span>Date: </span>15 August, 2023
            </p>
            <p>
              <span>For PRP Injections scheduled session </span>View Detail
            </p>
          </div>
        </div>
      </div>
      <div className="slides">
        <div className="slide-content">
          <p>Recommendations & Accessories</p>
          <h2>Discover Personalized Care Treatment & Products Just For You</h2>
          <button>Discover More</button>
        </div>
        <div className="pagination">
          <SlideDots />
        </div>
      </div>
      <div className="treatment">
        <div className="medical">
          <h2>Medical Records</h2>
          <div className="border"></div>
          <div className="toggle">
            <div className="title">
              <p>Allergies</p>
              <div className="plus">
                <Plus />
              </div>
            </div>
            <div className="toggle-content">
              <div className="item">
                <p>Eggs</p>
                <div className="close">
                  <Close />
                </div>
              </div>
              <div className="item">
                <p>Peanuts</p>
                <div className="close">
                  <Close />
                </div>
              </div>
              <div className="item">
                <p>Pollen</p>
                <div className="close">
                  <Close />
                </div>
              </div>
              <div className="item">
                <p>Household Chemicals</p>
                <div className="close">
                  <Close />
                </div>
              </div>
            </div>
          </div>

          <div className="toggle">
            <div className="title">
              <p>Previous Surgeries</p>
              <div className="plus">
                <Plus />
              </div>
            </div>
            <div className="toggle-content">
              <div className="item">
                <p>C - Section</p>
                <div className="close">
                  <Close />
                </div>
              </div>
              <div className="item">
                <p>Appendix Removal</p>
                <div className="close">
                  <Close />
                </div>
              </div>
              <div className="item">
                <p>Pollen</p>
                <div className="close">
                  <Close />
                </div>
              </div>
            </div>
          </div>

          <div className="toggle">
            <div className="title">
              <p>Chronic Conditions</p>
              <div className="plus">
                <Plus />
              </div>
            </div>
            <div className="toggle-content">
              <div className="item">
                <p>IHD</p>
                <div className="close">
                  <Close />
                </div>
              </div>
              <div className="item">
                <p>Chronic thyroid disorder</p>
                <div className="close">
                  <Close />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="details">
          <h2>Treatment Details</h2>
          <div className="inner-details">
            <img src={Treatment} alt="treatment" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              commodo eget velit non luctus. Duis at enim eu elit facilisis
              fermentum.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed commodo eget velit non luctus. Duis at enim eu elit facilisis
              fermentum.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed commodo eget velit non luctus. Duis at enim eu elit facilisis
              fermentum.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed commodo eget velit non luctus. Duis at enim eu elit facilisis
              fermentum.
            </p>
            <h3>Dr. Irfan Ahmad</h3>
            <div className="button">
              <button className="view-btn">View Details</button>
            </div>
          </div>
        </div>
      </div>

      <div className="history">
        <div className="head">
          <h3>Treatment History</h3>
          <div className="filter">
            <label htmlFor="filter">Filter By : | </label>
            <select name="filter" id="filter">
              <option value="Upcoming">Upcoming</option>
              <option value="Upcoming">Treated</option>
            </select>
          </div>
        </div>
        <div className="table">
          <ul className="table-header">
            <li>Treatment</li>
            <li>Thumbnail</li>
            <li>Date</li>
            <li>Time</li>
            <li>Doctor</li>
            <li>Studio</li>
            <li>Payment</li>
            <li>Detail</li>
          </ul>
          <ul>
            <li>PRP Injections</li>
            <li>
              <img src={TableImg} alt="img" />
            </li>
            <li>12/08/23</li>
            <li>09:00am</li>
            <li>Vihang Sharma</li>
            <li>Toorak</li>
            <li>
              <p className="pending">Pending</p>
            </li>
            <li>
              <Link />
            </li>
          </ul>
          <ul>
            <li>PRP Injections</li>
            <li>
              <img src={TableImg} alt="img" />
            </li>
            <li>12/08/23</li>
            <li>09:00am</li>
            <li>Vihang Sharma</li>
            <li>Toorak</li>
            <li>
              <p className="paid">Paid</p>
            </li>
            <li>
              <Link />
            </li>
          </ul>
          <ul>
            <li>PRP Injections</li>
            <li>
              <img src={TableImg} alt="img" />
            </li>
            <li>12/08/23</li>
            <li>09:00am</li>
            <li>Vihang Sharma</li>
            <li>Toorak</li>
            <li>
              <p className="paid">Paid</p>
            </li>
            <li>
              <Link />
            </li>
          </ul>
          <ul>
            <li>PRP Injections</li>
            <li>
              <img src={TableImg} alt="img" />
            </li>
            <li>12/08/23</li>
            <li>09:00am</li>
            <li>Vihang Sharma</li>
            <li>Toorak</li>
            <li>
              <p className="paid">Paid</p>
            </li>
            <li>
              <Link />
            </li>
          </ul>
          <ul>
            <li>PRP Injections</li>
            <li>
              <img src={TableImg} alt="img" />
            </li>
            <li>12/08/23</li>
            <li>09:00am</li>
            <li>Vihang Sharma</li>
            <li>Toorak</li>
            <li>
              <p className="paid">Paid</p>
            </li>
            <li>
              <Link />
            </li>
          </ul>
          <ul>
            <li>PRP Injections</li>
            <li>
              <img src={TableImg} alt="img" />
            </li>
            <li>12/08/23</li>
            <li>09:00am</li>
            <li>Vihang Sharma</li>
            <li>Toorak</li>
            <li>
              <p className="paid">Paid</p>
            </li>
            <li>
              <Link />
            </li>
          </ul>
          <ul>
            <li>View more</li>
          </ul>
        </div>
      </div>

      <div className="estimate">
        <div className="est-head">
          <h3>Treatment Cost Estimate</h3>
        </div>
        <div className="est-data">
          <div className="left-data">
            <div className="select-treat">
              Select a Treatment
              <div className="selects">
                <select name="treatment">
                  <option value="1">Select a treatment</option>
                  <option value="2">Option 2</option>
                </select>
                <select name="treatment">
                  <option value="1">Select a Studio</option>
                  <option value="2">Option 2</option>
                </select>
              </div>
            </div>
            <div className="text-data">
              <h3>PRP Injections</h3>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content. It is<br/> a long established fact that a
                reader will be distracted by the readable content. It is a<br/> long
                established fact.
              </p>
              <div className="two-box">
                <div className="two-left">
                  <h4>Treatment Areas</h4>
                  <p>1. It is a long established fact.</p>
                  <p>2. Reader will be distracted by the readable content.</p>
                  <p>3. It is a long established fact that a reader will be distracted.</p>
                  <p>It is a long established fact that a reader will be distracted by the readable content.</p>
                </div>
                <div className="two-right">
                  <h4>Duration</h4>
                  <p>1. It is a long established fact.</p>
                  <p>2. Reader will be distracted by the readable content.</p>
                  <p>3. It is a long established fact that a reader will be distracted.</p>
                </div>
              </div>

            </div>
            <div className="text-data">
              <h4>Treatment Process</h4>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content. It is<br/> a long established fact that a
                reader will be distracted by the readable content. It is a<br/> long
                established fact.
              </p>
              <div className="two-box">
                <div className="two-left">
                  <p>1. It is a long established fact.</p>
                  <p>2. Reader will be distracted by the readable content.</p>
                  <p>3. It is a long established fact that a reader will be distracted.</p>
                </div>
                <div className="two-right">
                  
                </div>
              </div>
              <div className="two-box">
                <div className="two-left">
                  <h4>Risks & Complications</h4>
                  <p>It is a long established fact that a reader will be distracted by the readable content.</p>
                  <p>1. It is a long established fact.</p>
                  <p>2. Reader will be distracted by the readable content.</p>
                  <p>3. It is a long established fact that a reader will be distracted.</p>
                </div>
                <div className="two-right">
                  <h4>Recovery & Downtime</h4>
                  <p>1. It is a long established fact.</p>
                  <p>2. Reader will be distracted by the readable content.</p>
                  <p>3. It is a long established fact that a reader will be distracted.</p>
                  <p>It is a long established fact that a reader will be distracted by the readable content.</p>

                </div>
              </div>

            </div>
          </div>
          <div className="right-data">
            <div className="payment">
              <div className="total">
                <div className="product-title">
                  <h4>PRP Injections</h4>
                  <p>It is a long established fact.</p>
                </div>
                <div className="total-price">
                  <h4>$350.00</h4>
                  <p>Per Session / 12</p>
                </div>
              </div>
              <div className="check-box">
              <input type="checkbox" id="check1"/>
              <label htmlFor="check1">It is a long established fact.</label>
              <br/>
              <input type="checkbox" id="check2"/>
              <label htmlFor="check2">Reader will be distracted by the readable content.</label>
              <br/>
              <input type="checkbox" id="check2"/>
              <label htmlFor="check2">It is a long established fact that a reader will be distracted.</label>
              <br/>
              <input type="checkbox" id="check2"/>
              <label htmlFor="check2">Reader will be distracted by the readable content.</label>
            </div>
            <select name="cards" id="cards">
              <option value="card1"> Master Card (***6578)</option>
              <option value="card1"> Master Card (***6578)</option>
            </select>
            <button className="book-now">Book Now</button>
            </div>

              <div className="before-after">
                <h4>Treatment Benefits</h4>
                  <p>1. It is a long established fact.</p>
                  <p>2. Reader will be distracted by the readable content.</p>
                  <p>It is a long established fact that a reader will be distracted by the readable content.</p>
              </div>

              <img src={TableImg} alt="tableimage" />
            
          </div>
        </div>
      </div>
    </div>
  );
}
