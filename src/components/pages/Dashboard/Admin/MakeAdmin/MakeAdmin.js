import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../../../../shared/Loading/Loading';

const MakeAdmin = () => {
    // const [users, setUsers] = useState([]);

    // useEffect(() => {
    //     fetch('https://afternoon-taiga-42988.herokuapp.com/users')
    //         .then(res => res.json())
    //         .then(data => setUsers(data))
    // }, [])
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://afternoon-taiga-42988.herokuapp.com/users', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }



    // const makeAdmin = () => {
    //     fetch(`https://afternoon-taiga-42988.herokuapp.com/user/admin/${user?.email}`, {
    //         method: 'PUT',
    //         headers: {
    //             authorization: `Bearer ${localStorage.getItem('accessToken')}`
    //         }
    //     })
    //         .then(res => {
    //             if (res.status === 403) {
    //                 toast.error('Failed to Make an admin');
    //             }
    //             return res.json()
    //         })
    //         .then(data => {
    //             if (data.modifiedCount > 0) {
    //                 toast.success(`Successfully made an admin`);
    //             }

    //         })
    // }
    return (
        <div className='container-fluid' >
            <h2>Manage Users</h2>

            <div className="row">

                <div className="col-md-12">

                    <div className="row p-5">
                        <table className="table table-borderLess table-responsive">
                            <thead>
                                <tr>
                                    <th className="text-secondary text-left" scope="col">Sr No</th>
                                    <th className="text-secondary" scope="col">Email</th>
                                    <th className="text-secondary" scope="col">Action</th>


                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.map((user, index) =>

                                        <tr key={user._id} >
                                            <td>{index + 1}</td>
                                            <td>{user?.email}</td>
                                            <td>
                                                {
                                                    user?.role !== 'admin' && <span  className="bg-primary text-white p-1">Make Admin</span>
                                                }
                                                <span className="bg-danger text-white ms-1 p-1">Delete</span>
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

export default MakeAdmin;