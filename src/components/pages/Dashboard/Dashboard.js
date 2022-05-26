import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="row">
            <div className="col-md-3">
            <ul>
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to="/dashboard">My Orders</Link></li>
                    <li><Link to="/dashboard/addAReview">Add a review</Link></li>
                    <li><Link to="/dashboard/manageOrders">Manage Orders</Link></li>
                    
                    
                </ul>

            </div>
            <div className="col-md-9">
            <h2 className='text-success'>Welcome to your Dashboard</h2>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;