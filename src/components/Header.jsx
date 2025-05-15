import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="hero   min-h-[calc(100vh-70px-200px)]">
            <div className="hero-content text-center">
                <div className="max-w-lg">
                    <h1 className="text-5xl font-bold">
                        Welcome to <span className=' bg-gradient-to-r from-primary via-accent  to-secondary text-transparent bg-clip-text bg-300% animate-gradient'>ByteBlaze</span>
                    </h1>
                    <p className="py-6">
                        ByteBlaze is the bridge between the complex world of technology and
                        the curious minds eager to understand it.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-4">
                        <Link
                            to="/bookmarks"
                            className="relative inline-block px-5 py-2 font-medium group"
                        >
                            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:translate-x-0 group-hover:translate-y-0"></span>
                            <span className="absolute inset-0 w-full h-full bg-white border-2 border-secondary group-hover:bg-primary"></span>
                            <span className="relative text-black group-hover:text-white">Bookmarks</span>
                        </Link>

                        <Link
                            to="/blogs"
                            className="relative inline-block px-5 py-2 font-medium group"
                        >
                            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:translate-x-0 group-hover:translate-y-0"></span>
                            <span className="absolute inset-0 w-full h-full bg-white border-2 border-secondary group-hover:bg-primary"></span>
                            <span className="relative text-black group-hover:text-white">Explore Blogs</span>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
