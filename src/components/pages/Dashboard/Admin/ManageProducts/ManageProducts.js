import React, { useEffect, useState } from 'react';

const ManageProducts = () => {
    const [wheels, setWheels] = useState([]);
    useEffect(() => {
        fetch('https://piscine-choucroute-57860.herokuapp.com/wheels')
            .then(res => res.json())
            .then(data => setWheels(data))
    }, [])


    const handleDeleteWheel = (id) => {
        const confirmToDelete = window.confirm('Are you sure, want to delete this product?');
        if (confirmToDelete) {
            const url = `https://piscine-choucroute-57860.herokuapp.com/wheel/${id}`;

            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remainingWheels = wheels.filter(wheel => wheel._id !== id);
                        setWheels(remainingWheels);
                    }

                })
        }
    }
    return (
        <div>
            <h2>manage products</h2>
            <div className="row">

                <div className="col-md-12">

                    <div className="row p-5">
                        <table className="table table-borderLess table-responsive">
                            <thead>
                                <tr>
                                    <th className="text-secondary text-left" scope="col">Sr No</th>
                                    <th className="text-secondary" scope="col">Image</th>
                                    <th className="text-secondary" scope="col">Title</th>
                                    <th className="text-secondary" scope="col">Price</th>
                                    <th className="text-secondary" scope="col">Stock</th>
                                    <th className="text-secondary" scope="col">Action</th>


                                </tr>
                            </thead>
                            <tbody>
                                {
                                    wheels.map((wheel, index) =>

                                        <tr key={wheel._id} >
                                            <td>{index + 1}</td>
                                            <td> <img width={50} src={wheel?.image} alt="" /> </td>
                                            <td>{wheel?.name}</td>
                                            <td>${wheel?.price}</td>
                                            <td>{wheel?.availableQuantity}</td>
                                            <td><button onClick={() => handleDeleteWheel(wheel?._id)} className="bg-btn">Delete</button></td>
                                                                                      
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

export default ManageProducts;