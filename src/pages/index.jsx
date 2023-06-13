import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import listening from '../componentes/listening.png';
import '../App.css';
import { Button, Nav, Navbar, NavLink, Card } from 'react-bootstrap';
import logo from '../componentes/logo.png';
import { Link } from 'react-router-dom';

function Index() {
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
      <section className="welcome">
        <p style={{ textAlign: 'center', fontSize: '5rem' }}>
          <span className="badge bg-mine">Track Melody</span>
        </p>
        <img class="rounded-circle" src={listening} />
      </section>
      <div className="d-flex margenCard">
        <Card className="text-bg-light mb-3 premiumCard" style={{ maxWidth: '18rem' }}>
          <Card.Header style={{ fontSize: '1.8rem' }}>¿Por qué hay anuncios?</Card.Header>
          <Card.Body>
            <Card.Title>Para ayudar a familias y niños</Card.Title>
            <Card.Text>
              El 30% de nuestras ganancias obtenidas de los anuncios van dirigidas a organizaciones benéficas.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="text-bg-light mb-3 premiumCard" style={{ maxWidth: '18rem' }}>
          <Card.Header style={{ fontSize: '1.8rem' }}>¿Quieres ayudar a niños y niñas?</Card.Header>
          <Card.Body>
            <Card.Title>Escucha música con nosotros</Card.Title>
            <Card.Text>
              Con la cuenta gratuita y premium estás aportando tu granito de arena a muchos niños y niñas, ya que donamos el 30% de ganancias a organizaciones benéficas.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="text-bg-light mb-3 premiumCard" style={{ maxWidth: '18rem' }}>
          <Card.Header style={{ fontSize: '1.8rem' }}>¿Quieres ayudar a la causa pero no quieres anuncios?</Card.Header>
          <Card.Body>
            <Card.Title>Así es, puedes ayudar con un plan</Card.Title>
            <Card.Text>
              Contrata la suscripción premium y elimina los anuncios, también conseguirás funcionalidades extras.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default Index;