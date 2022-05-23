import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';

const Wheel = ({wheel}) => {
    const {name, image, description, minOrder, availableQuantity, price} = wheel;
    return (
        <Col>
            <Card>
                <Card.Img variant="top" height={400} src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <h4 className="fw-bold">${price}</h4>
                    <Button className='btn btn-success' >Order Now</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Wheel;