import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import RecipesItem from './RecipesItem';

const SingleChefsData = () => {
    const sayem = useParams();
    const singleData = useLoaderData();
    const {name, picture, bio, likes, recipes, experience} = singleData;
    return (
        <div className='grid justify-center items-center w-11/12 mx-auto'>
            <h1 className='text-3xl text-center font-sans my-10 '>Chefs information</h1>
            <div className='md:w-3/6 mx-auto grid gap-5 border-red-300 border p-5'>
             
                <img src={picture} alt=""  className='w-full'/>
                <p className='text-center'> <span className='font-semibold text-sky-700'>Chefs description: </span>{bio}</p>
                <div className='grid grid-cols-2'>
                <p className='text-center'><span className='font-semibold text-sky-700'>Likes </span>{likes}</p>
                <p className='text-center'>Experience: {experience}</p>
                <p className='text-center'><span className='font-semibold text-sky-700'>Recipes: </span> {recipes.length}</p>
                </div>
            </div>
                <h1 className='text-2xl text-center my-10'>Recipes information</h1>
            <div className='grid md:grid-cols-2 gap-24'>
                {
                    recipes.map(recipe => <RecipesItem recipe={recipe} key={recipe.id}></RecipesItem>)
                }
            </div>
        </div>
    );
};

export default SingleChefsData;