import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Sidebar.css';
import {FaBuilding, FaBars } from 'react-icons/fa';
import { LuPyramid } from "react-icons/lu";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Toggle Button */}
      <button className="menu-toggle btn btn-light" onClick={toggleSidebar}>
        <FaBars />
      </button>
      

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? 'expanded' : ''}`}>
        <ul className="nav flex-column">
          <li className="nav-item mt-5 p-2">
            <Link to="/pyramid" className="nav-link">
              <LuPyramid />
              {isOpen && <span className="label">Pyramid</span>}
            </Link>
          </li>
          <li className="nav-item p-2">
            <Link to="/feature" className="nav-link">
              <FaBuilding />
              {isOpen && <span className="label">Taj Mahal</span>}
            </Link>
          </li>
          <li className="nav-item p-2">
            <Link to="/community" className="nav-link">
              <LuPyramid />
              {isOpen && <span className="label">Eiffel Tower</span>}
            </Link>
          </li>
        </ul>
      </div>

      {/* Overlay on mobile */}
      {isOpen && <div className="sidebar-overlay" onClick={toggleSidebar}></div>}

      {/* Main Content */}
      <div className="main-content">
        <Outlet />
      </div>
    </>
  );
};

export default Sidebar;
