import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, Button, Nav, Navbar, NavLink } from 'react-bootstrap';
import { Envelope, Lock } from 'react-bootstrap-icons';
import logo from '../componentes/logo.png';
import { Link } from 'react-router-dom';

function Login() {
  const [datos, setDatos] = useState({});

  useEffect(() => {
    fetch('../Registro.json')
      .then(response => response.json())
      .then(data => {
        setDatos(data);
      })
      .catch(error => console.error('Error al cargar los datos del JSON:', error));
  }, []);

  const correoCargado = datos.hasOwnProperty('correo') ? datos.correo : '';

  console.log(correoCargado);

  return (
    <>
      <header>
        <Navbar className='navBar' expand="lg">
          <div className="container-fluid">
            <Navbar.Brand>
              <Link to="/">
                <img className='logo' src={logo} alt="Logo" />
              </Link>
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
      <Container className="d-flex justify-content-center align-items-center vh-100">
        <div className="card p-4">
          <h2 className="card-title text-center mb-4">Login</h2>
          <Form>
            <Form.Group className="mb-3 text-start">
              <Form.Label><Envelope className="me-2" />Email</Form.Label>
              <Form.Control
                type="email"
                placeholder='Correo electrónico'
                value={correoCargado}
                onChange={e => setDatos({ ...datos, correo: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3 text-start">
              <Form.Label><Lock className="me-2" />Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder='Contraseña'
                value={datos.contrasena || ''}
                onChange={e => setDatos({ ...datos, contrasena: e.target.value })}
              />
            </Form.Group>
            <Button variant="primary" type="submit">Enviar</Button>
          </Form>
        </div>
      </Container>
    </>

  );
}

export default Login;
