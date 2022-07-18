import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../../../../firebase.init';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate()

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/myOrders?email=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {

                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/');
                    }
                    return res.json()
                })
                .then(data => {

                    setOrders(data.reverse());
                });
        }
    }, [user]);

    const handleDeleteProduct = (id) => {
        const confirmToDelete = window.confirm('Are you sure, want to cancel this order?');
        if (confirmToDelete) {
            const url = `http://localhost:5000/order/${id}`;

            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remainingOrders = orders.filter(order => order._id !== id);
                        setOrders(remainingOrders);
                    }

                })
        }
    }



    return (
        <div className='container-fluid' >
            <h2 className='element-color-dark' >My Orders</h2>


            <div className="row">

                <div className="col-md-12">

                    <div className="row p-5">
                        <table className="table table-borderLess table-responsive">
                            <thead>
                                <tr>
                                    <th className="text-secondary text-left" scope="col">Sr No</th>
                                    <th className="text-secondary" scope="col">Image</th>
                                    <th className="text-secondary" scope="col">Ordered Wheel</th>
                                    <th className="text-secondary" scope="col">Price</th>
                                    <th className="text-secondary" scope="col">Quantity</th>
                                    <th className="text-secondary" scope="col">Total</th>
                                    <th className="text-secondary" scope="col">Action</th>


                                </tr>
                            </thead>
                            <tbody>
                                {
                                    orders.map((order, index) =>

                                        <tr key={order._id} >
                                            <td>{index + 1}</td>
                                            <td> <img width={50} src={order?.orderedWheel?.image} alt="" /> </td>
                                            <td>{order?.orderedWheel?.name}</td>
                                            <td>${order?.orderedWheel?.price}</td>
                                            <td>{order?.orderedQuantity}</td>
                                            <td>${order?.totalPrice}</td>
                                            <td>
                                                {
                                                    !order.paid && <Link to={`/dashboard/payment/${order._id}`} ><span className=" btn bg-btn text-white p-1">pay</span></Link>
                                                }
                                                {

                                                    order.paid && order.status==="shifted" ? <span className="element-bg-dark text-white p-1">Complete</span>
                                                    :
                                                    order.paid &&  <span className="element-bg-dark text-white p-1">Pending</span>
                                                }
                                                {
                                                    !order.paid && <span onClick={() => handleDeleteProduct(order?._id)} className="btn btn-danger text-white ms-1 p-1">cancel</span>
                                                }
                                            </td>



                                        </tr>
                                    )

                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyOrders;