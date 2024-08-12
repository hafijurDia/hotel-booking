import React, { useContext } from 'react'
import { Button, Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function Header() {
  const {user, loading, logout} = useContext(AuthContext);

  const handleLogout = () => {
    logout()
    .then(result => {
      toast("User logout successful!");
    })

  }

if (loading) {
  return (
    <div
    style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      zIndex: 1000,
    }}
  >
    <div style={{ textAlign: 'center', fontSize: '1.5rem', color: '#000' }}>
      Loading...
    </div>
  </div>
  )
}
  return (
    <>
    <ToastContainer />
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand><Link className='text-decoration-none text-black' to="/">Hotel Booking</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link className='text-decoration-none text-secondary' to='/'>Home</Link></Nav.Link>
            <Nav.Link><Link className='text-decoration-none text-secondary' to='/about'>About</Link></Nav.Link>
            

          </Nav>
          <Nav>
            {
              user ? <><p className='text-secondary mx-2 my-0'>{user.email}</p> <button onClick={handleLogout}  className='border border-1 bg-transparent text-secondary'>Logout</button></>  : <><Link className='text-decoration-none text-secondary mx-2' to='/login'> Login</Link>
            <Link className='text-decoration-none text-secondary' to='/register'> Register</Link></>
            }
            
            
            
          </Nav>
        </Navbar.Collapse>
      </Container>
      
    </Navbar>
    </>
    
    
  )
}

export default Header
