import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import ChefsCard from "../ChefsCard/ChefsCard";
import { LazyLoadComponent } from "react-lazy-load-image-component";

const Chefs = () => {
  const [chefs, setChefs] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    fetch("https://assignment-10-server-tanvirsayem99.vercel.app/data")
      .then((res) => res.json())
      .then((data) => setChefs(data), setLoad(true));
  }, []);
  if (!load) {
    return (
      <div className="text-center my-10">
        <button className="btn btn-square loading "></button>
      </div>
    );
  }

  return (
    <div>
      <div className="flex flex-col justify-center items-center my-5">
        <div className="bg-red-300 rounded-tl-3xl rounded-br-3xl w-64 text-2xl text-center pr-5 py-2 mb-10">
          Most famous Bangladeshi chefs
        </div>
        <LazyLoadComponent>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-5 mx-5">
          {chefs?.map((person) => (
            <ChefsCard person={person} key={person.id}></ChefsCard>
          ))}
        </div>
        </LazyLoadComponent>
        <div></div>
      </div>
    </div>
  );
};

export default Chefs;
