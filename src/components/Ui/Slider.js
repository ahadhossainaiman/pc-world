

import Image from "next/image";
import React from "react";

const Slider = () => {
  return (
    <div className="carousel w-full">
    <div id="slide1" className="carousel-item relative w-full">
      <Image src="https://www.startech.com.bd/image/cache/catalog/home/IMG-20231022-WA0004-982x500.jpg"  alt="Picture of the author"
      width={500}
      height={500} />
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide4" className="btn btn-circle">❮</a> 
        <a href="#slide2" className="btn btn-circle">❯</a>
      </div>
    </div> 
  </div>
  );
};

export default Slider;
