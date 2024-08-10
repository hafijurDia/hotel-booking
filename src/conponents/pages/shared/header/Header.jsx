import React, { useContext } from 'react'
import { Button, Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

function Header() {
  const {name} = useContext(AuthContext);
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Hotel Booking</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link className='text-decoration-none text-secondary' to='/'>Home</Link></Nav.Link>
            <Nav.Link><Link className='text-decoration-none text-secondary' to='/about'>About</Link></Nav.Link>
            <Nav.Link><Link className='text-decoration-none text-secondary' to='/about'>{name}</Link></Nav.Link>

          </Nav>
          <Nav>
            <Link className='text-decoration-none text-secondary mx-2' to='/login'> Login</Link>
            <Link className='text-decoration-none text-secondary' to='/register'> Register</Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
