import React from 'react';
import './Sidebar.css';
import logo from '../../assets/LogoBarbearia.png';

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
    return (
        <nav id="sidebar" className={sidebarOpen ? 'open-sidebar' : ''}>
            <div id="sidebar_content">
                <div id="user">
                    <img src={logo} id="Logo" alt="logo" />

                    <p id="user_infos">
                        <span className="item-description">
                            R R
                        </span>
                        <span className="item-description">
                            Barber Shop
                        </span>
                    </p>
                </div>

                <ul id="side_items">
                    <li className="side-item active">
                        <a href="#">
                            <i className="fa-solid fa-chart-line"></i>
                            <span className="item-description">
                                Dashboard
                            </span>
                        </a>
                    </li>

                    <li className="side-item">
                        <a href="#">
                            <i class="fa-solid fa-reply"></i>
                            <span className="item-description">
                                Retornar
                            </span>
                        </a>
                    </li>
                    
                </ul>

                <button id="open_btn" onClick={closeSidebar}>
                    <i id="open_btn_icon" className="fa-solid fa-chevron-right"></i>
                </button>
            </div>

            <div id="logout">
                <button id="logout_btn">
                    <i className="fa-solid fa-right-from-bracket"></i>
                    <span className="item-description">
                        Logout
                    </span>
                </button>
            </div>
        </nav>
    );
};

export default Sidebar;
