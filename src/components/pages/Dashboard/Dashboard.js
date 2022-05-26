import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import { auth } from '../../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div className="row">
            <div className="col-md-2">
                {
                    !admin &&
                    <ul>

                        <li><Link to="/dashboard">My Orders</Link></li>
                        <li><Link to="/dashboard/addAReview">Add a review</Link></li>
                        <li><Link to="/dashboard/myProfile">My Profile</Link></li>



                    </ul>
                }
                {
                    admin &&
                    <ul>

                        <li><Link to="/dashboard">Manage Orders</Link></li>
                        <li><Link to="/dashboard/addAProduct">Add Product</Link></li>
                        <li><Link to="/dashboard/myProfile">My Profile</Link></li>



                    </ul>

                }

            </div>
            <div className="col-md-10">
                <h2 className='text-success'>Welcome to your Dashboard</h2>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;
