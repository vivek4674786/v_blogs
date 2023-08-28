import React, {useContext} from 'react'
import BlogContext from '../Context/Blogs/BlogContext';

function BlogContent() {
    const {Blogs} = useContext(BlogContext);
    console.log(Blogs);
    const BlogItem = Blogs[0];
    console.log('right');
    console.log(BlogItem);

    return (
        <div>
            <p>{BlogItem.title}</p>
        </div>
    )
}

export default BlogContent;
