import React, { useEffect, useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { auth } from '../../../firebase.init';

const Purchase = () => {
    const [user]=useAuthState(auth);
    const { id } = useParams();
    const [wheel, setWheel]=useState({});
    const {name,image,description,price,minOrder,availableQuantity}=wheel;
    
    const [orderQuantity, setOrderQuantity]=useState("");
    const [error, setError]=useState('');
    const [btnDisable, setBtnDisable]=useState(true);
    const navigate= useNavigate();

    useEffect( () =>{
        const url = `https://afternoon-taiga-42988.herokuapp.com/wheel/${id}`;
        fetch(url)
        .then(res=> res.json())
        .then(data => setWheel(data));

    }, [])

    const handleOrderQuantityChange=(event)=>{
        if(event.target.value<minOrder){
            setOrderQuantity("")
            setError(`minimum order ${minOrder} pieces or more`)
            setBtnDisable(true)
        }else if(event.target.value>availableQuantity){
            setOrderQuantity("")
            setError(`sorry available pieces for this item ${availableQuantity}`)
            setBtnDisable(true)
        }else{
            setOrderQuantity(event.target.value);
            setError("")
            setBtnDisable(false)
        }
        
    }
    const totalAmount=(parseInt(orderQuantity))*price;

    const handlePlaceOrder=(event)=>{
        event.preventDefault();
        
        const order={
            userName:user?.displayName,
            email:user?.email,
            phone:event.target.phone.value,
            address:event.target.address.value,
            orderedQuantity:orderQuantity,
            totalPrice:totalAmount,
            orderedWheel:wheel
        }

        fetch('https://afternoon-taiga-42988.herokuapp.com/placeOrder', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data =>{
            navigate("/");
            setOrderQuantity("");
            toast.success('Your order has placed successfully!!!');
            event.target.reset();
        })
    }
    return (
        <div className="container row">
            <div className="col-lg-6">
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

                </Card.Body>
            </Card>
            </div>
            <div className="col-lg-6">
            <Form onSubmit={handlePlaceOrder}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control name="user"  type="text" value={user?.displayName} required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control name="email" type="email" value={user?.email} required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control name="phone" type="text" placeholder='your phone number' required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control name="address" type="text" placeholder='your address' required />
                </Form.Group>
                <label htmlFor="order quantity">Order Quantity:</label>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control onChange={handleOrderQuantityChange} name="orderQuantity" type="number"  placeholder={`min order ${minOrder} pieces`}   required />
                </Form.Group>
                {
                    orderQuantity && <p className="text-success">{`Total amount of ${orderQuantity} pieces of this item is $${totalAmount} `}</p>
                }
                <p className="text-danger">{error}</p>
                <Button disabled={btnDisable} className="text-white element-bg w-50 mx-auto d-block mb-2" type="submit">
                    Place Order
                </Button>
            </Form>
            </div>
        </div>
    );
};

export default Purchase;