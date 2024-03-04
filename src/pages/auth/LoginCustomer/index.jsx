import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../../assets/css/stylebaru.css";
import logo from "../../../assets/icon.png";

const LoginCustomer = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <main id="login">
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
          {/* Seller */}
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
            {/* customer */}
            {/* <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
              <form>
                <div className="form-group">
                  <input name="email" className="form-control" placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
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
                <Link style={{ textDecoration: "none" }} to="/auth/register">
                  Register
                </Link>
              </h6>
            </div> */}
          </div>
        </div>
      </main>
    </div>
  );
};

export default LoginCustomer;
