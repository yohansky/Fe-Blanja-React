import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/icon.png";

const LoginSeller = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setToken("token saya");
    // Simulasi autentikasi, ganti ini dengan logika autentikasi yang sesungguhnya
    // const isAuthenticated = true;
    // if (isAuthenticated) {
    // Simpan token ke local storage
    localStorage.setItem("token", Date.now());
    // Arahkan pengguna ke halaman beranda
    navigate("/home");
    // } else {
    // Handle autentikasi gagal
    // }
  }

  useEffect(() => {
    if (token) {
      navigate("/home");
    }
  }, [token]);

  return (
    <>
      <main id="login">
        <div className="container">
          <img src={logo} alt="logo" />
          <h6 className="text-center py-3">Please Login with your account</h6>
          <ul className="nav nav-pills mt-4 justify-content-center" id="pills-tab" role="tablist">
            <li className="nav-item" role="presentation">
              <Link to="/auth/LoginCustomer">
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
          {/* Seller */}
          <div className="tab-content mt-4" id="pills-tabContent">
            <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
              <form onSubmit={handleSubmit}>
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

                  <button type="submit" className="btn btn-block rounded-pill">
                    <h6 className="login">LOGIN</h6>
                  </button>
                </div>
              </form>
              <h6 className="text-regis">
                Don't have a shop.id account?
                <Link style={{ textDecoration: "none" }} to="/auth/RegisterSeller">
                  Register
                </Link>
              </h6>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default LoginSeller;
