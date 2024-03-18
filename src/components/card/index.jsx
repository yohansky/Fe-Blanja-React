import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./stylecard.css";
import axios from "axios";

const Card = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/products?page=1&limit=10`)
      .then((res) => {
        setProducts(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const displayedProducts = products.slice(0, 12);

  return (
    <>
      <div className="container">
        <div className="title" style={{ marginTop: 80, marginBottom: 30 }}>
          <h1 style={{ fontWeight: "bold" }}>NEW</h1>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span style={{ color: "#9B9B9B" }}>You've never seen it before!</span>
            <Link to={"newproduct"} style={{ color: "inherit" }}>
              <span style={{ color: "gray", fontWeight: "bold" }}>View All</span>
            </Link>
          </div>
        </div>

        <div className="container">
          <div className="row d-flex flex-row flex-wrap justify-content-around">
            {/* testing  */}
            {displayedProducts.map((item) => (
              <div className="card rounded mb-3" key={item.ID}>
                <Link to={`../detailProduct/${item.ID}`}>
                  <img src={item.Imgurl} alt="Suit" className="card-img-top img-fluid" style={{ maxHeight: "136px", objectFit: "cover" }} />
                  {/* <div className="card-body"> */}
                  <h5 className="card-title">{item.Name}</h5>
                </Link>
                <h5 className="price">{item.Price}</h5>
                <p className="text-muted">Zalora Cloth</p>
                <img className="img-fluid" src={require("../../assets/img/stars.png")} alt="Rating" />
                {/* </div> */}
              </div>
            ))}
            {/* testing */}

            <div className="card rounded mb-3">
              <Link to={"../detailProduct/1"}>
                <a href="/src/pages/product.html">
                  <img src={require("../../assets/img/gez-xavier.png")} alt="Suit" className="card-img-top img-fluid" />
                  <div className="card-body">
                    <h5 className="card-title">Men's formal suit - Black & White</h5>
                    <h5 className="price">$ 40.0</h5>
                    <p className="text-muted">Zalora Cloth</p>
                    <img className="img-fluid" src={require("../../assets/img/stars.png")} alt="Rating" />
                  </div>
                </a>
              </Link>
            </div>
            <div className="card rounded mb-3">
              <img src={require("../../assets/img/gez-xavier.png")} alt="Suit" className="card-img-top img-fluid" />
              <div className="card-body">
                <h5 className="card-title">Men's formal suit - Black & White</h5>
                <h5 className="price">$ 40.0</h5>
                <p className="text-muted">Zalora Cloth</p>
                <img className="img-fluid" src={require("../../assets/img/stars.png")} alt="Rating" />
              </div>
            </div>
            <div className="card rounded mb-3">
              <img src={require("../../assets/img/gez-xavier.png")} alt="Suit" className="card-img-top img-fluid" />
              <div className="card-body">
                <h5 className="card-title">Men's formal suit - Black & White</h5>
                <h5 className="price">$ 40.0</h5>
                <p className="text-muted">Zalora Cloth</p>
                <img className="img-fluid" src={require("../../assets/img/stars.png")} alt="Rating" />
              </div>
            </div>
            <div className="card rounded mb-3">
              <img src={require("../../assets/img/gez-xavier.png")} alt="Suit" className="card-img-top img-fluid" />
              <div className="card-body">
                <h5 className="card-title">Men's formal suit - Black & White</h5>
                <h5 className="price">$ 40.0</h5>
                <p className="text-muted">Zalora Cloth</p>
                <img className="img-fluid" src={require("../../assets/img/stars.png")} alt="Rating" />
              </div>
            </div>

            <div className="card rounded mb-3">
              <img src={require("../../assets/img/gez-xavier.png")} alt="Suit" className="card-img-top img-fluid" />
              <div className="card-body">
                <h5 className="card-title">Men's formal suit - Black & White</h5>
                <h5 className="price">$ 40.0</h5>
                <p className="text-muted">Zalora Cloth</p>
                <img className="img-fluid" src={require("../../assets/img/stars.png")} alt="Rating" />
              </div>
            </div>
            <div className="card rounded mb-3">
              <img src={require("../../assets/img/gez-xavier.png")} alt="Suit" className="card-img-top img-fluid" />
              <div className="card-body">
                <h5 className="card-title">Men's formal suit - Black & White</h5>
                <h5 className="price">$ 40.0</h5>
                <p className="text-muted">Zalora Cloth</p>
                <img className="img-fluid" src={require("../../assets/img/stars.png")} alt="Rating" />
              </div>
            </div>
            <div className="card rounded mb-3">
              <img src={require("../../assets/img/gez-xavier.png")} alt="Suit" className="card-img-top img-fluid" />
              <div className="card-body">
                <h5 className="card-title">Men's formal suit - Black & White</h5>
                <h5 className="price">$ 40.0</h5>
                <p className="text-muted">Zalora Cloth</p>
                <img className="img-fluid" src={require("../../assets/img/stars.png")} alt="Rating" />
              </div>
            </div>
            <div className="card rounded mb-3">
              <img src={require("../../assets/img/gez-xavier.png")} alt="Suit" className="card-img-top img-fluid" />
              <div className="card-body">
                <h5 className="card-title">Men's formal suit - Black & White</h5>
                <h5 className="price">$ 40.0</h5>
                <p className="text-muted">Zalora Cloth</p>
                <img className="img-fluid" src={require("../../assets/img/stars.png")} alt="Rating" />
              </div>
            </div>
            <div className="card rounded mb-3">
              <img src={require("../../assets/img/gez-xavier.png")} alt="Suit" className="card-img-top img-fluid" />
              <div className="card-body">
                <h5 className="card-title">Men's formal suit - Black & White</h5>
                <h5 className="price">$ 40.0</h5>
                <p className="text-muted">Zalora Cloth</p>
                <img className="img-fluid" src={require("../../assets/img/stars.png")} alt="Rating" />
              </div>
            </div>

            <div className="card rounded mb-3">
              <img src={require("../../assets/img/gez-xavier.png")} alt="Suit" className="card-img-top img-fluid" />
              <div className="card-body">
                <h5 className="card-title">Men's formal suit - Black & White</h5>
                <h5 className="price">$ 40.0</h5>
                <p className="text-muted">Zalora Cloth</p>
                <img className="img-fluid" src={require("../../assets/img/stars.png")} alt="Rating" />
              </div>
            </div>
            <div className="card rounded mb-3">
              <img src={require("../../assets/img/gez-xavier.png")} alt="Suit" className="card-img-top img-fluid" />
              <div className="card-body">
                <h5 className="card-title">Men's formal suit - Black & White</h5>
                <h5 className="price">$ 40.0</h5>
                <p className="text-muted">Zalora Cloth</p>
                <img className="img-fluid" src={require("../../assets/img/stars.png")} alt="Rating" />
              </div>
            </div>
            <div className="card rounded mb-3">
              <img src={require("../../assets/img/gez-xavier.png")} alt="Suit" className="card-img-top img-fluid" />
              <div className="card-body">
                <h5 className="card-title">Men's formal suit - Black & White</h5>
                <h5 className="price">$ 40.0</h5>
                <p className="text-muted">Zalora Cloth</p>
                <img className="img-fluid" src={require("../../assets/img/stars.png")} alt="Rating" />
              </div>
            </div>
            <div className="card rounded mb-3">
              <img src={require("../../assets/img/gez-xavier.png")} alt="Suit" className="card-img-top img-fluid" />
              <div className="card-body">
                <h5 className="card-title">Men's formal suit - Black & White</h5>
                <h5 className="price">$ 40.0</h5>
                <p className="text-muted">Zalora Cloth</p>
                <img className="img-fluid" src={require("../../assets/img/stars.png")} alt="Rating" />
              </div>
            </div>
            <div className="card rounded mb-3">
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
    </>
  );
};

export default Card;
