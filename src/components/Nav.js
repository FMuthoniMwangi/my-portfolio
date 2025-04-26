import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import './Nav.css';

function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <Navbar expand="lg" className={scrolled ? 'scrolled' : ''}>
      <Container fluid>
        <Navbar.Brand href="#home">
          <FontAwesomeIcon icon={faCode} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="justify-content-between">
          {/* Left side */}
          <Nav className="left-links">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#Projects">Projects</Nav.Link>
            <Nav.Link href="#Resume">Resume</Nav.Link>
          </Nav>

          {/* Right side */}
          <div className="right-actions">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/faith-mwangi-0268a2255">
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </a>
              <a href="https://github.com/FMuthoniMwangi">
                <FontAwesomeIcon icon={faGithub} size="lg" />
              </a>
            </div>
            <Button className="connect-button" as="a" href="#ContactMe">Let's Connect!</Button>
            <Form className="search-form">
              <Form.Control
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </Form>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}

export default NavBar;