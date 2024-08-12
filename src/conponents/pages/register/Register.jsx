import React, { useContext, useState } from 'react'
import { Container } from 'react-bootstrap'
import { AuthContext } from '../../providers/AuthProvider'
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

export default function Register() {

    const {createUser} = useContext(AuthContext);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [showPassword, setShowPassword] = useState(false);


    const handleRegister = (event) => {
        event.preventDefault();
        setError('');
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;

        if (password !== confirmPassword) {
            setError('Password not matched!');
        }
        else if (password.length < 6) {
            setError('Password must be 6 characters')
        }
        else if (password.search(/[a-z]/i) < 0) {
            setError("Your password must contain at least one letter.");
        }
        else if (password.search(/[0-9]/) < 0) {
            setError("Your password must contain at least one digit."); 
        }
        else{
            console.log(email, password)
            createUser(email, password)
            .then((result) =>{
                const user = result.user;
                console.log(user);
                form.reset();
                setSuccess('User register successful!');
                toast("User register successful!");
    
            })
            .catch((error) => {
                const errorCode = error.code;
                setError(error.message);
                // ..
              });
        }
    }

  return (
    <>
    <Container>
        <div className="w-50 mx-auto shadow p-3 m-5 bg-body-tertiary rounded">
            <form onSubmit={handleRegister}>
                <h4>Register</h4>
                <p className='text-center text-danger fs-5'>{error}</p>
                <p className='text-center text-success fs-5'>{success}</p>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type={showPassword ? 'text' : 'password'} name='password' className="form-control" required />
                    
                    
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Confirm Password</label>
                    <div className='position-relative'>
                    <input type={showPassword ? 'text' : 'password'} name='confirmPassword' className="form-control" required />
                    <span className='position-absolute top-50 end-0 translate-middle-y' onClick={()=> setShowPassword(!showPassword)} style={{cursor: 'pointer'}} >
                        {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                    </span>
                    </div>
                    
                </div>
            
                <button type="submit" className="btn btn-primary">Register</button>
                <p>Already register? Login <Link to="/login">here</Link></p>
            </form>
        </div>

    </Container>
    
</>
  )
}
