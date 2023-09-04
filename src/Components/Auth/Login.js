import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Login() {

    let navigate = useNavigate();
    const [credentials, setCredentials] = useState({email: "", password: ""})
    const { email,password} = credentials;

    const handleOnClick = async (e) => {
        e.preventDefault();
        const response = await fetch(`http://localhost:3001/auth/login`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password})
        })
        const json = await response.json();

        if (json.success) {
            localStorage.setItem('token', json.authtoken);
            navigate('/profile');
            alert("Sign in successful 🎉");
        }
        else{
            alert("Invalid details Please try with correct.");
        }
    }

    const handleOnChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }

    return (
        <div className="container mt-4" style={{ backgroundColor: "rgb(255, 255, 196)", height: "550px" }}>
            <article className="card-body mx-auto me-auto" style={{ maxWidth: "400px" }}>
                <h3 className="card-title text-center my-1">Welcome Back..🎉</h3>
                <h2 className="card-title mt-3 text-center my-1">Login into website</h2>

                <form className='my-2' >
                    <div className="form-group input-group my-1 mx-1 ">
                        <div className="input-group-prepend mx-1 my-1">
                            <span className="input-group-text border border-warning"> <i className="fa fa-envelope"></i> </span>
                        </div>
                        <input type="email" className="form-control border border-warning" id="email" name="email" onChange={handleOnChange} placeholder="Enter Your Email" aria-describedby="emailHelp" required />
                    </div>
                    <div className="form-group input-group my-1 mx-1">
                        <div className="input-group-prepend mx-1 my-1">
                            <span className="input-group-text border border-warning"> <i className="fa fa-lock"></i> </span>
                        </div>
                        <input type="password" className="form-control border border-warning" name="password" id="password" onChange={handleOnChange} placeholder="Enter Password" required/>
                    </div>
                    <div className="form-group d-flex justify-content-around text-center">
                        <button type="submit" onClick={handleOnClick} className="btn btn-warning">Verify</button>
                    </div>
                    <p className="text-center mt-3">New here ? <Link to='/signup'>sing-up</Link></p>

                </form>
            </article>
        </div>
    )
}

export default Login
