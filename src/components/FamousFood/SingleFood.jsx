import React from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
const SingleFood = ({food}) => {
  const {name, description, region, image_url} = food;
  return (
    <div className="card w-full bg-white shadow-2xl shadow-slate-700 mx-auto ">
      <figure>
        <LazyLoadImage
          src={image_url}
          alt="Shoes" effect="blur" className="w-full h-72 p-5"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {name}
          <div className="badge badge-secondary">{region}</div>
        </h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default SingleFood;


