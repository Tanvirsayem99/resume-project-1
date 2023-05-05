import React from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const ChefsCard = ({ person }) => {
  const { name, picture, bio, likes, recipes, experience } = person;
  if (!person) {
    return <button className="btn loading">loading</button>;
  }
  return (
    <div className="unique-card-Box ">
      <div className="unique-card">
        <div className="element">
        <LazyLoadImage effect="blur" src={picture} alt="" className="w-full p-1 " />
        </div>
        

        <div className="p-5">
          <div className="flex justify-between my-5">
            <h1 className="text-2xl font-semibold">{name}</h1>
            <p className="text-sky-600">Experience: {experience}</p>
          </div>
          <div className="flex justify-between">
            <p>recipes: {recipes.length}</p>
            <p>Likes: {likes}</p>
          </div>
          <div className="text-center my-4">
            <button className=" bg-transparent border border-green-700 p-2 bg-white rounded-lg text-black btn-success ">
              <Link to={`/data/${person.id}`}>View Recipes</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefsCard;


<LazyLoadImage src=""  effect="blur"></LazyLoadImage>
