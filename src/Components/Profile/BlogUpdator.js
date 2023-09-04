import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';


function BlogUpdator(props) {

    let navigate = useNavigate();
    const location = useLocation();
    const curruntBlog = location.state;
    const [Blog, setBlog] = useState({ title: curruntBlog.title, blog_body: curruntBlog.blog_body });

    const updateBlog = async (title, blog_body) => {
        const response = await fetch(`http://localhost:3001/profile/updatingblogs/${curruntBlog.id}`,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem('token')
            },
            body: JSON.stringify({title, blog_body})
        })

        if(response.status === 200){
            alert("Blog Updated Successfully 🎉");
            navigate('/profile')
        }
    }

    const handleOnClick = (e) => {
        e.preventDefault();

        if (Blog.title === "") alert("Please Enter Title")
        else if (Blog.blog_body === "") alert("Please Write Blog")
        else {
            updateBlog(Blog.title, Blog.blog_body);
        }
    }

    const handleOnChange = (e) => {
        setBlog({ ...Blog, [e.target.name]: e.target.value });
    }

    return (
        <div className="container mt-3 pb-1">
            <div className="row m-2 " >
                <h2>Edit Blog</h2>
                <div className='row '>
                    <div className='col-8'>
                        <h4 style={{ textAlign: "left" }}>Title:</h4>
                        <input className='w-100' onChange={handleOnChange} value={Blog.title} type="text" name="title" id="title" />
                    </div>
                    <div className='col-4'>
                        <button onClick={handleOnClick} className='h-100 w-75 btn btn-primary '> <h4>Save 💾</h4> </button>
                    </div>
                </div>

                <h4 style={{ textAlign: "left" }}>Blog Body:</h4>
                <textarea style={{ textAlign: "left" }} onChange={handleOnChange} value={Blog.blog_body} name="blog_body" id="blog_body" cols="150" rows="16"></textarea>
            </div>
        </div>
    )
}

export default BlogUpdator
