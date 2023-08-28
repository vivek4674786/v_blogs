import React, {useState, useEffect} from "react";
import BlogContext from "./BlogContext";


const BlogState = (props) => {
    const initialBlogs = [];

      const [Blogs, setBlogs] = useState(initialBlogs);

      const fetchBlogs = async () => {
        try{
          const response = await fetch('http://localhost:3001/blogs', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
        }
        })
        const json = await response.json();
        setBlogs(json);
        console.log("state-1");
        console.log(json);
        }
        catch(error){
          console.log(error);
        }
      }
      useEffect(() => {
        // Fetch blogs when the component mounts
        fetchBlogs();
      }, []);
      console.log("State start---")
      console.log(Blogs);
      console.log("State over---")
    return(
        <BlogContext.Provider value={{Blogs, setBlogs, fetchBlogs}}>
            {props.children}
        </BlogContext.Provider>
    )
}

export default BlogState;