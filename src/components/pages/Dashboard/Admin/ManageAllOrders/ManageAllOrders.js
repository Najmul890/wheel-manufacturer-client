import React, { useEffect, useState } from 'react';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('https://afternoon-taiga-42988.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    return (
        <div className='container-fluid' >
            <h2>Manage Orders</h2>

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
                                            <td><span className="bg-primary text-white p-1">pay</span> <span className="bg-danger text-white ms-1 p-1">cancel</span></td>


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

export default ManageAllOrders;