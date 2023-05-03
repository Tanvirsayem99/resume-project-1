import React from 'react';
import Banner from '../Banner/Banner';
import Chefs from '../Chefs/Chefs';
import FamousFood from '../FamousFood/FamousFood';
import Hotels from '../Hotels/Hotels';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Chefs></Chefs>
            <Hotels></Hotels>
            <FamousFood></FamousFood>
        </div>
    );
};

export default Home;