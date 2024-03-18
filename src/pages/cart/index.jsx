import React from "react";
import NavbarLogin from "../../components/navbarLogin";
// import "../../assets/css/style.css";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <>
      <NavbarLogin />
      <div className="container mt-3">
        <h2>My bag</h2>
        <div className="row">
          <div className="col-8">
            items
            <div className="card rounded mt-3" style={{ width: "720px" }}>
              <div className="row">
                <div className="col-10">
                  <Form.Group className="mt-3 ml-3">
                    {["checkbox"].map((type) => (
                      <div key={`inline-${type}`} className="mb-3">
                        <Form.Check inline label="Select all items" name="group1" type={type} id={`inline-${type}-1`} />
                      </div>
                    ))}
                  </Form.Group>
                </div>
                <div className="col-2">
                  <a href="" className="text-danger">
                    <div className="mt-3 ml-3">Delete</div>
                  </a>
                </div>
              </div>
            </div>
            <div className="card rounded mt-3" style={{ width: "720px", height: "126px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div className="row">
                <div className="col">
                  <form>
                    <input className="form-check-input ml-3 " type="checkbox" />
                    {/* <Form.Group className="mt-5 ml-3">
                      {["checkbox"].map((type) => (
                        <div key={`inline-${type}`} className="mb-3">
                          <Form.Check inline label="" name="group2" type={type} id={`inline-${type}-1`} />
                        </div>
                      ))}
                    </Form.Group> */}
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
            summary
            <div className="card rounded mt-3" style={{ width: "370px", height: "180px" }}>
              <div className="m-3">
                <h5>Shopping summary</h5>
                <div className="d-flex justify-content-between mt-4">
                  <h6 className="text-secondary">Total price</h6>
                  <h5>$ 40.0</h5>
                </div>
                <div className="mt-4 d-flex justify-content-center">
                  <Link to={"/cart/checkout"}>
                    <button className="btn btn-danger btn-full" style={{ width: "322px" }}>
                      Primary
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Backup */}
      {/* <div className="container mt-3">
        <h2>My bag</h2>
        <div className="row">
          <div className="col-lg-8">

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
   
            <div className="summary-card">
              <div className="flex-column">
                <h4>Shopping Summary</h4>
           
                <br />
                <div className="d-flex justify-content-between">
             
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
   
        </div>
      </div> */}
    </>
  );
};

export default Cart;
