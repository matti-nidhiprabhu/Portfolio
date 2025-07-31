import React from 'react'
import { Navbar, Nav, Container, Image } from 'react-bootstrap'

export default function MyNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="shadow">
      <Container>
        <Navbar.Brand href="#" className="d-flex align-items-center gap-2">
          <div className="profile-img-container">
            <Image
              src="/profile2.jpg" // 👉 make sure the image is in your public folder
              roundedCircle
              width="65"
              height="65"
              alt="Profile"
              className="profile-img"
            />
          </div>
          <span>Matti Nidhi Prabhu</span>
        </Navbar.Brand>

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
