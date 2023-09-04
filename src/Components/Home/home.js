import React, { useContext, useEffect, useState } from 'react'
import BlogComponent from './Blogs';
import BlogContent from '../Home/BlogContent';
import BlogContext from '../../Context/Blogs/BlogContext';

function Home() {
  const {Blogs, fetchBlogs} = useContext(BlogContext);

  useEffect(() => {
    console.log("home, use effect is running..")
    fetchBlogs();
  },[])
  console.log("1st: ");
  const first = Blogs[0];
  const [FullBlog, setFullblog] = useState(first);
  console.log(FullBlog);
  
  
  //console.log(Blogs[0].blog_body);

  const changeBlog = (id) => {
    console.log("clicked  :"+id);
    const newBlog = Blogs.find((blog => blog._id === id))
    setFullblog(newBlog)
  }


  return (

    <div className="d-flex" style={{ backgroundColor: "rgb(255, 255, 196)" }}>

      <div className='col-md-4 border' style={{ overflowY: "scroll", height: "90vh" }}>
        <BlogComponent changeBlog={changeBlog}/>
      </div>
      <div className='col-md-8  border' style={{ overflowY: "scroll", height: "90vh" }}>
        <BlogContent FullBlog={FullBlog}/>
        {console.log("ok")}
      </div>
    </div>

  )
}

export default Home
