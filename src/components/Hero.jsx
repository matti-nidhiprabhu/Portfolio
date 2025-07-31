import React from 'react'
import { Container, Card, Button } from 'react-bootstrap'
import 'aos/dist/aos.css'
import AOS from 'aos'

AOS.init()

export default function Hero() {
  return (
    <section id="hero" className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      <Container data-aos="fade-up">
        <Card
          bg="secondary"
          text="white"
          className="text-center shadow-lg border-0 p-4 mx-auto"
          style={{ maxWidth: '500px' }}
        >
          <Card.Img
            variant="top"
            src="\public\profile.png"
            className="mx-auto d-block rounded"
            style={{
              width: '100%',
              maxWidth: '800px',
              height: 'auto',
              objectFit: 'cover',
              transition: 'transform 0.3s ease',
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1.0)')}
          />
          <Card.Body>
            <Card.Title className="fs-2 fw-bold mt-3">Hi, I'm Matti Nidhi Prabhu</Card.Title>
            <Card.Text className="fs-5 mb-4">
              A passionate engineering student and aspiring software developer.
            </Card.Text>
            <Button variant="outline-light" href="/resume.pdf" download className="px-4 py-2">
              Download Resume
            </Button>
          </Card.Body>
        </Card>
      </Container>
    </section>
  )
}
