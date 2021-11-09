import React from 'react';
import Banner from '../banner/Banner';
import Headers from '../shared/header/Header';
import Appoitmentbanner from './apppoitmentBanner/Appoitmentbanner';
import Services from './services/Services';



const Home = () => {
    return (
        <div>
         
            <Headers></Headers>
            <Banner></Banner>
            <Services></Services>
            <Appoitmentbanner></Appoitmentbanner>
        </div>
    );
};

export default Home;