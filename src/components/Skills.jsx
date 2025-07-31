import React from 'react'
import { Container, Card, ProgressBar, Row, Col, Badge } from 'react-bootstrap'

const skills = [
  { name: 'Python', level: 90 },
  { name: 'C++', level: 85 },
  { name: 'Java', level: 80 },
  { name: 'JavaScript', level: 75 },
  { name: 'C#', level: 70 },
  { name: 'SQL', level: 70 },
  { name: 'HTML/CSS', level: 80 },
  { name: 'Streamlit', level: 75 },
  { name: 'Arduino', level: 80 },
  { name: 'NS-3 Network Simulator', level: 65 },
  { name: 'Machine Learning (Scikit-Learn)', level: 75 },
  { name: 'Deep Learning (TensorFlow/Keras)', level: 70 },
]

const softSkills = [
  'Teamwork',
  'Communication',
  'Quick Learner',
  'Adaptability',
  'Problem Solving',
  'Analytical Thinking',
  'Time Management',
  'Attention to Detail',
  'Punctuality'
]

const certifications = [
  'Scaler Academy - Data Structures & Algorithms in C++',
  'Coursera - HTML, CSS, JavaScript for Web Developers (Johns Hopkins University)',
  'Adverk - Cyber Security & Ethical Hacking Internship (Jan–Feb 2023)',
  'Adverk - Cyber Security & Ethical Hacking Course Completion (Mar 2023)',
  'NPTEL - Advanced Computer Networks (Elite + Silver, Top 5%)'
]

const languages = ['English', 'Hindi', 'Kannada', 'Konkani','Basic Japanese']

export default function Skills() {
  return (
    <section id="skills" className="py-5">
      <Container data-aos="fade-up">
        <h2 className="text-center text-white mb-4">Skills & Certifications</h2>
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
              <hr className="text-light my-3" />
              <h5>Languages Known</h5>
              {languages.map((lang, idx) => (
                <Badge key={idx} bg="info" className="me-2 mb-2 p-2">
                  {lang}
                </Badge>
              ))}
              <h5 className="mt-4">Tools & Technologies</h5>
            <ul>
              <li>VS Code, Visual Studio 2022, Anaconda Navigator, Jupyter Notebook</li>
              <li>Git, GitHub</li>
              <li>Arduino IDE</li>
              <li>Overleaf, LaTeX, BibTeX</li>
              <li>SQLite DB Browser</li>
              <li>React.js, Bootstrap, React-Bootstrap</li>
              <li>Canva</li>
              <li>NetAnim, NS-3 Network Simulator</li>
              <li>Linux Terminal</li>
              <li>Google Colab, Kaggle Notebooks</li>
            </ul>
            </Col>
          </Row>
          <hr className="text-light my-4" />
          <Row>
            <Col>
              <h5>Certifications</h5>
              <ul>
                {certifications.map((cert, idx) => (
                  <li key={idx} className="mb-2">{cert}</li>
                ))}
              </ul>
            </Col>
          </Row>
        </Card>
      </Container>
    </section>
  )
}
