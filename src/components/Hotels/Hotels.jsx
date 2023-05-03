import React from 'react';
import { useEffect } from 'react';
import { useState, useRef } from 'react';
import { LazyLoadComponent } from "react-lazy-load-image-component";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SingleHotel from './SingleHotel';
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";


const Hotels = () => {
const [hotels, setHotels] = useState([]);
  const [load, setLoad] = useState(false);
  console.log(hotels)

  useEffect(() => {
    fetch("https://assignment-10-server-tanvirsayem99.vercel.app/hotel")
      .then((res) => res.json())
      .then((data) => setHotels(data), setLoad(true));
  }, []);
  if (!load) {
    return (
      <div className="text-center my-10">
        <button className="btn btn-square loading "></button>
      </div>
    );
  }
    return (
      <>
      <Swiper
        slidesPerView={1}
        spaceBetween={1}
        freeMode={false}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper  mx-auto"
      > <LazyLoadComponent>
        {
          hotels.map(hotel =>(<SwiperSlide key={hotel.id}><SingleHotel hotel={hotel}></SingleHotel></SwiperSlide>))
        }
        </LazyLoadComponent>
      </Swiper>
    </>
    );
};

export default Hotels;
// {
//   hotels.map(hotel => (<SingleHotel key={hotel.id} hotel={hotel}></SingleHotel>))
// }