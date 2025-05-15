import React from 'react';
import { Link } from 'react-router-dom';

const EmptyState = ({message}) => {
    return (
        <div className='min-h-[calc(100vh-70px-200px)] flex flex-col justify-center items-center mb-16'>
            <p className='text-3xl font-bold'>{message}</p>
             <div className='my-4'>
                <Link
                            to="/blogs"
                            className="relative inline-block px-5 py-2 font-medium group"
                        >
                            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:translate-x-0 group-hover:translate-y-0"></span>
                            <span className="absolute inset-0 w-full h-full bg-white border-2 border-secondary group-hover:bg-primary"></span>
                            <span className="relative text-black group-hover:text-white">Go to Blogs</span>
                        </Link>
            

             </div>
        </div>
    );
};

export default EmptyState;