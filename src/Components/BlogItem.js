import React from 'react'

function BlogItem(props) {
    const { Blog } = props;

    return (
        <div className="card shadow p-3 mb-3 bg-body-tertiary rounded">
            <div className="card-body ">
                <div className="d-flex">
                    <img className="border border-2 rounded-5 m-1" src="./icons8-user-48.png" alt="" />
                    <div>
                        <h5 className="mx-1">{Blog.user_name}</h5>
                        <h6 className="card-subtitle mb-2 text-body-secondary">Software Engineer</h6>
                    </div>
                </div>
                <h5 className="card-title">{Blog.title}</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">Brif Essay about Ecosia</h6>
                <div className="ps-3">
                    <p>{Blog.blog_body}</p>
                </div>
                <div className="d-flex justify-content-around mt-2  ">
                    <button type="button" className="btn btn-primary m-2 mb-0"><img src="./heart.png" alt=""
                        height="24px" /> Like</button>
                    {/* <p>{Blog.likes.length} Likes</p> */}
                    <button type="button" className="btn btn-warning m-2 mb-0"><img src="./speech-bubble.png" alt=""
                        height="24px" /> Comment</button>

                </div>
                <div className="d-flex justify-content-around">
                    <p>{Blog.likes.length} Likes</p>
                    <p>{Blog.comments.length} Comments</p>
                </div>
            </div>
        </div>

    )
}

export default BlogItem
