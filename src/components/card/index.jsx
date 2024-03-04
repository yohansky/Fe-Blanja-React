import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./stylecard.css";
import Skeleton from "react-loading-skeleton";

const Card = () => {
  //   const navigate = useNavigate();
  //   const [products, setProducts] = useState([]);

  //   const displayedProducts = products.slice(0, 12);

  return (
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
          {/* <!-- row 2 --> */}
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
          {/* <!-- row 3 --> */}
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

      {/* <div className="row">
        <div className="col-lg-3 col-md-4 col-sm-6 col-6 mb-4 cardWarp">
          <div className="border rounded product">
            <Skeleton height={136} />
            <div className="p-2">
              <Skeleton width={184} height={48} />
              <Skeleton width={100} height={20} />
              <Skeleton width={120} height={16} />
              <Skeleton width={100} height={16} />
            </div>
          </div>
        </div>
      </div> */}

      {/* <div className="row">
        <div className="col-lg-3 col-md-4 col-sm-6 col-6 mb-4 cardWrap">
          <div className="border rounded product">
            <img className="img-fluid" src={require("../../assets/img/gez-xavier.png")} alt="gambar1" style={{ width: "100%", maxHeight: "136px", objectFit: "cover" }} />
            <div className="p-2">
              <h5 className="card-title mt-2" style={{ height: 70 }}>
                Men's formal suit - Black & White
              </h5>
              <h5 className="text-danger mt-2">Rp.40.000</h5>
              <p style={{ color: "#9B9B9B" }}>Zalora Cloth</p>
              <img src={require("../../assets/img/stars.png")} alt="stars" />
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Card;
