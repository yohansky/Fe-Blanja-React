import React from "react";
import logo from "../../../assets/icon.png";
import "../../../assets/css/style.css";
import { Link } from "react-router-dom";

const RegisterSeller = () => {
  return (
    <>
      <main id="register">
        <div className="container">
          <div className="form-header">
            <div className="img-container">
              <img src={logo} alt="Logo" />
            </div>
            <p className="info">Please sign up with your account</p>
            <ul className="nav nav-pills mt-4 justify-content-center" id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <Link to="/auth/RegisterCustomer">
                  <button className="nav-link" id="pills-home-tab" data-toggle="pill" data-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="false">
                    Customer
                  </button>
                </Link>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link active" id="pills-profile-tab" data-toggle="pill" data-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="true">
                  Seller
                </button>
              </li>
            </ul>
            <form className="form-section">
              <div className="form-main">
                <input type="name" placeholder="Name" name="uname" required />
              </div>
              <div className="form-main">
                <input type="email" placeholder="Email" name="uname" required />
              </div>
              <div className="form-main">
                <input type="phone" placeholder="Phone number" name="uname" required />
              </div>
              <div className="form-main">
                <input type="store" placeholder="Store name" name="uname" required />
              </div>
              <div className="form-main">
                <input type="password" placeholder="Password" name="psw" required />
              </div>
            </form>

            <Link to="/auth/LoginSeller">
              <button type="button" className="btn btn-block rounded-pill">
                PRIMARY
              </button>
            </Link>
            <p className="register">
              Already have a Tokopedia account? <a href="logins.html">Login</a>
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default RegisterSeller;
