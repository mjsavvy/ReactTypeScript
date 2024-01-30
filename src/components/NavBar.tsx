import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import'../styles/NavBar.css';

const BasicExample = () => {
  const currentPath = window.location.pathname;

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container className="container">
        <Navbar.Brand href="/">Trainee 6 - Gapasin.</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" className={currentPath === '/' ? 'active' : ''}>
              Home
            </Nav.Link>
            <Nav.Link href="/calc" className={currentPath === '/calc' ? 'active' : ''}>
              Calculator
            </Nav.Link>
            <Nav.Link href="/hobbies" className={currentPath === '/hobbies' ? 'active' : ''}>
              Hobbies
            </Nav.Link>
            <Nav.Link href="/json" className={currentPath === '/json' ? 'active' : ''}>
              JSON
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default BasicExample;
