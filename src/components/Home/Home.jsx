import React from 'react';
import Banner from '../Banner/Banner';
import Chefs from '../Chefs/Chefs';
import FamousFood from '../FamousFood/FamousFood';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Chefs></Chefs>
            <FamousFood></FamousFood>
        </div>
    );
};

export default Home;