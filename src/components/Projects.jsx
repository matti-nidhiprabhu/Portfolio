import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';

const projects = [
  {
    title: "WSN Fault Detection System",
    tech: "Python, Streamlit, TensorFlow, PyQt5",
    desc: "A real-time monitoring dashboard that detects node-level faults in Wireless Sensor Networks using machine learning and ensemble deep learning models. Features include live accuracy metrics, node map visualization, and automated alerting."
  },
  {
    title: "SIGNWAVE Gesture-to-Text",
    tech: "Arduino, C/C++, Flex Sensors, LCD I2C",
    desc: "A wearable communication aid that translates hand gestures into text, designed to support individuals with speech or hearing impairments. This project blends embedded sensing with real-world usability."
  },

  {
    title: "Employee Management System",
    tech: "C#, SQL Server, WinForms",
    desc: "Developed a feature-rich HR app with CRUD operations, attendance tracking, and salary slip generation. Highlights desktop app proficiency and backend integration for enterprise-like use cases."
  },
  {
    title: "Vulnerability Scanner (VulnScan)",
    tech: "C++ (MFC), WinAPI, GUI",
    desc: "Created a Windows-based security tool to scan specified IP addresses for open ports and service flags. Introduced networking and security fundamentals through hands-on tool development with GUI."
  },
  {
    title: "NamasteSwaad Recipe Explorer App",
    tech: "Android (Java), SQLite, RecyclerView",
    desc: "An intuitive mobile application that displays categorized recipes with images and ingredient details. Built with RecyclerView for performance, and SQLite for offline access. Focused on clean layout design, data persistence, and real-time UI updates. Debugged adapter and database integration to ensure seamless recipe rendering."
  }
];


export default function Projects() {
  return (
    <section id="projects" className="py-5">
      <Container data-aos="fade-up">
        <h2 className="text-center text-white mb-4">Projects</h2>
        <p className="text-center text-light mb-5">
          I enjoy building things that combine software intelligence with real-world interaction — whether through sensors, data, or user-focused interfaces.
        </p>
        <Row>
          {projects.map((proj, i) => (
            <Col md={6} key={i} className="mb-4" data-aos="fade-up" data-aos-delay={i * 100}>
              <Card bg="dark" text="light" className="shadow border border-light h-100 rounded-4">
                <Card.Body>
                  <Card.Title className="fs-5">{proj.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{proj.tech}</Card.Subtitle>
                  <Card.Text style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
                    {proj.desc}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
