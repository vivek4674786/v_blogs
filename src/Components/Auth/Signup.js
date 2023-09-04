import React, { useState } from 'react'
import { Link,useNavigate } from "react-router-dom";

function Signup() {
    let navigate = useNavigate();
    const [credentials, setCredentials] = useState({ name: "", email: "", profession: "", password: "", cpassword: "" })

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, profession, password, cpassword } = credentials;
        console.log(credentials);
        if (cpassword !== password) {
            alert("please conform password corretly");
        }
        else {
            const response = await fetch(`http://localhost:3001/auth/signup`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, profession, password })
            });
            const json = await response.json();
        
            if (json.success) {
                localStorage.setItem('token', json.authtoken);
                navigate('/profile');
                alert("account created successfully 🎉");
            }
            else{
                alert("Invalid details Please try with correct.");
            }
        }
    }

    const handleOnChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    return (
        <div className="container">
            <article className="card-body mx-auto" style={{ maxWidth: "400px", height: "550px" }}>
                <h2 className="card-title mt-3 text-center my-1">Create Account</h2>
                <p className="text-center">Get started with your free account</p>
                <form className='my-2'>
                    <div className="form-group input-group my-1">
                        <div className="input-group-prepend mx-1 my-1">
                            <span className="input-group-text"> <i className="fa fa-user"></i> </span>
                        </div>
                        <input type="text" className="form-control" id="name" name="name" onChange={handleOnChange} aria-describedby="emailHelp" placeholder="Enter Your Name" required />
                    </div>
                    <div className="form-group input-group my-1">
                        <div className="input-group-prepend mx-1 my-1">
                            <span className="input-group-text"> <i className="fa fa-envelope"></i> </span>
                        </div>
                        <input type="email" className="form-control" id="email" name="email" onChange={handleOnChange} aria-describedby="emailHelp" placeholder="Enter Your Email" required />
                    </div>
                    <div className="form-group input-group my-1">
                        <div className="input-group-prepend mx-1 my-1">
                            <span className="input-group-text"> <i className="fa fa-user"></i> </span>
                        </div>
                        <input type="text" className="form-control" id="profession" name="profession" onChange={handleOnChange} placeholder="Enter Your Profession" required />
                    </div>

                    <div className="form-group input-group my-1">
                        <div className="input-group-prepend mx-1 my-1">
                            <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
                        </div>
                        <input type="password" className="form-control" id="password" name="password" onChange={handleOnChange} minLength={5} placeholder="Enter Password" required />
                    </div>
                    <div className="form-group  input-group my-1">
                        <div className="input-group-prepend mx-1 my-1">
                            <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
                        </div>
                        <input type="password" className="form-control" id="cpassword" name="cpassword" onChange={handleOnChange} minLength={5} placeholder="Repeat Password" required />
                    </div>
                    <div className="form-group text-center">
                        <button type="submit" onClick={handleSubmit} className="btn btn-outline-light me-3 btn-success"> Create Account  </button>
                    </div>
                    <p className="text-center">Have an account? <Link to="/login">Log In</Link> </p>
                </form>
            </article>
        </div>
    )
}

export default Signup
