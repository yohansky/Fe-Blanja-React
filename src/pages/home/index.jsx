import React from "react";
import Navbar from "../../components/navbar";
import CarouselComp from "../../components/carouselcomp";
import CategoryComp from "../../components/category";
import Card from "../../components/card";
import PopularCard from "../../components/popularCard";
// import NavbarLogin from "../../components/navbarLogin";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container" style={{ marginTop: 50 }}>
        <CarouselComp />
        <CategoryComp />
        <Card />
        <PopularCard />
      </div>
    </div>
  );
};

export default Home;
