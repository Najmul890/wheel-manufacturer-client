import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({ order }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [paymentSuccess, setPaymentSuccess] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState("");


    const {userName, email, totalPrice } = order;

    useEffect(() => {
        fetch('http://localhost:5000/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({totalPrice})
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data?.clientSecret){
                    setClientSecret(data.clientSecret);
                }
            })
    }, [totalPrice]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (elements == null) {
            return;
        }

        const card= elements.getElement(CardElement);

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: card,
        });

        setCardError(error?.message || '');
        setPaymentSuccess("");

        const {paymentIntent, error: intentError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  name: userName,
                  email: email
                },
              },
            },
          );

          if(intentError){
              setCardError(intentError?.message)
          }else{
              setCardError("");
              setTransactionId(paymentIntent.id);
              console.log(paymentIntent);
              setPaymentSuccess("Congrats! Your payment is completed")
          }

    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement />
                <button className='btn btn-success mt-3' type="submit" disabled={!stripe || !elements || !clientSecret}>
                    Pay
                </button>
            </form>
            {
                cardError && <p className="text-danger">{cardError}</p>
            }
            {
                paymentSuccess && 
                <div className='mt-3' >
                    <p className="text-success">{paymentSuccess}</p>
                    <p>Your transaction Id is <span  className="text-info fw-bold ms-3">{transactionId}</span></p>
                </div>
            }
        </>
    );
};

export default CheckoutForm;