import React, {useContext, useEffect} from 'react'
import BlogContext from '../Context/Blogs/BlogContext';
import BlogItem from './BlogItem';

function Blogs() {
    const blogcontext = useContext(BlogContext);

  const {Blogs, fetchBlogs} = blogcontext;
  console.log('left');

  console.log(Blogs);

  useEffect(() => {
    fetchBlogs();
  },[fetchBlogs])
  console.log(Blogs);
    return (
        <div className='p-2'>
            {Blogs.map((blog) => {
                return <BlogItem key={blog._id} Blog={blog}/>
            })}
        </div>
    )
}

export default Blogs
