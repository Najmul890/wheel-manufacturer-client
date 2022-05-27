import React from 'react';

const Discount = () => {
    return (
        <div className='p-5 text-center text-white bg-info mt-5' >
            <h2 className='mb-5' >Summer Discount !!!</h2>
            <h4 className='bg-success rounded p-5 mb-5' ><span className="bg-secondary rounded-pill p-1 p-md-3">10%</span> discount on minimum 100 pieces order of any product</h4>
            <h4 className='bg-success rounded p-5' ><span className="bg-secondary rounded-pill p-1 p-md-3">15%</span> discount on minimum 500 pieces order of any product</h4>
            
        </div>
    );
};

export default Discount;