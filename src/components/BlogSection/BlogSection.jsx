import React, { useEffect, useState } from "react";
import EachBlog from "./EachBlog";
import { Helmet } from "react-helmet-async";

const BlogSection = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('https://lego-landia-server-emon-get-some-sleep.vercel.app/blogs')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])
  
  return (
    <div className="mt-[120px]">
        <Helmet>
        <title>Lego Landia | Blogs</title>
      </Helmet>
      {
        blogs.map(blog => <EachBlog key={blog._id} blog={blog}></EachBlog>)
      }
    </div>
  );
};

export default BlogSection;
