import { useState } from "react";
import "./patient.css";
import Header from "../components/header";
import Overview from "../components/overview";
import SideBar from "../components/sidebar";

function PatientDashboard() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Header togglemenu={toggleMenu} open={isOpen} />
      <div className="patient-container">
        <div className={`sidebar ${isOpen ? "active-menu" : ""}`}>
          <SideBar />
        </div>
        <div className="content">
          <Overview />
        </div>
      </div>
    </>
  );
}

export default PatientDashboard;
