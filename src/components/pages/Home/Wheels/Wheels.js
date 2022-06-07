import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Loading from '../../../shared/Loading/Loading';
import Wheel from './Wheel/Wheel';

const Wheels = () => {
    const [wheels, setWheels] = useState([]);
    useEffect(() => {
        fetch('https://afternoon-taiga-42988.herokuapp.com/wheels')
            .then(res => res.json())
            .then(data => setWheels(data))
    }, [])

    if (wheels.length === 0) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className='text-center my-5 text-info' > The Wheels We Manufacture </h2>
            <Row xs={1} md={2} lg={3} className="g-4">
                {
                    wheels.map(wheel => <Wheel key={wheel._id} wheel={wheel} ></Wheel>)
                }
            </Row>
        </div>
    );
};

export default Wheels;