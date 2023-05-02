import React from 'react';
import { Link } from 'react-router-dom';

const ChefsCard = ({person}) => {

    const {name, picture, bio, likes, recipes} = person;
    return (
        <div className='border border-gray-200 shadow-xl p-5 rounded-xl'>
            <img src={picture} alt="" className='w-full'/>

            <div>
                <div className='flex justify-between my-5'>
                <h1 className='text-2xl font-semibold'>{name}</h1>
                <p className='text-red-500'>this faulty</p>
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