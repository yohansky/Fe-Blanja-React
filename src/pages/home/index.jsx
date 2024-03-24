import React, { useEffect, useState } from "react";
import CarouselComp from "../../components/carouselcomp";
import CategoryComp from "../../components/category";
import Card from "../../components/card";
import PopularCard from "../../components/popularCard";
import NavbarLogin from "../../components/navbarLogin";
import Navbarsatu from "../../components/navbar";

const Home = () => {
  const [token, setToken] = useState("");
  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, [token]);

  return (
    <div>
      {token ? <NavbarLogin /> : <Navbarsatu />}
      <CarouselComp />
      <CategoryComp />
      <Card />
      <PopularCard />
    </div>
  );
};

export default Home;
