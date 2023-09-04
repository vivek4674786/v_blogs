import React, {useContext, useEffect} from 'react'
import BlogContext from '../../Context/Blogs/BlogContext';
import UserContext from '../../Context/User/UserContext';
import BlogItem from './BlogItem';

function Blogs(props) {
    const blogcontext = useContext(BlogContext);
    const { User, fetchUser } = useContext(UserContext);
    const {Blogs, fetchBlogs} = blogcontext;

    useEffect(()=>{
        fetchUser();
        console.log("Blogjs useEffect");
    },[Blogs])

  const blogLike = async (id) => {
    const response = await fetch(`http://localhost:3001/blogs/like/${id}`,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            "auth-token": localStorage.getItem('token')
        }
    })
    const totalLikes = await response.json()
    return(totalLikes.totalLikes);
  }

  const blogComment = async (id, user_id, user_name, comment_msg) => {
    const response = await fetch(`http://localhost:3001/blogs/comment/${id}`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            "auth-token": localStorage.getItem('token')
        },
        body: JSON.stringify({user_id, user_name, comment_msg})
    })
    
    if(response.status === 200){
        alert("comment added successfully🎉");
        fetchBlogs()
    }
  }

    return (
        <div className='p-2'>
            {Blogs.slice(0).reverse().map((blog) => {
                return <BlogItem key={blog._id} changeBlog={props.changeBlog} Blog={blog} blogLike={blogLike} blogComment={blogComment} User={User}/>
            })}
        </div>
    )
}

export default Blogs
