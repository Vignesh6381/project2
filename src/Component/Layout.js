import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Layout = () => {
  return (
    <div>
      <Navbar />
      <div className="main-container" style={{ display: 'flex' }}>
        <Sidebar />
        <div className="content" style={{ flexGrow: 1 }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
