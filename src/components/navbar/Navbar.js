import React, { useState } from "react";
import { Calendar } from 'primereact/calendar';
import Barbeiro from "../../assets/Barbeiro.svg";
import "./Navbar.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";

const Navbar = ({ openSidebar }) => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDateRange, setSelectedDateRange] = useState([new Date(), new Date()]);

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  const handleSelectDateRange = (date) => {
    setSelectedDateRange(date);
    setShowCalendar(false);
  };

  return (
    <nav className="navbar">
      <div className="nav_icon" onClick={openSidebar}>
        <i className="fa fa-bars" aria-hidden="true"></i>
      </div>

      <div className="navbar_left">
        <a href="#"> Diário</a>
        <a href="#"> Mensal</a>
        <a href="#" onClick={toggleCalendar} className="active_link">
          Por período
        </a>
        {showCalendar && (
          <Calendar
            dateFormat="dd/mm/yy"
            value = {selectedDateRange} onChange={(event) => setSelectedDateRange(event.value)} selectionMode = "range"
          />
        )}
      </div>

      <div className="navbar_right">
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
