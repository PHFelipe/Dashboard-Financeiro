import React, { useState } from 'react';
import Sidebar from './components/sidebar/Sidebar';
import Navbar from './components/navbar/Navbar';
import './App.css'; // Importação do CSS principal
import Main from './components/main/Main';

const App = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <div className="containera">
            <Sidebar sidebarOpen={sidebarOpen} closeSidebar={toggleSidebar} />
            <div className = "test">
            <Navbar sidebarOpen={sidebarOpen} openSidebar={toggleSidebar} />
            <Main />
            </div>
            
        </div>
    );
};

export default App;
