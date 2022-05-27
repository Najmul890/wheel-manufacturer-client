import React from 'react';
import bannerImage from '../../../../img/banner-img.png';

const Banner = () => {
    return (
        <div className='row p-5 text-white bg-secondary mt-5' >
            <div className="col-md-6 col-12 p-2 p-md-5">
                <h3>Best Manufactured Wheels for Your Car Industry</h3>
                <p className='mt-4' >We are providing the quality wheels in reasonable price. We are ready to support you with the quality wheels</p>
            </div>
            <div className="col-md-6 col-12">
                <img className='img-fluid' src={bannerImage} alt="" />
            </div>
        </div>
    );
};

export default Banner;