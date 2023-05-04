import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
const SingleHotel = ({hotel}) => {
    const {name, city, address, cuisine, img, rating, reviews} = hotel;
    console.log(hotel)
    return (
        <div className='card shadow-2xl md:w-3/6 mx-auto my-10'>
            <LazyLoadImage effect='blur' src={img} alt="" className='w-full p-10' />
            <div className='px-10 pb-5 md:flex-row flex-col md:gap-0 gap-2 flex justify-between'>
            <div className='grid gap-2 text-center md:text-left'>
            <p className='font-semibold font-serif text-2xl'>Name: {name}</p>
            <p className='font-semibold font-serif text-xl'>city: {city}</p>
            <p className='font-semibold font-serif w-60'>address: {address}</p>
            </div>
            <div className='grid gap-2 text-center md:text-left'>
            <p className='font-semibold font-serif '>region: {cuisine}</p>
            <p className='font-semibold font-serif '>rating: {rating}</p>
            <p className='font-semibold font-serif '>reviews: {reviews}</p>
            </div>
            </div>
        </div>
    );
};

export default SingleHotel;