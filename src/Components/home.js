import React from 'react'
import Blogs from './Blogs';
import BlogContent from './BlogContent';

function Home() {
  return (

    <div className="d-flex" style={{ backgroundColor: "rgb(255, 255, 196)" }}>

      <div className='col-md-4 border' style={{ overflowY: "scroll", height: "90vh" }}>
        <Blogs />
      </div>
      <div className='col-md-8  border' style={{ overflowY: "scroll", height: "90vh" }}>
        {/* <BlogContent />
        {console.log("ok")} */}
      </div>
    </div>

  )
}

export default Home
