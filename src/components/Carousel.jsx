import React from "react";
import slider_img_1 from "../assets/slider-img-1.jpg";
import slider_img_2 from "../assets/slider-img-2.jpg";
import slider_img_3 from "../assets/slider-img-3.jpg";
import slider_img_4 from "../assets/slider-img-4.jpg";

const Carousel = () => {
  return (
    <div
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active" style={{ height: "300px" }}>
          <img src={slider_img_1} className="d-block w-100" alt="..." style={{ minHeight: "300px" }} />
        </div>
        <div className="carousel-item">
          <img src={slider_img_2} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={slider_img_3} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={slider_img_4} className="d-block w-100" alt="..." />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
