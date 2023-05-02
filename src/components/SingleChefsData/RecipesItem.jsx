import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RecipesItem = ({recipe}) => {
    const {name, picture, making_details, rating, ingredients} = recipe;

    const handlecliker = () =>{
         toast("Item added into favorite list!");
    }
    return (
        <div>
            <div className='grid justify-center items-center w-full border border-orange-400 p-5 gap-3'>
                <img src={picture} alt="" className='w-full h-96'/>
                <p><span className='font-semibold text-xl'>Recipe name: </span>{name}</p>
                <div>
                    {
                        ingredients.map(e => <p e={e} key={e.id} >{e.name}</p>)
                    }
                </div>
                <p>Making Details: {making_details}</p>
                <p>{rating}</p>
                <button className='bg-red-200 p-2' onClick={handlecliker}>Add To Favorite</button>
                <ToastContainer />
            </div>
        </div>
    );
};

export default RecipesItem;