import React from 'react';
import { Link } from 'react-router-dom';
import cover_img from '../assets/404.jpg';
import { TiDelete } from "react-icons/ti";
import { removeBlogs } from '../utilities/handlebookmark';

const BlogCard = ({ blog, isDeletable,handleDelete }) => {
  const { title, published_at, description, cover_image, id } = blog;
 

  return (
    <div className="relative max-w-sm mx-auto transition-all duration-300 hover:scale-[1.02] group ">
      {/* Card Container */}
      <div className="border-2 border-primary border-opacity-30 hover:border-secondary rounded-lg shadow-md bg-base-100 h-full">
        <Link
          to={`/blogs/${id}`}
          className="hover:no-underline focus:no-underline block h-full"
        >
          {/* Image with aspect ratio */}
          <div className="relative pt-[56.25%] overflow-hidden rounded-t-lg">
            <img
              role="presentation"
              className="absolute top-0 left-0 w-full h-full object-cover bg-base-200"
              src={cover_image || cover_img}
              alt={title}
              onError={(e) => {
                e.target.src = cover_img;
                e.target.onerror = null;
              }}
            />
          </div>
          
          {/* Card Content */}
          <div className="p-4 sm:p-6 space-y-2">
            <h3 className="text-xl sm:text-2xl font-semibold text-base-content group-hover:underline line-clamp-2">
              {title}
            </h3>
            <span className="text-xs sm:text-sm text-base-content/70 block">
              {new Date(published_at).toLocaleDateString()}
            </span>
            <p className="text-sm text-base-content/80 line-clamp-3">
              {description}
            </p>
          </div>
        </Link>
      </div>

      {/* Delete Button - Responsive Positioning */}
      {isDeletable && (
        <button
          onClick={(e) => {
            e.preventDefault();
            handleDelete(blog);
          }}
          className="absolute -top-2 -right-2 p-0 bg-red-400 text-white rounded-full hover:bg-red-600 transition-all duration-200 shadow-lg hover:scale-110"
          aria-label="Delete bookmark"
        >
          <TiDelete className="text-2xl sm:text-3xl" />
        </button>
      )}
    </div>
  );
};

export default BlogCard;