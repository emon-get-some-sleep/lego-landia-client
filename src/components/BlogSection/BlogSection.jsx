import React, { useEffect, useState } from "react";
import EachBlog from "./EachBlog";

const BlogSection = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/blogs')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])
  
  return (
    <div className="mt-[120px]">
      {
        blogs.map(blog => <EachBlog key={blog._id} blog={blog}></EachBlog>)
      }
    </div>
  );
};

export default BlogSection;
