import React, { useState, useContext, useEffect } from 'react'


function BlogItem(props) {
    const { Blog, changeBlog, blogLike, blogComment, User } = props;
    const userAuthToken = localStorage.getItem('token');
    const [IsLiked, setIsLiked] = useState(Blog.likes.includes(User._id) ? true : false);
    const [Likes, setLikes] = useState(Blog.likes.length);
    const [ShowComments, setShowComments] = useState(false);
    //const [NewComment, setNewComment] = useState("");

    // const handleOnChange = () => {
    //     setNewComment()
    // }

    const handleLikeClick = async (id) => {
        if (userAuthToken) {
            const totalLikes = await blogLike(id);
            setIsLiked((IsLiked === false ? true : false));
            console.log("totalLikes :" + totalLikes)
            setLikes(totalLikes);
        }
        else
            alert("can not Like without Login");
    }

    const handleCommentClick = async (id) => {
        setShowComments((ShowComments === false ? true : false));
    }

    return (
        <div className="card shadow p-3 mb-3 bg-body-tertiary rounded">
            <div className="card-body ">
                <div className="d-flex">
                    <img className="border border-2 rounded-5 m-1" src="./icons8-user-48.png" alt="" />
                    <div>
                        <h5 className="mx-1" style={{ textAlign: "left" }}>{Blog.user_name}</h5>
                    </div>
                </div>
                <h5 className="card-title" style={{ textAlign: "left" }}>{Blog.title}</h5>
            
                <div className="ps-3">
                    <p style={{ textAlign: "left" }}>{Blog.blog_body.slice(0,130)}  ...</p>
                </div>
                <div className="d-flex justify-content-around mt-2  ">
                    <button onClick={() => { handleLikeClick(Blog._id) }} type="button" className="btn btn-primary m-2 mb-0"><img src="./heart.png" alt=""
                        height="24px" />{IsLiked ? '💘' : '💟'} Like</button>
                    {/* <p>{Blog.likes.length} Likes</p> */}
                    <button onClick={() => changeBlog(Blog._id)} type="button" className="btn btn-success m-2 mb-0"><img src="./speech-bubble.png" alt=""
                        height="24px" />Read</button>
                    <button onClick={() => { handleCommentClick(Blog._id) }} type="button" className="btn btn-warning m-2 mb-0"><img src="./speech-bubble.png" alt=""
                        height="24px" /> Comment</button>
                </div>
                <div className="d-flex px-4 justify-content-between">
                    <p>{Likes} Likes</p>
                    <p>{Blog.comments.length} Comments</p>
                </div>
                {ShowComments ?
                    <div>
                        <hr />
                        <h5>Comments</h5>
                        <div className="row p-2">
                            <input className='col-9' id='mycomment' name="mycomment"  type="text" placeholder={`Write Comment as ${User.name}`} />
                            <button onClick={() => {blogComment(Blog._id, User._id, User.name, document.getElementById('mycomment').value)}} className='col-2 ms-1 btn btn-success' style={{ fontSize: "20px" }}>💌</button>
                        </div>

                        {Blog.comments.length !== 0 ?
                            Blog.comments.slice(0).reverse().map((comment) => {
                                return (
                                    <div key={comment._id} className='border'>
                                        <h6 style={{ textAlign: "left" }}>{comment.user_name}</h6>
                                        <p style={{ textAlign: "left" }}>{comment.comment_msg}</p>
                                    </div>
                                )
                            }) : <div>No Comments Yet</div>
                        }
                    </div> : <div></div>

                }
            </div>
        </div>

    )
}

export default BlogItem
