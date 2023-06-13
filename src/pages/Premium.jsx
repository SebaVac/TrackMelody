import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Nav, Navbar, NavLink, Card } from 'react-bootstrap';
import '../App.css';
import logo from '../componentes/logo.png';
import { Link } from 'react-router-dom';

function Premium() {
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
            <div className='Premium flex'>
                <p style={{ textAlign: 'center', fontSize: '4em', color: 'white' }}>
                    <span className=" d-sm-block">Aburrido de ver anuncios?</span>
                </p>
                <div>
                    <ul>
                        <p style={{ color: 'white' }}>No esperes más y mejora tu cuenta a premium por tan solo $3.99 al mes</p>
                    </ul>
                </div>
                <Card className='premiumCard'>
                    <Card.Header style={{ fontSize: '3em', background: '#AB10F4', color: 'white' }}>Beneficios de tener premium</Card.Header>
                    <Card.Body>
                        <Card.Text>No más anuncios</Card.Text>
                        <Card.Text>Música sin interrupciones</Card.Text>
                        <Card.Text>Saltar canciones que no te gusten</Card.Text>
                        <Card.Text>Descarga tus canciones para escucharlas offline</Card.Text>
                        <Button variant='light' href="#">$3.990</Button>
                    </Card.Body>
                </Card>

            </div>
        </>



    );
}

export default Premium;

