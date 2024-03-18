import React, { useState } from "react";
import logo from "../../assets/icon.png";
import "../../assets/css/style.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const NavbarLogin = () => {
  const [queryParam, setQueryParam] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setQueryParam(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?query=${queryParam}`);
  };

  function handleLogout() {
    localStorage.removeItem("token");
    window.location.reload();
  }
  return (
    <>
      <header id="">
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <a className="navbar-brand" href="/home">
              <img src={logo} alt="Brand" />
            </a>
            <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="navbar-collapse collapse" id="navbarsExample07">
              <div className="d-flex flex-row">
                {/* search */}
                <form onSubmit={handleFormSubmit}>
                  <div className="input-group">
                    <input type="text" className="form-control search-form py-2 border-right-0" value={queryParam} onChange={handleInputChange} placeholder="Search" />
                    <span className="input-group-append">
                      <div className="input-group-text search-btn bg-white">
                        <svg type="submit" width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z" />
                          <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />
                        </svg>
                      </div>
                    </span>
                  </div>
                </form>
                {/* search */}
                <div className="filter">
                  <a href="#" className="btn filter-btn">
                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-funnel" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path
                        fill-rule="evenodd"
                        d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2h-11z"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="d-flex flex-row justify-content-end align-items-center">
                <div className="cart">
                  <Link to={"../cart"}>
                    <a className="btn cart-btn">
                      <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-cart2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fill-rule="evenodd"
                          d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"
                        />
                      </svg>
                    </a>
                  </Link>
                </div>
                <div className="bell">
                  <a href="#" className="btn bell-btn">
                    <img src={require("../../assets/img/bell.png")} alt="notifikasi" />
                  </a>
                </div>
                <div className="inbox">
                  <a href="#" className="btn inbox-btn">
                    <img src={require("../../assets/img/mail.png")} alt="" />
                  </a>
                </div>

                <div className="miniprofile">
                  <Link to={"../profile/seller"}>
                    <a className="btn">
                      <img src={require("../../assets/img/profilesmall.png")} alt="" />
                    </a>
                  </Link>
                </div>

                <div className="miniprofile">
                  <button onClick={handleLogout}>Logout</button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* <header id="navbarLogin">

        <nav className="navbar fixed-top navbar-expand-lg p-3">
          <div className="container d-flex align-items-center">
            <Link to={"/home"} style={{ color: "inherit", textDecoration: "none" }}>
              <img className="logo-shopid" src={logo} alt="logo" />
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon col-md-4" />
            </button>
            <div className="collapse navbar-collapse " id="navbarTogglerDemo02">
              <div>
                <ul className="navbar-nav search-container">
                  <li className="nav-item">
                    <input className="form-control search" placeholder="Search" aria-label="Search" value={search} onChange={(e) => setSearch(e.target.value)} />
                  </li>
                </ul>
                <SearchResult data={data} />
              </div>
              <i className="bi bi-search iconSearch" />
              <i className="filter bi bi-funnel" />
              <form className="wrap">
                <Link to={`/cart/${usersId}`} style={{ color: "inherit", textDecoration: "none" }}>
                  <i className="cart bi bi-cart" />
                </Link>
                <Link style={{ color: "inherit", textDecoration: "none" }}>
                  <i className="bell bi bi-bell " />
                </Link>
                <Link style={{ color: "inherit", textDecoration: "none" }}>
                  <i className="massage bi bi-envelope-heart" />
                </Link>
                <Link to={`/profile/${usersId}`} style={{ color: "inherit", textDecoration: "none" }}>
                  <i className="profile bi bi-person-circle" />
                </Link>
              </form>
            </div>
          </div>
        </nav>
      </header> */}
    </>
  );
};

export default NavbarLogin;
