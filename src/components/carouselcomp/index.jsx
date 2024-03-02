import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselComp = () => {
  return (
    <div className="container" style={{ width: 500, maxWidth: "100%" }}>
      <Carousel autoPlay interval={3000} infiniteLoop showStatus={false}>
        <div className="container">
          <img src={require("../../assets/img/Card Promotion.png")} alt="Gambar1" />
        </div>
        <div>
          <img src={require("../../assets/img/Card Promotion 2.png")} alt="Gambar2" />
        </div>
        <div className="container">
          <img src={require("../../assets/img/Card Promotion.png")} alt="Gambar1" />
        </div>
        <div>
          <img src={require("../../assets/img/Card Promotion 2.png")} alt="Gambar2" />
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselComp;
