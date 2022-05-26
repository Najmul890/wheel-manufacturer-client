import React from 'react';
import Banner from './Banner/Banner';
import Wheels from './Wheels/Wheels';

const Home = () => {
    return (
        <div className='container' >
            <h2 className='text-center mt-5' >Wheel Manufacturing Limited</h2>
            <Banner></Banner>
            <Wheels></Wheels>
        </div>
    );
};

export default Home;