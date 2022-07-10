import React from 'react';

const Discount = () => {
    return (
        <div style={{backgroundColor:"#22a6b3"}} className='p-5 text-center text-white mt-5' >
            <h2 className='mb-5' >Summer Discount !!!</h2>
            <h4 style={{backgroundColor:"#4b6584"}} className=' rounded p-5 mb-5' ><span style={{backgroundColor:"#2bcbba"}} className=" rounded-pill p-1 p-md-3">10%</span> discount on minimum 100 pieces order of any product</h4>
            <h4 style={{backgroundColor:"#4b6584"}} className='rounded p-5' ><span style={{backgroundColor:"#2bcbba"}}className="rounded-pill p-1 p-md-3">20%</span> discount on minimum 500 pieces order of any product</h4>
            
        </div>
    );
};

export default Discount;