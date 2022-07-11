import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);
    const [show, setShow] = useState(false);
    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleConfirm = (id) => {
        setShow(false);
        const url = `http://localhost:5000/order/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data =>{
                if(data.deletedCount > 0){
                    
                    const remaining = orders.filter(order => order._id !== id);
                    setOrders(remaining);
                }
            })

    }
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
                                            <td><span className="bg-primary text-white p-1">
                                                <select>
                                                    <option value="volvo">Unpaid</option>
                                                    <option value="saab">Pending</option>
                                                    <option value="saab">Shifted</option>
                                                    
                                                </select>
                                            </span>
                                                <span onClick={handleShow} className="btn btn-danger text-white ms-1 p-1">Delete</span></td>

                                                <Modal show={show} onHide={handleClose}>
                                                <Modal.Header closeButton>
                                                    {/* <Modal.Title></Modal.Title> */}
                                                </Modal.Header>
                                                <Modal.Body>Are you sure, want to cancel this order?</Modal.Body>
                                                <Modal.Footer>
                                                    <Button variant="secondary" onClick={handleClose}>
                                                        No
                                                    </Button>
                                                    <Button variant="primary" onClick={() => handleConfirm(order._id)}>
                                                        Yes
                                                    </Button>
                                                </Modal.Footer>
                                            </Modal>


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