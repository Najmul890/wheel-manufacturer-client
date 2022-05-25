import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Wheel = ({ wheel }) => {
    const { name, _id, image, description, minOrder, availableQuantity, price } = wheel;
    return (
        <Col>
            <Card>
                <Card.Img variant="top" height={400} src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <p>Min-Order: <span className="fw-bold">{minOrder}</span></p>
                    <p>Available Quantity: <span className="fw-bold">{availableQuantity}</span></p>
                    <h4>price: <span className="fw-bold">${price} /piece</span></h4>

                    <Link to={`purchase/${_id}`} >
                        <Button className='btn btn-success mt-3'  >Order Now</Button>
                    </Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Wheel;