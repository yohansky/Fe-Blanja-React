import React from "react";
import NavbarLogin from "../../../components/navbarLogin";
// import "../../../assets/css/stylebaru.css";
import { Dropdown, DropdownButton, Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Seller.module.css";
import SidebarSeller from "../../../components/sidebarSeller";

const Seller = () => {
  return (
    <div>
      <NavbarLogin />
      <main id="">
        <div className="container">
          <div className="row" style={{ marginTop: 30 }}>
            {/* Sidebar */}
            <SidebarSeller />
            {/*  */}
            <div className="border col-7">
              card my profile
              <div style={{ padding: 30, display: "flex", width: "1045px", height: "866px", backgroundColor: "#F5F5F5" }}>
                <div className="card" style={{ backgroundColor: "white", width: "850px", height: "636px" }}>
                  <div style={{ padding: 30 }}>
                    <h5 className="font-weight-bold mb-3">My profile store</h5>
                    <h6 style={{ color: "GrayText" }}>Manage your profile information</h6>
                    <div style={{ width: 800, border: "1px solid" }}></div>
                    <div className="row" style={{ marginTop: 30 }}>
                      <div className="border col-8" style={{ justifyContent: "center", justifyItems: "center" }}>
                        <form style={{ marginTop: 10 }}>
                          <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
                            <Form.Label column sm="3">
                              Store name
                            </Form.Label>
                            <Col sm="8">
                              <Form.Control type="text" placeholder="" />
                            </Col>
                          </Form.Group>
                          <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
                            <Form.Label column sm="3">
                              Email
                            </Form.Label>
                            <Col sm="8">
                              <Form.Control type="text" placeholder="" />
                            </Col>
                          </Form.Group>
                          <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
                            <Form.Label column sm="3">
                              Phone number
                            </Form.Label>
                            <Col sm="8">
                              <Form.Control type="text" placeholder="" />
                            </Col>
                          </Form.Group>
                          <Form.Group as={Row} className="mb-3" controlId="ControlTextarea">
                            <Form.Label column sm="3">
                              Store description
                            </Form.Label>
                            <Col>
                              <Form.Control as="textarea" rows={3} />
                            </Col>
                          </Form.Group>
                        </form>
                        <div style={{ paddingLeft: 100 }}>
                          <button type="button" className="btn btn-danger btn-rounded rounded-pill mt-3 ml-5">
                            <h6>Save</h6>
                          </button>
                        </div>
                      </div>
                      <div className="border col-4">
                        <div className="d-flex justify-content-center mt-4">
                          <img src={require("../../../assets/img/profilesmed.png")} alt="profilesmall" />
                        </div>
                        <div className="d-flex justify-content-center mt-2">
                          <a href="#" className="btn btn-shadow" type="submit">
                            Select image
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Seller;
