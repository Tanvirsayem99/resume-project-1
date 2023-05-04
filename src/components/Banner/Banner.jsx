import React from "react";
import Person from "../../assets/Person.jpg";
import Marquee from "react-fast-marquee";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import image  from "../../../src/assets/bg.jpg";


 

const Banner = () => {
  return (
    <div className="md:w-full h-[80vh] bg-[url('../../../src/assets/bg.jpg')] grid items-center  mx-auto">
      <div className="flex md:mx-0 md:w-auto w-11/12 mx-auto">
        <button className="bg-green-500 text-white font-semibold p-1 ml-5 rounded-l-2xl">Bangledeshi Vegetables</button><Marquee speed={100} className="text-white">
      Vegetables are an essential part of Bangladeshi cuisine. Some popular vegetable dishes include mixed vegetable curry, potato curry, lentil soup, and eggplant fry.
      </Marquee>
      
      </div>
     <div className="flex flex-col md:flex-row items-center justify-center md:gap-10 md:p-0 p-5">
     <p className="text-xl text-green-500 md:text-3xl font-serif md:w-2/6 text-center md:text-left">
        Rice is the staple food of Bangladesh and is consumed by almost everyone
        in the country. It is often served with various curries, vegetables, and
        lentil soups.
      </p>
      <div className="md:w-2/6 p-5 md:p-0">
      <LazyLoadImage src={Person} effect="blur" alt="" className="w-full" />
      </div>
     </div>
     <div>
        
     </div>
    </div>
  );
};

export default Banner;
