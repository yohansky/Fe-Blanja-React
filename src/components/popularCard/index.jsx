import React from "react";
import { Link } from "react-router-dom";
import "./stylepop.css";

const PopularCard = () => {
  return (
    <>
      <section id="popular">
        <div className="container">
          <h2 className="text">Popular</h2>
          <p className="text-muted">Find clothes that are trending recently</p>
        </div>
        <div className="container">
          <div className="row d-flex flex-row flex-wrap justify-content-around">
            {/* Row 1 */}
            <div className="col">
              <div className="card rounded">
                <img src={require("../../assets/img/gez-xavier.png")} alt="Suit" className="card-img-top img-fluid" />
                <div className="card-body">
                  <h5 className="card-title">Men's formal suit - Black & White</h5>
                  <h5 className="price">$ 40.0</h5>
                  <p className="text-muted">Zalora Cloth</p>
                  <img className="img-fluid" src={require("../../assets/img/stars.png")} alt="Rating" />
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card rounded">
                <img src={require("../../assets/img/gez-xavier.png")} alt="Suit" className="card-img-top img-fluid" />
                <div className="card-body">
                  <h5 className="card-title">Men's formal suit - Black & White</h5>
                  <h5 className="price">$ 40.0</h5>
                  <p className="text-muted">Zalora Cloth</p>
                  <img className="img-fluid" src={require("../../assets/img/stars.png")} alt="Rating" />
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card rounded">
                <img src={require("../../assets/img/gez-xavier.png")} alt="Suit" className="card-img-top img-fluid" />
                <div className="card-body">
                  <h5 className="card-title">Men's formal suit - Black & White</h5>
                  <h5 className="price">$ 40.0</h5>
                  <p className="text-muted">Zalora Cloth</p>
                  <img className="img-fluid" src={require("../../assets/img/stars.png")} alt="Rating" />
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card rounded">
                <img src={require("../../assets/img/gez-xavier.png")} alt="Suit" className="card-img-top img-fluid" />
                <div className="card-body">
                  <h5 className="card-title">Men's formal suit - Black & White</h5>
                  <h5 className="price">$ 40.0</h5>
                  <p className="text-muted">Zalora Cloth</p>
                  <img className="img-fluid" src={require("../../assets/img/stars.png")} alt="Rating" />
                </div>
              </div>
            </div>
            {/* row 2 */}
            <div className="col">
              <div className="card rounded">
                <img src={require("../../assets/img/gez-xavier.png")} alt="Suit" className="card-img-top img-fluid" />
                <div className="card-body">
                  <h5 className="card-title">Men's formal suit - Black & White</h5>
                  <h5 className="price">$ 40.0</h5>
                  <p className="text-muted">Zalora Cloth</p>
                  <img className="img-fluid" src={require("../../assets/img/stars.png")} alt="Rating" />
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card rounded">
                <img src={require("../../assets/img/gez-xavier.png")} alt="Suit" className="card-img-top img-fluid" />
                <div className="card-body">
                  <h5 className="card-title">Men's formal suit - Black & White</h5>
                  <h5 className="price">$ 40.0</h5>
                  <p className="text-muted">Zalora Cloth</p>
                  <img className="img-fluid" src={require("../../assets/img/stars.png")} alt="Rating" />
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card rounded">
                <img src={require("../../assets/img/gez-xavier.png")} alt="Suit" className="card-img-top img-fluid" />
                <div className="card-body">
                  <h5 className="card-title">Men's formal suit - Black & White</h5>
                  <h5 className="price">$ 40.0</h5>
                  <p className="text-muted">Zalora Cloth</p>
                  <img className="img-fluid" src={require("../../assets/img/stars.png")} alt="Rating" />
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card rounded">
                <img src={require("../../assets/img/gez-xavier.png")} alt="Suit" className="card-img-top img-fluid" />
                <div className="card-body">
                  <h5 className="card-title">Men's formal suit - Black & White</h5>
                  <h5 className="price">$ 40.0</h5>
                  <p className="text-muted">Zalora Cloth</p>
                  <img className="img-fluid" src={require("../../assets/img/stars.png")} alt="Rating" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PopularCard;
