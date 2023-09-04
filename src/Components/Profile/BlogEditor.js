import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


function BlogEditor() {

    let navigate = useNavigate();
    const [Blog, setBlog] = useState({ title: "", blog_body: "" });

    const createBlog = async (title, blog_body) => {
        const response = await fetch(`http://localhost:3001/profile/createblog`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem('token')
            },
            body: JSON.stringify({title, blog_body})
        })
        const Blog = response.json();

        if(response.status === 200){
            alert("Blog Posted Successfully 🎉");
            navigate('/profile')
        }
    }

    const handleOnClick = (e) => {
        e.preventDefault();

        if (Blog.title === "") alert("Please Enter Title")
        else if (Blog.blog_body === "") alert("Please Write Blog")
        else {
            createBlog(Blog.title, Blog.blog_body);
        }
    }

    const handleOnChange = (e) => {
        setBlog({ ...Blog, [e.target.name]: e.target.value });
    }

    return (
        <div className="container mt-3 pb-1">
            <div className="row m-2 " >
                <h2>Create New Blog</h2>
                <div className='row '>
                    <div className='col-8'>
                        <h4 style={{ textAlign: "left" }}>Title:</h4>
                        <input className='w-100' onChange={handleOnChange} type="text" name="title" id="title" />
                    </div>
                    <div className='col-4'>
                        <button onClick={handleOnClick} className='h-100 w-75 btn btn-primary '> <h4>Post It 📮</h4> </button>
                    </div>
                </div>

                <h4 style={{ textAlign: "left" }}>Blog Body:</h4>
                <textarea style={{ textAlign: "left" }} onChange={handleOnChange} name="blog_body" id="blog_body" cols="150" rows="16"></textarea>
            </div>
        </div>
    )
}

export default BlogEditor
