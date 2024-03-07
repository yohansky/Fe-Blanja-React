import axios from "axios";
import "../../assets/css/stylebaru.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PopularCard from "../../components/popularCard";
import NavbarLogin from "../../components/navbarLogin";

const DetailProduct = () => {
  const [products, setProducts] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/product/${id}`)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <NavbarLogin />
      DetailProduct {id}
      {JSON.stringify(products)}
      <main id="product">
        <div className="container" style={{ marginTop: 30 }}>
          <section id="location">
            <p>Home &gt; category &gt; Shoes</p>
          </section>
          <div className="row">
            <div className="col-md-6">
              {/* gambar produk */}
              <div className="row">
                <div className="col-md-6">
                  <img src={products.Imgurl} alt="" style={{ width: 263, height: 329 }} />
                </div>
                <div className="col-md-6">
                  <img src={require("../../assets/img/sepatu-top-right.png")} alt="" style={{ width: 263, height: 329 }} />
                </div>
              </div>
              <div className="row" style={{ marginTop: 20 }}>
                <div className="col-md-6">
                  <img src={require("../../assets/img/sepatu-bottom-left.png")} alt="" style={{ width: 263, height: 329 }} />
                </div>
                <div className="col-md-6">
                  <img src={require("../../assets/img/sepatu-top-right.png")} alt="" style={{ width: 263, height: 329 }} />
                </div>
              </div>
            </div>
            {/*  */}
            <div className="col-md-6">
              {/* deskripsi produk */}
              {/* <h3>Nike CruzrOne (Bright Crimson)</h3> */}
              <h3>{products.Name}</h3>
              <h6 style={{ color: "gray" }}>Nike</h6>
              <img src={require("../../assets/img/stars.png")} alt="" />
              <div className="price" style={{ marginTop: 20 }}>
                <h6 style={{ color: "gray" }}>Price</h6>
                {/* <h2 style={{ fontWeight: "bold", color: "black" }}>Rp.20.000</h2> */}
                <h2 style={{ fontWeight: "bold", color: "black" }}>{products.Price}</h2>
              </div>
              <div className="color-product">
                <h5 style={{ marginTop: 30, marginLeft: 10 }}>Color</h5>
                <div className="row">
                  <div className="col-1">
                    <button className="colorBtn">
                      <div className="colorBlack"></div>
                    </button>
                  </div>
                  <div className="col-md-1">
                    <button className="colorBtn">
                      <div className="colorBlack" style={{ backgroundColor: "red" }}></div>
                    </button>
                  </div>
                  <div className="col-md-1">
                    <button className="colorBtn">
                      <div className="colorBlack" style={{ backgroundColor: "blue" }}></div>
                    </button>
                  </div>
                  <div className="col-md-1">
                    <button className="colorBtn">
                      <div className="colorBlack" style={{ backgroundColor: "green" }}></div>
                    </button>
                  </div>
                </div>
                {/*  */}
                <div className="row" style={{ marginTop: 30 }}>
                  <div className="col">
                    <div className="ukuran">
                      <h5>size</h5>
                      <img src={require("../../assets/img/ic-mini-minus.png")} alt="min" />
                      {/* <span>1</span> */}
                      <span>{products.Size}</span>
                      <img src={require("../../assets/img/ic-mini-plus.png")} alt="plus" />
                    </div>
                  </div>
                  <div className="col">
                    <div className="jumlah">
                      <h5>Jumlah</h5>
                      <img src={require("../../assets/img/ic-mini-minus.png")} alt="min" />
                      {/* <span>1</span> */}
                      <span>{products.Amount}</span>
                      <img src={require("../../assets/img/ic-mini-plus.png")} alt="plus" />
                    </div>
                  </div>
                </div>
                {/*  */}
                <div className="buttons" style={{ marginTop: 40 }}>
                  <div className="row">
                    <div className="col">
                      <a href="#" className="btn btn-shadow ml-4" type="submit">
                        Chat
                      </a>
                    </div>
                    <div className="col">
                      <a href="/cart" className="btn btn-shadow ml-4" type="submit">
                        Add to Bag
                      </a>
                    </div>
                  </div>

                  <button type="button" className="btn rounded-pill buy">
                    <h6 className="login">Buy Now</h6>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/*  */}
          <h4 style={{ marginTop: 60 }}>Informasi Produk</h4>
          <h6 style={{ marginTop: 30 }}>Condition</h6>
          {/* <h6 style={{ color: "red" }}>NEW</h6> */}
          <h6 style={{ color: "red" }}>{products.Condition}</h6>
          <h6 style={{ marginTop: 30 }}>Description</h6>
          {/* {product.desc} */}
          {/* <p style={{ textAlign: "justify" }}>lorem ipsum</p> */}
          <p style={{ textAlign: "justify" }}>{products.Description}</p>
          <h4 style={{ marginTop: 60 }}>Product Review</h4>
          <div className="row"></div>
          <PopularCard />
        </div>
      </main>
    </>
  );
};

export default DetailProduct;
