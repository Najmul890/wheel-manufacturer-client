import React from 'react';
import { Row } from 'react-bootstrap';
import SummeryItem from './SummeryItem/SummeryItem';
import flag from '../../../../img/flag.png';
import like from '../../../../img/like.png';
import audience from '../../../../img/audience.png';
import messenger from '../../../../img/messenger.png';


const summeryItems=[
    {
        icon:flag,
        id:'101',
        count:20,
        item:'Countries'
    },
    {
        icon:like,
        id:'102',
        count:2000,
        item:'Complete Orders'
    },
    {
        icon:audience,
        id:'103',
        count:1200,
        item:'Happy Clients'
    },
    {
        icon:messenger,
        id:'104',
        count:500,
        item:'Feedbacks'
    }
]

const BusinessSummery = () => {
    
    return (
        <div style={{backgroundColor:"#22a6b3"}} className='p-5 mt-5' >
            <h2 className='text-white text-center my-5' >More Than Thousands Car Industry Trust Us</h2>
            <Row xs={1} md={2} lg={4} className="g-5">
                {
                   summeryItems.map(summery=><SummeryItem key={summery.id} summery={summery} ></SummeryItem>)
                }
            </Row>
        </div>
    );
};

export default BusinessSummery;