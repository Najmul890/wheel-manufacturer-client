import React from 'react';
import Banner from './Banner/Banner';
import BusinessSummery from './BusinessSummery/BusinessSummery';
import Contact from './Contact/Contact';
import Discount from './Discount/Discount';
import Reviews from './Reviews/Reviews';
import Wheels from './Wheels/Wheels';

const Home = () => {
    return (
        <div className='container' >
            <h2 style={{color:"#22a6b3"}} className='text-center mt-5 fw-bold' >Wheel Manufacturing Limited</h2>
            <Banner></Banner>
            <Discount></Discount>
            <Wheels></Wheels>
            <BusinessSummery></BusinessSummery>
            <Reviews></Reviews>
            <Contact></Contact>
        </div>
    );
};

export default Home;