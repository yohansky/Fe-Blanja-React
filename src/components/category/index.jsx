import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "./stylecate.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CategoryComp = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  // const [dataCategory, setDataCategory] = useState([]);

  // const itemsPerGroup = 5;
  // const groupedData = [];
  // for (let i = 0; i < dataCategory.length; i += itemsPerGroup) {
  //   groupedData.push(dataCategory.slice(i, i + itemsPerGroup));
  // }

  return (
    <>
      <div className="container">
        <div className="title" style={{ marginTop: 30, marginBottom: 30 }}>
          <h1 style={{ fontWeight: "bold" }}>Category</h1>
          <section style={{ color: "#9B9B9B" }}>What are you currently looking for</section>
        </div>
        <div className="card">
          <div className="card-body">
            <Slider {...settings}>
              <div>
                <img className="img" src={require("../../assets/img/Group 1233.png")} alt="First slide" />
              </div>
              <div>
                <img className="img" src={require("../../assets/img/Group 1232.png")} alt="Second slide" />
              </div>
              <div>
                <img className="img" src={require("../../assets/img/Group 1231.png")} alt="Third slide" />
              </div>
            </Slider>
          </div>
        </div>
        {/* <div className="row">
        <div className="col-lg-3 col-md-4 col-sm-6 col-6 mb-4" style={{ width: 222 }}>
          <div className="border rounded product">
            <Carousel data-bs-theme="dark">
              <Carousel.Item>
                <img className="img" src={require("../../assets/img/Group 1233.png")} alt="First slide" />
                <Carousel.Caption>
                  <h5>First slide label</h5>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="img" src={require("../../assets/img/Group 1232.png")} alt="Second slide" />
                <Carousel.Caption>
                  <h5>Second slide label</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="img" src={require("../../assets/img/Group 1231.png")} alt="Third slide" />
                <Carousel.Caption>
                  <h5>Third slide label</h5>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div> */}
      </div>
    </>
  );
};

export default CategoryComp;
