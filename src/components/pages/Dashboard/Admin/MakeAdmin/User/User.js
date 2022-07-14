import React from 'react';
import { toast } from 'react-toastify';

const User = ({user, refetch, index}) => {

    const makeAdmin = () => {
        fetch(`https://piscine-choucroute-57860.herokuapp.com/user/admin/${user?.email}`, {
            method: 'PUT',
            // headers: {
            //     authorization: `Bearer ${localStorage.getItem('accessToken')}`
            // }
        })
            .then(res => {
                // if (res.status === 403) {
                //     toast.error('Failed to Make an admin');
                // }
                return res.json()
            })
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success(`Successfully made an admin`);
                }

            })
    }
    return (
        <tr key={user._id} >
            <td>{index + 1}</td>
            <td>{user?.email}</td>
            <td>
                {
                    user?.role !== 'admin' && <span style={{cursor:"pointer"}} onClick={makeAdmin} className="bg-primary text-white p-1">Make Admin</span>
                }
                <span style={{cursor:"pointer"}} className="bg-danger text-white ms-1 p-1">Delete</span>
            </td>


        </tr>
    );
};

export default User;