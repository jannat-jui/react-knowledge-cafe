import { useEffect, useState } from "react";
import Blog from "../Blog";


const Blogs = ({handleMarkasRead, handleBookmarkAdd}) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(()=>{
        fetch("blogs.json")
        .then(res=> res.json())
        .then(data=> setBlogs(data))
    }, [])
    
    return (
        <div className="mt-[2rem] lg:w-[67%]">
            <div>
                {
                    blogs.map(blog=><Blog key={blog.id} blog={blog} handleMarkasRead={handleMarkasRead} handleBookmarkAdd={handleBookmarkAdd}></Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;