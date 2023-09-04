import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {

  let location = useLocation();

  return (
    <div>
      <nav className="navbar navbar-expand-lg" style={{backgroundColor: "rgb(255,191,0)"}}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">V-Blogs</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === '/' ? "active" : ""} aria-current="page"`} to='/' >Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/about'>About</Link>
              </li>
            </ul>
            {!localStorage.getItem('token') ? <form className="d-flex">
            <Link className="nav-link" to='/login'><button type="button" className="btn btn-primary">Login</button></Link>
          </form> : <form className="d-flex">
            
            <Link to="/profile" ><button className='btn btn-info'>Profile</button></Link>
            {/* <Link className='btn btn-outline-dark mx-1 btn-light' to="/profile" role="button">Profile</Link>*/}</form>
          }
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
