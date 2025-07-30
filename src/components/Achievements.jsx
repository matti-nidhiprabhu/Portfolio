import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';

const achievements = [
  {
    title: "🏆 Finalist – Hackfest ‘24 (36-Hour Hackathon by Finite Loop Club)",
    description:
      "Selected as one of the top teams from a highly competitive hackathon focused on solving real-world tech problems under extreme time constraints. It taught me rapid prototyping, clear team communication, and staying calm under pressure."
  },
  {
    title: "📄 Patent Published – Real-Time Gesture-to-Text Conversion System",
    description:
      "Filed and published a hardware-software integrated system designed to convert hand gestures into digital text. This work reflects my passion for assistive tech and my ability to bring practical embedded ideas into structured intellectual property."
  },
  {
    title: "🧠 Research Paper – AI-based Fault Detection (ICICNIS 2024)",
    description:
      "Presented my findings on fault detection in Wireless Sensor Networks using deep learning at a national conference. This experience strengthened my research mindset and ability to simplify complex ideas for academic and technical audiences."
  },
  {
    title: "🌐 IEEE Presentation – SIGNWAVE System at ICDSAAI 2025",
    description:
      "Presented my SIGNWAVE system at an international IEEE conference, gaining recognition from experts in smart systems and AI. The event challenged me to refine my system's architecture and explain it clearly to an interdisciplinary audience."
  }
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-5">
      <Container data-aos="fade-up">
        <h2 className="text-center text-white mb-4">Achievements</h2>
        <p className="text-center text-light mb-5">
          Each milestone below represents not just recognition, but a moment of learning, persistence, and growth.
        </p>
        <Row>
          {achievements.map((item, idx) => (
            <Col md={6} key={idx} className="mb-4" data-aos="fade-up" data-aos-delay={idx * 100}>
              <Card bg="dark" text="light" className="shadow-lg border border-light border-opacity-25 rounded-4">
                <Card.Body>
                  <h5 className="mb-2">{item.title}</h5>
                  <p className="mb-0" style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
                    {item.description}
                  </p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
