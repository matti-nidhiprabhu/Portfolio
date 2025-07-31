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
            <Card.Subtitle className="mb-2 fw-light" style={{ color: '#bbbbbb' }}>
  MIT, Manipal – May 2024 to July 2024
</Card.Subtitle>

            <ul>
              <li>Built and optimized end-to-end machine learning pipelines for fault detection in Wireless Sensor Networks (WSNs), significantly improving detection precision across real-time data streams.</li>
              <li>Applied advanced supervised (Random Forest, XGBoost) and unsupervised (KMeans, Isolation Forest) models to identify anomalous sensor behavior with high accuracy.</li>
              <li>Performed statistical feature engineering on raw sensor data (temperature, humidity, voltage) to extract meaningful insights and improve model generalization.</li>
              <li>Developed a visual dashboard using Python and Matplotlib/Seaborn for dynamic performance monitoring, classification breakdowns, and sensor-specific fault mapping.</li>
              <li>Collaborated with faculty and peer researchers, contributed to drafting a conference paper focusing on ensemble ML techniques for edge-based fault classification.</li>
            </ul>
          </Card.Body>
        </Card>
      </Container>
    </section>
  )
}
