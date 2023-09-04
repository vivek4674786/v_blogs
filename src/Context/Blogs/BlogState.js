import React, {useState} from "react";
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
        setBlogs(await response.json());
        }
        catch(error){
          console.log(error);
        }
      }
      
    return(
        <BlogContext.Provider value={{Blogs, setBlogs, fetchBlogs}}>
            {props.children}
        </BlogContext.Provider>
    )
}

export default BlogState;