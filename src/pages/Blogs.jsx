import React from 'react';
import { useLoaderData ,useNavigation} from 'react-router-dom';
import BlogCard from '../components/BlogCard';
import Loader from '../components/Loader';

const Blogs = () => {
  const navigate = useNavigation();
  const blogs = useLoaderData();
  console.log(blogs);


    if(navigate.state==='loading') return <Loader></Loader>

  return (
    <section className="bg-base-200 text-base-content">
      <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
        {/* Highlighted blog */}
        <a
          rel="noopener noreferrer"
          href="#"
          className="block max-w-sm gap-6 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 rounded-lg overflow-hidden shadow-md bg-base-100 border border-base-300"
        >
          <img
            src={blogs[0].cover_image}
            alt={blogs[0].title}
            className="object-cover w-full h-64 sm:h-96 lg:col-span-7 bg-base-300"
          />
          <div className="p-6 space-y-2 lg:col-span-5">
            <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline line-clamp-2">
              {blogs[0].title}
            </h3>
            <span className="text-sm text-base-content/70 block">
              {new Date(blogs[0].published_at).toLocaleDateString()}
            </span>
            <p className="text-base-content/80 line-clamp-3">{blogs[0].description}</p>
          </div>
        </a>

        {/* Blog grid */}
        <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 ">
          {blogs.slice(1,19).map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
