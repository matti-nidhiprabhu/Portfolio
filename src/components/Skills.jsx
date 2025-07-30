import React from 'react'
import { Container, Card, ProgressBar, Row, Col, Badge } from 'react-bootstrap'

const skills = [
  { name: 'Python', level: 90 },
  { name: 'C++', level: 85 },
  { name: 'Java', level: 80 },
  { name: 'JavaScript', level: 75 },
  { name: 'C#', level: 70 },
  { name: 'SQL', level: 70 },
]

const softSkills = ['Teamwork', 'Communication', 'Quick Learner', 'Adaptability']

export default function Skills() {
  return (
    <section id="skills" className="py-5">
      <Container data-aos="fade-up">
        <h2 className="text-center text-white mb-4">Skills</h2>
        <Card bg="dark" text="white" className="p-4 shadow-lg border-light">
          <Row>
            <Col md={6}>
              <h5>Technical Skills</h5>
              {skills.map((skill, idx) => (
                <div className="mb-3" key={idx}>
                  <strong>{skill.name}</strong>
                  <ProgressBar now={skill.level} label={`${skill.level}%`} variant="info" />
                </div>
              ))}
            </Col>
            <Col md={6}>
              <h5>Professional Skills</h5>
              {softSkills.map((s, idx) => (
                <Badge key={idx} bg="secondary" className="me-2 mb-2 p-2">
                  {s}
                </Badge>
              ))}
            </Col>
          </Row>
        </Card>
      </Container>
    </section>
  )
}
