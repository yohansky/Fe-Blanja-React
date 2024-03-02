import React from "react";
import Navbar from "../../components/navbar";
import CarouselComp from "../../components/carouselcomp";
// import NavbarLogin from "../../components/navbarLogin";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container" style={{ marginTop: 50 }}>
        <CarouselComp />
      </div>
    </div>
  );
};

export default Home;
