import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Wheel = ({ wheel }) => {
    const { name, _id, image, description, minOrder, availableQuantity, price } = wheel;
    return (
        <Col>
            <Card style={{backgroundColor:"#4b6584", color:"white"}} >
                <Card.Img variant="top" height="300" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <p>Min-Order: <span className="fw-bold">{minOrder}</span></p>
                    <p>Available Quantity: <span className="fw-bold">{availableQuantity}</span></p>
                    <h4>price: <span className="fw-bold">${price} /piece</span></h4>

                    <Link to={`purchase/${_id}`} >
                        <Button style={{backgroundColor:"#2bcbba", border:"none"}} className='btn mt-3'  >Order Now</Button>
                    </Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Wheel;