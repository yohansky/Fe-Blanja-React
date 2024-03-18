import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "../../pages/home";
import RegisterSeller from "../../pages/auth/RegisterSeller";
import Forgot from "../../pages/auth/ForgotPassword";
import LoginCustomer from "../../pages/auth/LoginCustomer";
import LoginSeller from "../../pages/auth/LoginSeller";
import RegisterCustomer from "../../pages/auth/RegisterCustomer";
import Cart from "../../pages/cart";
import DetailProduct from "../../pages/detailProduct";
import Page404 from "../../pages/page404";
import Seller from "../../pages/profile/seller";
import Customer from "../../pages/profile/customer";
import ReqAuth from "../../components/reqauth";
import SellingProduct from "../../pages/profile/seller/sellingProduct";
import Checkout from "../../pages/cart/checkout";
import Search from "../../pages/search";
import Category from "../../pages/category";
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
          <Route path="/cart/checkout" element={<Checkout />} />
          {/* <Route
            path="/detailProduct/:id"
            element={
              <ReqAuth>
                <DetailProduct />
              </ReqAuth>
            }
          /> */}
          <Route path="/detailProduct/:id" element={<DetailProduct />} />
          <Route path="*" element={<Page404 />} />
          <Route path="/search" element={<Search />} />
          {/* <Route path="/transaction/:id" element={<Transaction />} /> */}
          <Route path="/category" element={<Category />} />
          {/* <Route path="/profile/:id" element={<Profile />} /> */}
          {/* seller */}
          <Route path="/profile/seller/" element={<Seller />} />
          <Route path="/profile/sellingProduct" element={<SellingProduct />} />
          {/* custommer */}
          <Route path="/profile/custommer/" element={<Customer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
