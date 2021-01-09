import React from 'react';
import About from './About/About';
import Cuisines from './Cuisines/Cuisines';
import FoodSection from './FoodSection/FoodSection';
import Menu from './Menu/Menu';
import MenuCounter from './MenuCounter/MenuCounter';

const Home = () => {
    return (
        <div>
            <About/>
            <Menu/>
            <MenuCounter/>
            <FoodSection/>
            <Cuisines/>
        </div>
    );
};

export default Home;