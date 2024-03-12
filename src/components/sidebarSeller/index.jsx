import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { Dropdown, DropdownButton } from "react-bootstrap";

const SidebarSeller = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <>
      <div className="border col-3">
        {/* sidebar */}
        <div className="row">
          <div className="border col-4">
            <img src={require("../../assets/img/profilesmall2.png")} alt="profilesmall" />
          </div>
          <div className="border col-8">
            Yohanes Hubert
            <div className="row">
              <p style={{ color: "grey", marginLeft: 30 }}>Ubah profile</p>
            </div>
          </div>
        </div>
        {/* Store */}
        <div className="row" style={{ marginTop: 50 }}>
          <div className="border col-4">gambar</div>
          <div className="border col-8">
            {/* <h6>Store</h6> */}
            <DropdownButton align="start" title="Store" menuVariant="light" id="dropdown-example">
              <Dropdown.Item href="#">
                <Link to={"/profile/seller/"}>Store Profile</Link>
              </Dropdown.Item>
            </DropdownButton>
          </div>
        </div>
        {/* Product */}
        <div className="row">
          <div className="border col-4">gambar</div>
          <div className="border col-8">
            {/* <h6>Product</h6> */}
            <DropdownButton align="start" title="Product" menuVariant="light" id="dropdown-example">
              <Dropdown.Item href="#">My products</Dropdown.Item>
              <Dropdown.Item href="#">
                <Link to={"/profile/sellingProduct"}>Selling products</Link>
              </Dropdown.Item>
            </DropdownButton>
          </div>
        </div>
        {/* Order */}
        <div className="row">
          <div className="border col-4">gambar</div>
          <div className="border col-8">
            {/* <h6>Order</h6> */}
            <DropdownButton align="start" title="Order" menuVariant="light" id="dropdown-example">
              <Dropdown.Item href="#">My order</Dropdown.Item>
              <Dropdown.Item href="#">Order cancle</Dropdown.Item>
            </DropdownButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default SidebarSeller;
