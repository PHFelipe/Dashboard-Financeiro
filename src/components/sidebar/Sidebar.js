import React from 'react';
import './Sidebar.css';
import logo from '../../assets/Logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faMinusSquare, faShop, faScissors } from '@fortawesome/free-solid-svg-icons';

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
    return (
        <div className={sidebarOpen ? "sidebar-responsive" : ""} id="sidebar">
            <div className="sidebar__title">
                <div className="sidebar__img">
                    <img src={logo} alt="logo" />
                    <h1>Dashboard de Barbearia</h1>
                </div>
                <FontAwesomeIcon icon={faTimes} onClick={closeSidebar} className="sidebarIcon" aria-hidden="true" />
            </div>
            <div className="sidebar__menu">
                <div className="sidebar__link active_menu_link">
                    <FontAwesomeIcon icon={faMinusSquare} />
                    <a href="#"> Home</a>
                </div>
                <h2>DASHBOARDS</h2>
                <div className='sidebar__link'>
                    <FontAwesomeIcon icon={faShop} />
                    <a href="#">Análises da Barbearia</a>
                </div>
                <div className='sidebar__link'>
                    <FontAwesomeIcon icon={faScissors} />
                    <a href="#">Análises por Barbeiros</a>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
