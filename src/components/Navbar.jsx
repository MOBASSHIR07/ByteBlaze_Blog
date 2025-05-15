import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const [theme, setTheme] = useState('light');
    const [isMenuOpen, setIsMenuOpen] = useState(false); // ✅ State to toggle sidebar

    const handleThemeChange = (e) => {
        const newTheme = e.target.checked ? 'synthwave' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
    };

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
            setTheme(storedTheme);
            document.querySelector('html').setAttribute('data-theme', storedTheme);
        }
    }, []);

    return (
        <div className="navbar bg-base-100 shadow-lg px-4 fixed z-10">
            <div className="flex-1">
                <Link to='/' className="btn btn-ghost gap-0 text-secondary normal-case text-2xl font-bold">
                    Byte <span className="text-primary">Blaze</span>
                </Link>
            </div>

            {/* ✅ Hamburger menu for small screens */}
            <div className="flex-none lg:hidden">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="btn btn-square btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16" /></svg>
                </button>
            </div>

            {/* ✅ Normal navbar for large screens */}
            <div className="hidden lg:flex flex-none gap-2">
                <ul className="menu menu-horizontal px-1 gap-4 items-center">
                    <NavLink to='/' className={({ isActive }) => isActive ? 'text-primary font-bold' : 'font-bold'}>Home</NavLink>
                    <NavLink to='/blogs' className={({ isActive }) => isActive ? 'text-primary font-bold' : 'font-bold'}>Blogs</NavLink>
                    <NavLink to='/bookmarks' className={({ isActive }) => isActive ? 'text-primary font-bold' : 'font-bold'}>Bookmarks</NavLink>
                    <li>
                        <label className="flex cursor-pointer gap-2">
                            {/* Theme toggle switch */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="5" />
                                <path
                                    d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                            </svg>
                            <input
                                onChange={handleThemeChange}
                                type="checkbox"
                                checked={theme !== 'light'}
                                className="toggle theme-controller"
                            />
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                            </svg>
                        </label>
                    </li>
                </ul>
            </div>

            {/* ✅ Sidebar dropdown for small screens */}
            {isMenuOpen && (
                <div className="absolute top-16 right-4 w-52 bg-base-100 shadow-md rounded-box p-4 z-20 lg:hidden">
                    <ul className="flex flex-col gap-3">
                        <NavLink to='/' onClick={() => setIsMenuOpen(false)} className={({ isActive }) => isActive ? 'text-primary font-bold' : 'font-bold'}>Home</NavLink>
                        <NavLink to='/blogs' onClick={() => setIsMenuOpen(false)} className={({ isActive }) => isActive ? 'text-primary font-bold' : 'font-bold'}>Blogs</NavLink>
                        <NavLink to='/bookmarks' onClick={() => setIsMenuOpen(false)} className={({ isActive }) => isActive ? 'text-primary font-bold' : 'font-bold'}>Bookmarks</NavLink>
                        <li>
                            <label className="flex cursor-pointer gap-2 items-center">
                                <span>Dark Mode</span>
                                <input
                                    onChange={handleThemeChange}
                                    type="checkbox"
                                    checked={theme !== 'light'}
                                    className="toggle theme-controller"
                                />
                            </label>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Navbar;
