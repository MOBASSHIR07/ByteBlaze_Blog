import React, { useEffect } from 'react';
import { getBlogs, removeBlogs } from '../utilities/handlebookmark';
import BlogCard from '../components/BlogCard';
import EmptyState from '../components/EmptyState';
import Swal from 'sweetalert2'

const Bookmarks = () => {
    const [blogs, setBlogs] = React.useState([]);
    useEffect(() => {
        const blogs = getBlogs();
        setBlogs(blogs);

    }, [])
    const handleDelete = (blog) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                removeBlogs(blog);
                const blogs = getBlogs();
                setBlogs(blogs);
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });



    }
    if (blogs.length === 0) return <EmptyState message={'No Book Marks Available'} />
    return (
        <div className=' w-10/12 mx-auto my-16'>

            <div className="grid justify-center grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3  ">
                {blogs.map((blog) => (
                    <BlogCard handleDelete={handleDelete} isDeletable={true} key={blog.id} blog={blog} />
                ))}
            </div>

        </div>
    );
};

export default Bookmarks;