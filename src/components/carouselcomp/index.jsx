import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselComp = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerPadding: "50px", // Atur gap antara slide
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          centerPadding: "30px", // Atur gap antara slide pada breakpoint 1024px
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          centerPadding: "20px", // Atur gap antara slide pada breakpoint 600px
        },
      },
    ],
  };

  return (
    <>
      <div className="container">
        <Slider {...settings}>
          <div>
            <div className="card">
              <img src={require("../../assets/img/Card Promotion.png")} alt="Gambar1" />
            </div>
          </div>
          <div>
            <div className="card">
              <img src={require("../../assets/img/Card Promotion 2.png")} alt="Gambar2" />
            </div>
          </div>
          <div>
            <div className="card">
              <img src={require("../../assets/img/Card Promotion.png")} alt="Gambar1" />
            </div>
          </div>
          <div>
            <div className="card">
              <img src={require("../../assets/img/Card Promotion 2.png")} alt="Gambar2" />
            </div>
          </div>
        </Slider>
      </div>
    </>
    // <div className="container" style={{ width: 500, maxWidth: "100%" }}>
    //   <Carousel autoPlay interval={3000} infiniteLoop showStatus={false}>
    //     <div className="container">
    //       <img src={require("../../assets/img/Card Promotion.png")} alt="Gambar1" />
    //     </div>
    //     <div>
    //       <img src={require("../../assets/img/Card Promotion 2.png")} alt="Gambar2" />
    //     </div>
    //     <div className="container">
    //       <img src={require("../../assets/img/Card Promotion.png")} alt="Gambar1" />
    //     </div>
    //     <div>
    //       <img src={require("../../assets/img/Card Promotion 2.png")} alt="Gambar2" />
    //     </div>
    //   </Carousel>
    // </div>
  );
};

export default CarouselComp;
