import React from "react";
import logo from "../../assets/icon.png";
import { Link } from "react-router-dom";
import { Form, Button, Container, InputGroup, Nav, NavDropdown, Navbar } from "react-bootstrap";

const Navbarsatu = () => {
  return (
    <>
      {/* Baru */}
      <div class="d-flex justify-content-center" style={{ margin: "0 auto" }}>
        <Navbar expand="lg" className="navbar-custom mb-4">
          <div className="row border" style={{ width: "1000px" }}>
            <Navbar.Brand href="/">
              <img src={logo} alt="Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <div className="d-flex align-items-center">
                  <InputGroup>
                    <Form.Control placeholder="Search" aria-label="Search" aria-describedby="basic-addon2" style={{ width: "300px" }} />
                    <Button variant="outline-secondary" id="button-addon2">
                      B
                    </Button>
                  </InputGroup>
                  <Button variant="outline-secondary" className="mx-3">
                    F
                  </Button>
                  <Nav.Link href="/cart">
                    <img src={require("../../assets/img/cart.png")} alt="cart" />
                  </Nav.Link>
                  <Link to="/auth/LoginSeller">
                    <Button className="btn btn-danger mx-3" type="submit">
                      Login
                    </Button>
                  </Link>
                  <Link to="/auth/RegisterCustomer" className="btn btn-outline-secondary">
                    Signup
                  </Link>
                </div>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </div>

      {/* Lama */}
      {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <div className="d-flex col-sm-12">
         
              <div className="me-auto" style={{ marginLeft: "40px" }}>
                <InputGroup>
                  <Form.Control placeholder="Search" aria-label="Search" aria-describedby="basic-addon2" style={{ width: "407px" }} />
                  <Button variant="outline-secondary" id="button-addon2">
                    Button
                  </Button>
                </InputGroup>
              </div>
              <div style={{ marginLeft: "100px" }}>
                <Nav.Link href="/cart">
                  <img src={require("../../assets/img/cart.png")} alt="cart" />
                </Nav.Link>
              </div>
              <div style={{ marginLeft: "40px" }}>
                <Link to={"/auth/LoginCustomer"}>
                  <Button variant="danger">Login</Button>{" "}
                </Link>
              </div>
              <div style={{ marginLeft: "20px" }}>
                <Link to={"/auth/RegisterCustomer"}>
                  <Button variant="outline-secondary">Signup</Button>{" "}
                </Link>
              </div>

           
            </div>
          </Navbar.Collapse> */}
      {/* </div> */}
    </>
  );
};

export default Navbarsatu;
