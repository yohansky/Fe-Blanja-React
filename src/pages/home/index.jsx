import React, { useEffect, useState } from "react";
import CarouselComp from "../../components/carouselcomp";
import CategoryComp from "../../components/category";
import Card from "../../components/card";
import PopularCard from "../../components/popularCard";
import NavbarLogin from "../../components/navbarLogin";
import Navbar from "../../components/navbar";

const Home = () => {
  const [token, setToken] = useState("");

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, [token]);

  return (
    <div>
      {token ? <NavbarLogin /> : <Navbar />}
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
