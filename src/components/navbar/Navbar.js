import React, { useState } from 'react'; // Import useState hook
import { faClock, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Navbar.css";
import Barbeiro from "../../assets/Barbeiro.svg";

const Navbar = ({ openSidebar }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false); // Initialize state variable

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen); // Update state using setSidebarOpen
  };

  return (
    <nav className="navbar">
      <div className="nav_icon" onClick={toggleSidebar}>
        <i className="fa fa-bars" aria-hidden="true"></i>
      </div>

      <div className="navbar_left">
        <a href="#"> Diário</a>
        <a href="#"> Mensal</a>
        <a href="#" className="active_link">
          Por período
        </a>
      </div>

      <div className="navbar_right">
        <div className="icon_wrapper">
          <a href="#">
            <FontAwesomeIcon icon={faSearch} />
          </a>
        </div>

        <div className="icon_wrapper">
          <a href="#">
            <FontAwesomeIcon icon={faClock} />
          </a>
        </div>

        <div className="icon_wrapper">
          <a href="#" className="no-circle">
            <img src={Barbeiro} alt="Barbeiro" width="30" height="30" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
