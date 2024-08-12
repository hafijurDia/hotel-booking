import React, { useContext, useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import { FaGoogle } from "react-icons/fa";
import { Link, Navigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

export default function Login() {
    const {signIn} = useContext(AuthContext);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
        .then((result) => {
            toast("User login successful!");
            setSuccess("User login successful!");
            form.reset();
            
        })
        .catch((error) => {
            const errorCode = error.code;
            setError(error.message);
            // ..
          });

    }

    return (
        <>
            <Container>
                <div className="w-50 mx-auto shadow p-3 m-5 bg-body-tertiary rounded">
                    <form onSubmit={handleLogin}>
                        <h4>Login</h4>
                        <p className='text-center text-danger fs-5'>{error}</p>
                        <p className='text-center text-success fs-5'>{success}</p>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" name='password' className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className='w-100 text-center mb-3'>
                        <button type="submit" className="btn btn-primary w-100">Login</button>
                        </div>
                        
                    </form>
                    <div className="w-100 mb-3">
                        <button type="button" className="btn btn-warning m-0 w-100"> <FaGoogle /> Login with Google</button>
                  
                        </div>
                        <p>Don't have account? Register <Link to="/register">here</Link></p>
                </div>
                
            </Container>
            

        </>
    )
}
