import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Wheel from './Wheel/Wheel';

const Wheels = () => {
    const [wheels, setWheels] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/wheels')
            .then(res => res.json())
            .then(data => setWheels(data))
    }, [])
    return (
        <div>
            <h2 className='text-center my-5' > The Wheels We Manufacture </h2>
            <Row xs={1} md={2} lg={3} className="g-4">
                {
                   wheels.map(wheel=><Wheel key={wheel._id} wheel={wheel} ></Wheel>)
                }
            </Row>
        </div>
    );
};

export default Wheels;