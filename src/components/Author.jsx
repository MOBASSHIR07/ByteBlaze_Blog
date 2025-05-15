import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaTwitter, FaGithub } from 'react-icons/fa';
import { BsGlobe } from 'react-icons/bs';

const Author = () => {
    const blog = useLoaderData();
    const { user } = blog;
    const {
        name,
        username,
        twitter_username,
        github_username,
        profile_image,
        website_url
    } = user;

    return (
        <div className="flex items-center justify-center px-4  ">
            <div className="flex flex-col items-center w-full max-w-sm p-6 bg-white border-b border-primary dark:bg-gray-900 text-gray-800 dark:text-gray-200 shadow-lg rounded-xl transition-all ">
                {/* Profile Image */}
                <img 
                    src={profile_image || 'https://source.unsplash.com/150x150/?portrait'} 
                    alt={`Profile of ${name}`} 
                    className="w-28 h-28 rounded-full object-cover border-4 border-gray-300 dark:border-gray-700 shadow-sm"
                />

                {/* Name and Username */}
                <div className="mt-4 text-center">
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-100">{name}</h2>
                    <p className="text-sm text-gray-600 dark:text-gray-400">@{username}</p>
                </div>

                {/* Social Links */}
                <div className="flex items-center mt-4 space-x-4">
                    {github_username && (
                        <a 
                            href={`https://github.com/${github_username}`} 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                            aria-label="GitHub"
                        >
                            <FaGithub className="w-5 h-5" />
                        </a>
                    )}

                    {website_url && (
                        <a 
                            href={website_url} 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                            aria-label="Website"
                        >
                            <BsGlobe className="w-5 h-5" />
                        </a>
                    )}

                    {twitter_username && (
                        <a 
                            href={`https://twitter.com/${twitter_username}`} 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                            aria-label="Twitter"
                        >
                            <FaTwitter className="w-5 h-5" />
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Author;
