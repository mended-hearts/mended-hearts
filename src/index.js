import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
//import App from './App';
import Home from './components/Home';
import About from './components/About';
import Events from './components/Events';
import Education from './components/Education';
import Recipes from './components/Recipes';
import Messages from './components/Messages';
import Image from 'react-bootstrap/Image';
import logo from './img/MH-heart-only-with-black-R-e1628192215760.png';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const popover = (
  <Popover id="popover-basic">
    <Popover.Body>(847) 924-3641</Popover.Body>
  </Popover>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href={ process.env.REACT_APP_PATH + 'home' }>
          <Image
            alt=""
            src={ logo }
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          The Mended Hearts, Inc. Chapter #337
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href={ process.env.REACT_APP_PATH + 'about' }>About</Nav.Link>
            <NavDropdown title="Resources" id="basic-nav-dropdown">
              <NavDropdown.Item href={ process.env.REACT_APP_PATH + 'messages' }>Messages</NavDropdown.Item>
              <NavDropdown.Item href={ process.env.REACT_APP_PATH + 'education' }>Education</NavDropdown.Item>
              <NavDropdown.Item href={ process.env.REACT_APP_PATH + 'recipes' }>Recipes</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="https://mendedhearts.org/volunteer/" target="_blank">Get Involved</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Button href="mailto:Mendedhearts337@gmail.com" variant="light" style={{width: "60px"}}><FontAwesomeIcon icon={faEnvelope} style={{fontSize: "24"}}/></Button>
            <OverlayTrigger trigger="hover" placement="right" overlay={ popover }>
              <Button href="tel:8479243641" variant="light" style={{width: "60px"}}><FontAwesomeIcon icon={ faPhone } style={{fontSize: "24"}}/></Button>
            </OverlayTrigger>
      </Container>
    </Navbar>
    <Container style={{display: "block"}}>
      <Row style={{height: "calc(100vh - 80px)", margin: "20px"}}>
        <Col xs={9}>
          <BrowserRouter>
            <Routes>
              <Route path={ process.env.REACT_APP_PATH } element={<Home />} />
              <Route path={ process.env.REACT_APP_PATH + 'home' } element={<Home />} />
              <Route path={ process.env.REACT_APP_PATH + 'about' } element={<About />} />
              <Route path={ process.env.REACT_APP_PATH + 'messages' } element={<Messages />} />
              <Route path={ process.env.REACT_APP_PATH + 'education' } element={<Education />} />
              <Route path={ process.env.REACT_APP_PATH + 'recipes' } element={<Recipes />} />
              {/*<Route path={ process.env.REACT_APP_PATH + '*' } element={<Navigate to="/home" />} />*/}
            </Routes>
          </BrowserRouter>
        </Col>
        <Col xs={3}>
          <h4>Upcoming Events</h4>
          <Row>
            <Events />
          </Row>
        </Col>
      </Row>
    </Container>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
