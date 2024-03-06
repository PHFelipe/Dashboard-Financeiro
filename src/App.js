import React, { useState } from 'react';
import Sidebar from './components/sidebar/Sidebar';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Main from './components/main/Main';

const App = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <div className="container">
            <Navbar sidebarOpen={sidebarOpen} openSidebar={toggleSidebar} />
            <Main />
            <Sidebar sidebarOpen={sidebarOpen} closeSidebar={toggleSidebar} />
        </div>
    );
};

export default App;
