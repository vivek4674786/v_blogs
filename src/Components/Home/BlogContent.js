import React, { useContext } from 'react'
import BlogContext from '../../Context/Blogs/BlogContext';

function BlogContent(props) {
    const { Blogs } = useContext(BlogContext);
    try {
        let BlogItem = props.FullBlog;
        let dateObj = new Date(BlogItem.date);
        
        return (
                <div className="card shadow m-2 mb-3 bg-body-tertiary rounded">
                    <div className="card-body ">
                        <br />
                        <div className='d-flex justify-content-between'>
                        <h4 className="card-title">{BlogItem.title}</h4> 
                        <p className='text-muted'>{dateObj.getDate()}th {dateObj.toLocaleString('default', { month: 'long' })} {dateObj.getFullYear()}{dateObj.get} {dateObj.getHours()}:{dateObj.getMinutes()}</p>
                        </div>
                        <hr/>
                        <div className="ps-3">
                            <pre style={{textAlign: "left", fontSize: "medium", fontFamily: "inherit", fontStyle: "normal"}}>{BlogItem.blog_body}</pre>
                        </div>
                    </div>
                </div>
        )
    } catch (error) {
        console.log(error);
        return null;
    }
}

export default BlogContent;
