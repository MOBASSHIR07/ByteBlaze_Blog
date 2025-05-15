import React from 'react';
import { useLoaderData, Link, Outlet, useNavigation } from 'react-router-dom';
import Loader from '../components/Loader';
import { MdBookmarkAdd } from 'react-icons/md';
import { setBlogs } from '../utilities/handlebookmark';

const Blog = () => {
    const [tabindex, setTabIndex] = React.useState(0);
    const blog = useLoaderData();
    const {
        comments_count,
        reading_time_minutes,
        public_reactions_count,
        cover_image,
        description,
        published_at, tags,
        title
    } = blog;

    const handleBookmark = (blog) => {
        setBlogs(blog);
    }

    return (
        <div className="max-w-2xl px-4 py-16 mx-auto space-y-12 bg-base-100 text-base-content">
            <article className="space-y-8">
                <div className="space-y-2">
                    <h1 className="text-3xl font-bold text-base-content">{title}</h1>
                    <div className="flex flex-col md:flex-row justify-between text-sm text-base-content/70">
                        <p>
                            {new Date(published_at).toLocaleDateString()} • {reading_time_minutes} min read
                        </p>
                        <p className="mt-1 md:mt-0 text-right">
                            {comments_count} comments • {public_reactions_count} reactions
                        </p>
                    </div>
                </div>
            </article>

            {/* Tabs - Responsive & No Side Scroll on Small Devices */}
            <div className="sm:overflow-visible overflow-x-auto w-full">
                <div className="flex items-center sm:justify-center flex-nowrap bg-base-200 text-base-content rounded-t-lg min-w-[320px]">
                    <Link onClick={() => setTabIndex(0)}
                        to="."
                        className={`flex items-center flex-shrink-0 px-4 py-3 space-x-2 border-b ${tabindex === 0
                                ? 'border border-b-0 border-primary text-primary'
                                : 'border-transparent border-b text-base-content/70'
                            }`}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                        </svg>
                        <span>Content</span>
                    </Link>

                    <Link onClick={() => setTabIndex(1)}
                        to="author"
                        className={`flex items-center flex-shrink-0 px-4 py-3 space-x-2 border-b ${tabindex === 1
                                ? 'border border-b-0 border-primary text-primary'
                                : 'border-transparent border-b text-base-content/70'
                            }`}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                        </svg>
                        <span>Author</span>
                    </Link>

                    <button
                        onClick={() => handleBookmark(blog)}
                        className="ml-auto mr-2 flex items-center justify-center p-2 relative group"
                        aria-label="Bookmark this post"
                    >
                        <div className='absolute inset-0 rounded-full bg-primary opacity-20 group-hover:animate-pulse'></div>
                        <MdBookmarkAdd className='relative w-5 h-5 text-pink-500' />
                    </button>
                </div>
            </div>


            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Blog;