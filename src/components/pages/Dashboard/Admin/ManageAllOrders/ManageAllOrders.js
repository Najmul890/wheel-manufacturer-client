import React, { useEffect, useState } from 'react';



const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);
    const [status, setStatus]=null;

    useEffect(() => {
        fetch('https://afternoon-taiga-42988.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data.reverse()))
    }, [])




    const handleDeleteOrder = (id) => {
        const confirmToDelete = window.confirm('Are you sure, want to delete this product?');
        if (confirmToDelete) {
            const url = `https://afternoon-taiga-42988.herokuapp.com/order/${id}`;

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
    
    
    const handleChangeStatus = (event, id) => {
        
        
        const orderStatus = {
            status: event.target.value
        }
        fetch(`https://afternoon-taiga-42988.herokuapp.com/orderStatus/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(orderStatus)
        }).then(res=>res.json())
        .then(data => {
            window.location.reload(false);
            
        })
    
    }
    return (
        <div className='container-fluid'>
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
                                    <th className="text-secondary" scope="col">Status / Action</th>


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
                                            <td className="text-white p-1">
                                                
                                                    
                                                        {
                                                            !order.paid && <span  className='element-bg-dark p-1'>Unpaid</span>
                                                        }

                                                        
                                                        {
                                                            order.paid && order.status==="shifted" ?
                                                            
                                                                <span className='element-bg-dark p-1'>Shifted</span>
                                                                :
                                                            
                                                                order.paid &&
                                                                <select onChange={event => handleChangeStatus(event, order._id)}>
                                                                    <option value="paid">Paid</option>
    
                                                                    <option value="shifted">Shifted</option>
                                                                </select>
                                                            
                                                        }

                                                    {
                                                        (!order.paid || order.status==="shifted") && <span onClick={() => handleDeleteOrder(order?._id)} className="btn btn-danger text-white ms-1 p-1">Delete</span>
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

export default ManageAllOrders;