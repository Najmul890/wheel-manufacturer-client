import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../../../../shared/Loading/Loading';
import User from './User/User';

const MakeAdmin = () => {
   
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://piscine-choucroute-57860.herokuapp.com/users', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }



    
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
                                    users.map((user,index) =>

                                        <User key={user._id} user={user} refetch={refetch} index={index} ></User>
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