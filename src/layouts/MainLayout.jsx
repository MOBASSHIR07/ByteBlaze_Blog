// MainLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainLayout = () => {
    return (
        <div className="flex flex-col min-h-screen ">
            {/* Navbar */}
            <div className="h-[70px]">
                <Navbar />
            </div>

            {/* Main Content */}
            <div className="flex-1 min-h-[calc(100vh-70px-200px)]">
                <Outlet />
            </div>

            {/* Footer */}
            <div >
                <Footer />
            </div>
        </div>
    );
};

export default MainLayout;
