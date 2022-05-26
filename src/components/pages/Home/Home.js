import React from 'react';
import Banner from './Banner/Banner';
import BusinessSummery from './BusinessSummery/BusinessSummery';
import Reviews from './Reviews/Reviews';
import Wheels from './Wheels/Wheels';

const Home = () => {
    return (
        <div className='container' >
            <h2 className='text-center mt-5 text-info fw-bold' >Wheel Manufacturing Limited</h2>
            <Banner></Banner>
            <Wheels></Wheels>
            <BusinessSummery></BusinessSummery>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;