import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import RegisterSeller from "../pages/auth/RegisterSeller";
import Forgot from "../pages/auth/ForgotPassword";
import LoginCustomer from "../pages/auth/LoginCustomer";
import LoginSeller from "../pages/auth/LoginSeller";
import RegisterCustomer from "../pages/auth/RegisterCustomer";
import Cart from "../pages/cart";
import DetailProduct from "../pages/detailProduct";
// import DetailProduct from "../../pages/detailProduct/[id]";
// import Cart from "../../pages/cart/[id]";
// import Profile from "../../pages/profile/[id]";
// import Seller from "../../pages/profile/seller/[id]";
// import SellingProduct from "../../pages/profile/seller/sellingProduct";
// import OrderCancel from "../../pages/profile/seller/orderCancel/[id]";
// import MyOrder from "../../pages/profile/seller/myOrder/[id]";
// import EditSeller from "../../pages/profile/seller/editSeller/[id]";
// import MyProductSeller from "../../pages/profile/seller/myProduct/[id]";
// import EditProduct from "../../pages/profile/seller/myProduct/editProduct/[id]";
// import Transaction from "../../pages/cart/transaction/[id]";
// import Customer from "../../pages/profile/custommer/[id]";
// import MyOrderCustommer from "../../pages/profile/custommer/myOrder/[id]";
// import ShippingAddress from "../../pages/profile/custommer/shippingAddress/[id]";
// import NewProduct from "../../pages/NewProduct";
// import CategoryProduct from "../../pages/Category";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to={"/home"} replace="true" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/auth/LoginCustomer" element={<LoginCustomer />} />
          <Route path="/auth/LoginSeller" element={<LoginSeller />} />
          <Route path="/auth/RegisterCustomer" element={<RegisterCustomer />} />
          <Route path="/auth/RegisterSeller" element={<RegisterSeller />} />
          <Route path="/auth/forgot" element={<Forgot />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/detailProduct/:id" element={<DetailProduct />} />
          {/* <Route path="/product/:id" element={<DetailProduct />} />
          <Route path="/category/:id" element={<CategoryProduct />} />
          <Route path="/newproduct/" element={<NewProduct />} />
          
          <Route path="/transaction/:id" element={<Transaction />} />
          <Route path="/profile/:id" element={<Profile />} /> */}
          {/* seller */}
          {/* <Route path="/profile/seller/:id" element={<Seller />} />
          <Route path="/profile/my-product/:id" element={<MyProductSeller />} />
          <Route path="/profile/update-product/:id" element={<EditProduct />} />
          <Route path="/profile/selling-product" element={<SellingProduct />} />
          <Route path="/profile/order-cancel/:id" element={<OrderCancel />} />
          <Route path="/profile/my-order/:id" element={<MyOrder />} />
          <Route path="/profile/edit-seller/:id" element={<EditSeller />} /> */}
          {/* custommer */}
          {/* <Route path="/profile/custommer/:id" element={<Customer />} />
          <Route path="/profile/my-order/custommer/:id" element={<MyOrderCustommer />} />
          <Route path="/profile/shipping-address/:id" element={<ShippingAddress />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
