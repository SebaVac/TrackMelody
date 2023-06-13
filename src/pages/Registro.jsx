import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, Button, FormGroup, FormCheck,Nav, Navbar, NavLink, } from 'react-bootstrap';
import { Envelope, Person, Lock } from 'react-bootstrap-icons';
import axios from 'axios';
import { Link } from 'react-router-dom';
import logo from '../componentes/logo.png';

function Registro() {
  const [registroData, setRegistroData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    contrasena: '',
    terminos: false
  })

  const [errors, setErrors] = useState({});

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    const inputValue = type === 'checkbox' ? checked : value;
    setRegistroData((prevState) => ({
      ...prevState,
      [name]: inputValue
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await axios.post('http://localhost:3000/api/registro', registroData); // Se cambia la URL a una ruta relativa
        if (response.status === 200 || response.status === 201) {
          setRegistroData({
            nombre: '',
            apellido: '',
            email: '',
            contrasena: '',
            terminos: false
          });
          alert('Datos han sido guardados correctamente.');
        } else {
          console.error('Error al enviar los datos del formulario:', response);
        }
      } catch (error) {
        console.error('Error al enviar los datos del formulario:', error);
      }
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = () => {
    let errors = {};

    if (!registroData.nombre) {
      errors.nombre = 'Debe ingresar un nombre';
    }

    if (!registroData.apellido) {
      errors.apellido = 'Debe ingresar un apellido';
    }

    if (!registroData.email) {
      errors.email = 'Debe ingresar un correo electrónico';
    } else if (!correoValido(registroData.email)) {
      errors.email = 'Debe ingresar un correo electrónico válido';
    }

    if (!registroData.contrasena) {
      errors.contrasena = 'Debe ingresar una contraseña';
    } else if (!numero(registroData.contrasena)) {
      errors.contrasena = 'La contraseña debe contener al menos un número';
    } else if (!letra(registroData.contrasena)) {
      errors.contrasena = 'La contraseña debe contener al menos una letra';
    }

    if (!registroData.terminos) {
      errors.terminos = 'Debe aceptar los términos y condiciones';
    }

    return errors;
  };

  const correoValido = (email) => {
    const emailRegex = /^[\w-]+(\.[\w-]+)*@[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)*(\.[a-zA-Z]{2,})$/;
    return emailRegex.test(email);
  };

  const numero = (text) => {
    const numberRegex = /\d/;
    return numberRegex.test(text);
  };

  const letra = (text) => {
    const letterRegex = /[a-zA-Z]/;
    return letterRegex.test(text);
  };

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
          <h2 className="card-title text-center mb-4">Registrarse Gratis</h2>
          <Form id="formulario" name="formulario" onSubmit={handleSubmit}>
            <Form.Group className="mb-3 text-start">
              <Form.Label>
                <Person className="me-2" />
                Nombre
              </Form.Label>
              <Form.Control
                id="nombre"
                name="nombre"
                type="text"
                placeholder="Ingrese su nombre"
                value={registroData.nombre}
                onChange={handleInputChange}
                isInvalid={!!errors.nombre}
              />
              {errors.nombre && (
                <Form.Control.Feedback type="invalid">{errors.nombre}</Form.Control.Feedback>
              )}
            </Form.Group>
            <Form.Group className="mb-3 text-start">
              <Form.Label>
                <Person className="me-2" />
                Apellido
              </Form.Label>
              <Form.Control
                id="apellido"
                name="apellido"
                type="text"
                placeholder="Ingrese su apellido"
                value={registroData.apellido}
                onChange={handleInputChange}
                isInvalid={!!errors.apellido}
              />
              {errors.apellido && (
                <Form.Control.Feedback type="invalid">{errors.apellido}</Form.Control.Feedback>
              )}
            </Form.Group>
            <Form.Group className="mb-3 text-start">
              <Form.Label>
                <Envelope className="me-2" />
                Email
              </Form.Label>
              <Form.Control
                id="email"
                name="email"
                type="email"
                placeholder="Ingrese su correo"
                value={registroData.email}
                onChange={handleInputChange}
                isInvalid={!!errors.email}
              />
              {errors.email && (
                <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
              )}
            </Form.Group>
            <Form.Group className="mb-3 text-start">
              <Form.Label>
                <Lock className="me-2" />
                Contraseña
              </Form.Label>
              <Form.Control
                id="contrasena"
                name="contrasena"
                type="password"
                placeholder="Ingrese su contraseña"
                value={registroData.contrasena}
                onChange={handleInputChange}
                isInvalid={!!errors.contrasena}
              />
              {errors.contrasena && (
                <Form.Control.Feedback type="invalid">{errors.contrasena}</Form.Control.Feedback>
              )}
            </Form.Group>
            <FormGroup>
              <FormCheck
                id="terminos"
                name="terminos"
                label={
                  <span>
                    He leído los <a href="/registro">Términos y Condiciones</a>
                  </span>
                }
                checked={registroData.terminos}
                onChange={handleInputChange}
                isInvalid={!!errors.terminos}
              />
              {errors.terminos && (
                <Form.Control.Feedback type="invalid">{errors.terminos}</Form.Control.Feedback>
              )}
            </FormGroup>
            <Button variant="primary" type="submit" onClick={handleSubmit}>
              Registrarse
            </Button>
          </Form>
        </div>
      </Container>
    </>
  );
}

export default Registro;