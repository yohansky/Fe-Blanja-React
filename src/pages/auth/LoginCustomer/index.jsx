import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/icon.png";
import { Form, Col, Nav, Row, Tab } from "react-bootstrap";

const LoginCustomer = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setToken("token saya");
    localStorage.setItem("token", Date.now());
    navigate("/home");
  }

  useEffect(() => {
    if (token) navigate("/home");
  }, [token]);

  return (
    <>
      <div className="d-flex justify-content-around align-items-center" style={{ paddingTop: "100px" }}>
        <img className="mb-4" src={logo} alt="logo" />
      </div>
      <div style={{ paddingLeft: "550px" }}>
        <h3>Please login with your account</h3>
      </div>
      <div className="d-flex flex-column">
        <Tab.Container defaultActiveKey="first">
          <Row>
            <Col md="auto">
              <Nav variant="pills" className="mb-3 mt-4" style={{ paddingLeft: "660px" }}>
                <Nav.Item>
                  <Nav.Link eventKey="first">Customer</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Seller</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col md={4}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
                      <Form.Control type="email" placeholder="Email" className="mb-4 mt-4" />
                      <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <div>
                      <Link to="/auth/forgot">
                        <h6 className="link float-right py-3 ">Forgot password?</h6>
                      </Link>
                      <Link to="../home">
                        <button type="submit" className="btn btn-block btn-danger rounded-pill">
                          <h6 className="login">LOGIN</h6>
                        </button>
                      </Link>
                    </div>
                  </Form>
                  <h6 className="text-center mt-3">
                    Don't have a shop.id account?
                    <Link style={{ textDecoration: "none" }} to="/auth/RegisterCustomer">
                      Register
                    </Link>
                  </h6>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
                      <Form.Control type="email" placeholder="Email" className="mb-4 mt-4" />
                      <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <div>
                      <Link to="/auth/forgot">
                        <h6 className="link float-right py-3 ">Forgot password?</h6>
                      </Link>
                      <Link to="../home">
                        <button type="submit" className="btn btn-block btn-danger rounded-pill">
                          <h6 className="login">LOGIN</h6>
                        </button>
                      </Link>
                    </div>
                  </Form>
                  <h6 className="text-center mt-3">
                    Don't have a shop.id account?
                    <Link style={{ textDecoration: "none" }} to="/auth/RegisterCustomer">
                      Register
                    </Link>
                  </h6>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>

      {/* <main id="login">
        <div className="container">
          <img src={logo} alt="logo" />
          <h6 className="text-center py-3">Please Login with your account</h6>
          <ul className="nav nav-pills mt-4 justify-content-center" id="pills-tab" role="tablist">
            <li className="nav-item" role="presentation">
              <button className="nav-link active" id="pills-home-tab" data-toggle="pill" data-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">
                Customer
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <Link to="/auth/LoginSeller">
                <button className="nav-link" id="pills-profile-tab" data-toggle="pill" data-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">
                  Seller
                </button>
              </Link>
            </li>
          </ul>
          
          <div className="tab-content mt-4" id="pills-tabContent">
            <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
              <form>
                <div className="form-group">
                  <input className="form-control" placeholder="Email" type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form-group">
                  <input name="password" className="form-control" placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="form-group">
                  <Link to="/auth/forgot">
                    <h6 className="link float-right py-3 ">Forgot password?</h6>
                  </Link>
                  <Link to="../home">
                    <button type="button" className="btn btn-block rounded-pill">
                      <h6 className="login">LOGIN</h6>
                    </button>
                  </Link>
                </div>
              </form>
              <h6 className="text-regis">
                Don't have a shop.id account?
                <Link style={{ textDecoration: "none" }} to="/auth/RegisterCustomer">
                  Register
                </Link>
              </h6>
            </div>
          </div>
        </div>
      </main> */}
    </>
  );
};

export default LoginCustomer;
