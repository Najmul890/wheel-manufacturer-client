import React from 'react';
import { Card, Col } from 'react-bootstrap';

const SummeryItem = ({summery}) => {
    const {icon, count, item}= summery;
    return (
        <Col>
            <Card style={{backgroundColor:"#4b6584", color:"white"}} >
                
                <Card.Body className='text-center' >
                    <img src={icon} alt="" width={50} />
                    <h4 className="text-bold mt-2">{count}+</h4>
                    <p>{item}</p>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default SummeryItem;