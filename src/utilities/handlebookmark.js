import toast from "react-hot-toast";
import Swal from 'sweetalert2';




const getBlogs = () => {
  const blogs = localStorage.getItem("blogs");
  if (blogs) {
    return JSON.parse(blogs);
  }
  return [];
}

const setBlogs = (blog) => {
  const blogs = getBlogs();
  if (blogs.some(b => b.id === blog.id)) {
    toast.error("Already Bookmarked");
    return;
  } else {
    blogs.push(blog);
    localStorage.setItem("blogs", JSON.stringify(blogs));
    toast.success("Blog Bookmarked");
  }
};


const removeBlogs = (blog) => {
   
    const blogs = getBlogs();

    const updatedBlogs = blogs.filter(b => b.id !== blog.id);
    localStorage.setItem("blogs", JSON.stringify(updatedBlogs));
     
    
  
    
}
export { getBlogs, setBlogs, removeBlogs };