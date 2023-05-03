import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
const SingleHotel = ({hotel}) => {
    const {name, city, address, cuisine, img, rating, reviews} = hotel;
    console.log(hotel)
    return (
        <div className='card shadow-2xl md:w-3/6 mx-auto'>
            <LazyLoadImage effect='blur' src={img} alt="" className='w-full p-10' />
            <div className='px-10 pb-5 flex justify-between'>
            <div>
            <p className='font-semibold font-serif text-2xl'>Name: {name}</p>
            <p className='font-semibold font-serif text-xl'>city: {city}</p>
            <p className='font-semibold font-serif w-60'>address: {address}</p>
            </div>
            <div>
            <p className='font-semibold font-serif '>region: {cuisine}</p>
            <p className='font-semibold font-serif '>rating: {rating}</p>
            <p className='font-semibold font-serif '>reviews: {reviews}</p>
            </div>
            </div>
        </div>
    );
};

export default SingleHotel;