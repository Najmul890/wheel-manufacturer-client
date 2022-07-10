import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Review from './Review/Review';

const Reviews = () => {
    const [reviews, setReviews]=useState([]);
    useEffect(()=>{
        fetch('https://afternoon-taiga-42988.herokuapp.com/reviews')
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[])
    return (
        <div className='p-5' >
            <h2 style={{color:"#22a6b3"}} className='text-center mb-5 ' >Clients Feedback</h2>
            <Row xs={1} md={2} lg={3} className="g-4">
                {
                   reviews.map(review=><Review key={review._id} reviewContent={review} ></Review>)
                }
            </Row>
        </div>
    );
};

export default Reviews;