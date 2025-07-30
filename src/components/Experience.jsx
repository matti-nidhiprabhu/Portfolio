import React from 'react'
import { Container, Card } from 'react-bootstrap'

export default function Experience() {
  return (
    <section id="experience" className="py-5">
      <Container data-aos="fade-up">
        <h2 className="text-center text-white mb-4">Experience</h2>
        <Card bg="dark" text="white" className="shadow-lg border-light">
          <Card.Body>
            <Card.Title>Machine Learning Research Intern</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">MIT, Manipal – May 2024 to July 2024</Card.Subtitle>
            <ul>
              <li>Designed ML pipelines for fault detection in sensor networks.</li>
              <li>Applied supervised and unsupervised learning for real-time detection.</li>
              <li>Enhanced system robustness through statistical feature analysis.</li>
            </ul>
          </Card.Body>
        </Card>
      </Container>
    </section>
  )
}
