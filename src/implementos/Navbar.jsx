import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Nav, Navbar, NavDropdown, NavLink } from 'react-bootstrap';
import logo from '../componentes/logo.png'

function NavBar() {
  return (
    <header>
      <Navbar className='navBar' expand="lg">
        <div className="container-fluid">
          <Navbar.Brand>
            <a href="/" target="_blank">
              <img className='logo' src={logo} alt="Logo" />
            </a>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarSupportedContent" />
          <Navbar.Collapse id="navbarSupportedContent">
            <Nav className="me-auto mb-2 mb-lg-0">
              <NavLink href="/inicio"><font color="white">Inicio</font></NavLink>
              <NavLink href="/premium"><font color="white">Premium</font></NavLink>
            </Nav>
            <Button variant='light' href="/registro">Registro</Button>
            <Button variant="dark" href='/login'>Iniciar sesión</Button>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </header>
  );
}
export default NavBar;