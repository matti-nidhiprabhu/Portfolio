import React from 'react';
import { Container, Card } from 'react-bootstrap';

export default function About() {
  return (
    <section id="about" className="py-5">
      <Container data-aos="fade-up" data-aos-duration="1000">
        <Card bg="dark" text="white" className="p-4 shadow-lg border-light border-1 rounded-4">
          <Card.Body>
            <Card.Title className="fs-2 mb-3">About Me</Card.Title>
            <Card.Text className="fs-6" style={{ lineHeight: '1.8' }}>
              Hello! I'm someone who enjoys diving deep into how things work. I value simplicity, precision, and speed — not just in code, but in life. I take pride in picking up new technologies quickly, understanding them deeply, and applying them effectively.
              <br /><br />
              I’m currently pursuing my B.Tech in Computer and Communication Engineering at NMAMIT with a CGPA of 9.42. Beyond academics, I enjoy solving problems with a hands-on approach, experimenting with hardware/software integrations, and finding joy in creative technical work.
              <br /><br />
              I'm often described as focused, adaptable, and quietly determined. I like to keep learning without making noise, and I believe consistency beats hype. Whether it's debugging something late at night or learning a new tool just for the challenge, I find meaning in small progress every day.
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </section>
  );
}
