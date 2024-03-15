import React from 'react';
import './Sidebar.css';
import logo from '../../assets/Logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faMinusSquare, faShop, faScissors } from '@fortawesome/free-solid-svg-icons';

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
    return (
        <nav id="sidebar" className={sidebarOpen ? 'open-sidebar' : ''}>
            <div id="sidebar_content">
                <div id="user">
                    <img src={logo} id="Logo" alt="logo" />

                    <p id="user_infos">
                        <span className="item-description">
                            Fulano de Tal
                        </span>
                        <span className="item-description">
                            Lorem Ipsum
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
                            <i className="fa-solid fa-user"></i>
                            <span className="item-description">
                                Usuários
                            </span>
                        </a>
                    </li>

                    <li className="side-item">
                        <a href="#">
                            <i className="fa-solid fa-bell"></i>
                            <span className="item-description">
                                Notificações
                            </span>
                        </a>
                    </li>

                    <li className="side-item">
                        <a href="#">
                            <i className="fa-solid fa-box"></i>
                            <span className="item-description">
                                Produtos
                            </span>
                        </a>
                    </li>

                    <li className="side-item">
                        <a href="#">
                            <i className="fa-solid fa-image"></i>
                            <span className="item-description">
                                Imagens
                            </span>
                        </a>
                    </li>

                    <li className="side-item">
                        <a href="#">
                            <i className="fa-solid fa-gear"></i>
                            <span className="item-description">
                                Configurações
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
