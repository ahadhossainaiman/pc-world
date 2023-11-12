import Image from "next/image";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 20000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 20000,
    cssEase: "linear"
  };
  const bannerImgs = [
    { banImg: "/images/banner/1.jpg" },
    { banImg: "/images/banner/2.jpg" },
    { banImg: "/images/banner/3.jpg" },
    { banImg: "/images/banner/4.jpg" },
  ];
  return (
    <Slider {...settings}>
      {bannerImgs.map((img) => {
        return (
          <>
            <div className="mx-auto ">
              <img src={img.banImg} alt="" className="lg:h-[70vh] w-full" />
            </div>
          </>
        );
      })}
    </Slider>
  );
};

export default SliderComponent;
