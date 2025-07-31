import React from 'react'
import { Container } from 'react-bootstrap'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-4">
      <Container>
        <p className="mb-2">
  <a href="mailto:mattinidhiprabhu@gmail.com" className="text-white text-decoration-none">
   mattinidhiprabhu@gmail.com
  </a>
</p>

        <p className="mb-2">© 2025 Nidhi Prabhu</p>
        <a href="https://github.com/matti-nidhi-prabhu" target="_blank" rel="noopener noreferrer" className="text-white me-3">
          <FaGithub size={28} />
        </a>
        <a href="https://linkedin.com/in/matti-nidhi-prabhu" target="_blank" rel="noopener noreferrer" className="text-white">
          <FaLinkedin size={28} />
        </a>
      </Container>
    </footer>
  )
}
