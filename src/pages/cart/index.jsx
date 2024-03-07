import React from "react";
import NavbarLogin from "../../components/navbarLogin";
import "../../assets/css/style.css";

const Cart = () => {
  return (
    <>
      <NavbarLogin />
      Halo ini adalah cart
      <div className="container">
        <h2>My bag</h2>
        <div className="row">
          <div className="col-lg-8">
            {/* select all items */}
            <div className="selectall-card">
              <div className="d-flex justify-content-between">
                <div className="input-group">
                  <input type="checkbox" className="mb-3 mr-3" />
                  <p>
                    <a href="">Selected Items</a> (2 Items Selected)
                  </p>
                </div>

                <a href="" className="text-danger">
                  Delete
                </a>
              </div>
            </div>
            {/* Product list */}
            <div className="card mt-3">
              <div className="card-body d-flex align-items-center justify-content-between flex-lg-row flex-sm-row flex-column">
                <div className="product-bag d-flex align-items-center">
                  <input type="checkbox" name="uname" id="" />
                  <img src="../assets/img/Mask Group1.png" alt="product1" />
                  <div className="name">
                    <strong>Men's formal suit - Black</strong>
                    <p>Zalora cloth</p>
                  </div>
                </div>
                {/* Harga */}
                <div className="amount">
                  <img src="../assets/img/ic-minus-baru.svg" alt="min" />
                  <span>1</span>
                  <img src="../assets/img/ic-plus-baru.svg" alt="plus" />
                </div>
                <div className="price">
                  <strong>$ 20.0</strong>
                </div>
              </div>
            </div>

            <div className="card mt-3">
              <div className="card-body d-flex align-items-center justify-content-between flex-lg-row flex-sm-row flex-column">
                <div className="product-bag d-flex align-items-center">
                  <input type="checkbox" name="uname" id="" />
                  <img src="../assets/img/Mask Group2.png" alt="product2" />
                  <div className="name">
                    <strong>Men's Jacket jeans </strong>
                    <p>Zalora cloth</p>
                  </div>
                </div>
                <div className="amount">
                  <img src="../assets/img/ic-minus-baru.svg" alt="min" />
                  <span>1</span>
                  <img src="../assets/img/ic-plus-baru.svg" alt="plus" />
                </div>
                <div className="price">
                  <strong>$ 20.0</strong>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            {/* summary */}
            <div className="summary-card">
              <div className="flex-column">
                <h4>Shopping Summary</h4>
                {/* <!-- koreksi --> */}
                <br />
                <div className="d-flex justify-content-between">
                  {/* <!-- untuk memberikan baris baru --> */}
                  <div className="name">
                    <p style={{ color: "gray" }}>Total Price</p>
                  </div>
                  <div className="totalprice">
                    <strong>$ 40.0</strong>
                  </div>
                </div>
                <div className="d-flex justify-content-between">
                  <div className="buttoncheckout">
                    <a href="checkout.html" className="btn btn-checkout" type="submit">
                      Primary
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*  */}
        </div>
      </div>
    </>
  );
};

export default Cart;
