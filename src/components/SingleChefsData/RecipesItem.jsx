import React from 'react';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';;

const RecipesItem = ({recipe}) => {
    const {name, picture, making_details, rating, ingredients} = recipe;
    const [favorite, setFavorite] = useState(false);

    const handlecliker = () =>{
         toast("Item added into favorite list!");
         setFavorite(true);
    }
    return (
        <div>
            <div className='grid justify-center items-center w-full border border-orange-400 p-5 gap-3'>
                <LazyLoadImage src={picture} alt="" effect='blur' className='w-full h-96 '/>
                <p><span className='font-semibold text-xl'>Recipe name: </span>{name}</p>
                <div>
                    {
                        ingredients.map(e => <p e={e} key={e.id} >{e.name}</p>)
                    }
                </div>
                <p>Making Details: {making_details}</p>
                <p>{rating}</p>
                {
                    favorite? <button className='bg-slate-400 opacity-30 p-2' disabled={true}>Add To Favorite</button> :
                     <button className='bg-red-200 p-2' onClick={handlecliker}>Add To Favorite</button>
                }
                
                <ToastContainer />
            </div>
        </div>
    );
};

export default RecipesItem;