import React from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const ChefsCard = ({person}) => {

    const {name, picture, bio, likes, recipes, experience} = person;
    if(!person){
        return <button className="btn loading">loading</button>;
    }
    return (
        <div className='border border-gray-200 shadow-xl p-5 rounded-xl'>
            <LazyLoadImage effect='blur' src={picture} alt="" className='w-full'/>

            <div>
                <div className='flex justify-between my-5'>
                <h1 className='text-2xl font-semibold'>{name}</h1>
                <p className='text-red-500'>Experience: {experience}</p>
                </div>
                <div className='flex justify-between'>
                <p>recipes: {recipes.length}</p>
                <p>Likes: {likes}</p>
                </div>
                <div className='text-center my-4'>
                <button className='bg-indigo-500 text-white p-2 rounded-sm '><Link to={`/data/${person.id}`}>View Recipes</Link></button>
                </div>
            </div>
        </div>
    );
};

export default ChefsCard;