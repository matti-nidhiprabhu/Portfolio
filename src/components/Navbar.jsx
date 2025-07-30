import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'

export default function MyNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="shadow">
      <Container>
        <Navbar.Brand href="#">Matti Nidhi Prabhu</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ms-auto">
            {['About', 'Projects', 'Skills', 'Experience', 'Achievements'].map((sec) => (
              <Nav.Link key={sec} href={`#${sec.toLowerCase()}`}>{sec}</Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
