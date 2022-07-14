import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../../shared/Loading/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_DTbOoAR2tAb0yA8V5ndxch8500bRxG5mVS');

const Payment = () => {
    const { id } = useParams();
    const url = `https://afternoon-taiga-42988.herokuapp.com/order/${id}`;

    const { data: order, isLoading } = useQuery(['order', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    

    if (isLoading) {
        return <Loading></Loading>
    }
    
    return (
        <div className="row mt-5">
            <div className="col-md-6 px-5">
                <h3 className="text-success">Order Details:</h3>
                <p className='fw-bold'>Hello, <span className="text-success">{order?.userName}</span>, your email: <span className="text-success">{order?.email}</span>, your phone: <span className="text-success">{order?.phone}</span>, you have ordered <span className="text-success">{order?.orderedWheel?.name}</span>, <span className="text-success">{order?.orderedQuantity}</span> pieces for <span className="text-success">${order?.totalPrice}</span></p>

                <p className='mt-5' >After complete the payment, the ordered products will be shifted in your address <span className="text-success">{order?.address}</span> </p>

            </div>
            <div className="col-md-6 px-5">
                <h3 className="text-success">Please Pay ${order?.totalPrice} </h3>
                <Elements stripe={stripePromise}>
                    <CheckoutForm order={order} />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;