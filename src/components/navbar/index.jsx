import React from "react";
import logo from "../../assets/icon.png";
import { Link } from "react-router-dom";
import { Form, Button, Container, InputGroup, Nav, NavDropdown, Navbar } from "react-bootstrap";

const Navbarsatu = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <InputGroup>
                <Form.Control placeholder="Search" aria-label="Search" aria-describedby="basic-addon2" />
                <Button variant="outline-secondary" id="button-addon2">
                  Button
                </Button>
              </InputGroup>
              <Button>
                <img src="" alt="" />
              </Button>
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navbarsatu;
