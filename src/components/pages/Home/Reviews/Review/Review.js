import React from 'react';
import { Card, Col } from 'react-bootstrap';
import userImage from '../../../../../img/user.png';

const Review = ({ reviewContent }) => {
    const { name, review } = reviewContent;
    return (
        <Col>
            <Card style={{textTransform:'capitalize'}} className='p-5' >
                <div className='d-flex align-items-center justify-content-space-between px-5' >
                    <h4 className='me-3' >{name}</h4>
                    <img width={50} src={userImage} alt="avatar" />
                </div>
                <div>
                    <p className='mt-3' >{review}</p>
                </div>
            </Card>
        </Col>
    );
};

export default Review;