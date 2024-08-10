import React from 'react'
import { Container } from 'react-bootstrap'

export default function Register() {
  return (
    <>
    <Container>
        <div className="w-50 mx-auto bg-secondary p-5 rounded mt-5">
            <form>
                <h3>Register</h3>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
            
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>

    </Container>

</>
  )
}
