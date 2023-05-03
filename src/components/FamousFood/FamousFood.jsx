import React, { useState } from 'react';
import { useEffect } from 'react';
import SingleFood from './SingleFood';
import { LazyLoadComponent } from "react-lazy-load-image-component";

const FamousFood = () => {
    const [foods, setFoods] = useState([]);
    const [load, setLoad] = useState(false);
    useEffect(()=>{
        fetch('https://assignment-10-server-tanvirsayem99.vercel.app/food')
        .then(res => res.json())
        .then (data => setFoods(data), setLoad(true))
    },[])
    if(!load){
        return <div className='text-center my-10'><button className="btn btn-square loading "></button></div>
    }
    return (
        <div className='md:w-auto w-11/12 mx-auto'>
            <h1 className='text-4xl text-center my-10 font-serif font-semibold'>Popular Food in Bangladesh</h1>
            <div className='grid md:grid-cols-3 w-11/12 mx-auto gap-10'>
            <LazyLoadComponent>
            {
                foods.map(food => <SingleFood key={food.id} food={food} ></SingleFood>)
            }
            </LazyLoadComponent>
            </div>
        </div>
    );
};

export default FamousFood;