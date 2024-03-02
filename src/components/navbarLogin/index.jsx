import React from "react";
import logo from "../../assets/icon.png";
import "../../assets/css/style.css";
import axios from "axios";

const NavbarLogin = () => {
  return (
    <>
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
