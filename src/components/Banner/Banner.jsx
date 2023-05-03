import React from "react";
import Person from "../../assets/Person.jpg";
import Marquee from "react-fast-marquee";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


 

const Banner = () => {
  return (
    <div className="w-full h-[80vh] bg-slate-200 grid items-center">
      <div className="flex">
        <button className="bg-red-300 p-1 ml-5 rounded-l-2xl">Bangledeshi Vegetables</button><Marquee speed={100}>
      Vegetables are an essential part of Bangladeshi cuisine. Some popular vegetable dishes include mixed vegetable curry, potato curry, lentil soup, and eggplant fry.
      </Marquee>
      
      </div>
     <div className="flex items-center justify-center gap-10">
     <p className="text-3xl font-serif w-2/6">
        Rice is the staple food of Bangladesh and is consumed by almost everyone
        in the country. It is often served with various curries, vegetables, and
        lentil soups.
      </p>
      <LazyLoadImage src={Person} effect="blur" alt="" className="w-2/6" />
     </div>
     <div>
        
     </div>
    </div>
  );
};

export default Banner;
