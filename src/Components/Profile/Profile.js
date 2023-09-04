import React, { useEffect, useState, useContext } from 'react'
import UserContext from '../../Context/User/UserContext';
import { Link, useNavigate } from 'react-router-dom';

function Profile() {

    let navigate = useNavigate()
    const {User, setUser, fetchUser} = useContext(UserContext);
    //const [User, setUser] = useState({});
    const [Blogs, setBlogs] = useState([]);
    
    const fetchMyBlogs = async () => {
        const response = await fetch(`http://localhost:3001/profile/fetchmyblogs`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem('token')
            }
        })
        const json = await response.json();
        setBlogs(json);
    }

    // const fetchUser = async () => {
    //     const response = await fetch(`http://localhost:3001/profile/fetchuser`, {
    //         method: 'GET',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             "auth-token": localStorage.getItem('token')
    //         }
    //     })
    //     const json = await response.json();
    //     setUser(json);
    // }

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    }

    const DeleteBlog = async (id) => {
        const response = await fetch(`http://localhost:3001/profile/deleteblog/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem('token')
            }
        })

        if(response.status === 200){
            alert("Blog Deleted Successfully");
        }

        const newBlogs = Blogs.filter((blog) => { return blog._id !== id})
        setBlogs(newBlogs);
    }

    var status = true;
    useEffect(() => {
        fetchUser();
        fetchMyBlogs();
        if (!Blogs) {
            status = false;
        }
    }, [])

    return (
        <div className="container mt-4">
            <div className="card shadow p-3 mb-3 bg-body-tertiary rounded">
                <div className="d-flex">
                    <div className="card-body">
                        <p style={{ textAlign: "left" }}>Name: {User.name}</p>
                        <p style={{ textAlign: "left" }}>Profession: {User.profession}</p>
                        <p style={{ textAlign: "left" }}>Email: {User.email}</p>
                    </div>
                    <div>
                        <button type="submit" onClick={handleLogout} className="w-100 m-1 btn btn-danger">Logout  </button>
                        <Link to="/createblog"><button type="submit" className="w-100 m-1 btn btn-success"> Create New Blog </button></Link>
                    </div>
                </div>
            </div>
            <h3>My Blogs: </h3>
            <div className="row">
                {status ? Blogs.map((blog) => {
                    return (
                        <div key={blog._id} className="col-5 card shadow p-3 m-3 bg-body-tertiary rounded">
                            <h5 style={{ textAlign: "left" }}>{blog.title}</h5>
                            <p style={{ textAlign: "left" }}>{blog.blog_body.slice(0,130)} ...</p>
                            <div className='d-flex justify-content-around'>
                            <p style={{ textAlign: "left" }}>Likes: {blog.likes.length}</p>
                            <p style={{ textAlign: "left" }}>Comments: {blog.comments.length}</p>
                            </div>
                            <div className='d-flex justify-content-around'>
                                <button onClick={() => {
                                    navigate('/editblog', {
                                        state: {
                                            id: blog._id,
                                            title: blog.title,
                                            blog_body: blog.blog_body
                                        }
                                    })
                                }} className='btn btn-primary'><i className="far fa-edit mx-2"></i>Edit</button>      
                                <button onClick={() => {DeleteBlog(blog._id)}} className='btn btn-danger'><i className="far fa-trash-alt mx-2"></i>Delete</button>
                            </div>
                        </div>

                    )
                }) : "no Blogs"}

            </div>
        </div>
    )
}

export default Profile
