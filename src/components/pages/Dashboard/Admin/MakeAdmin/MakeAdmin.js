import React, { useEffect, useState } from 'react';

const MakeAdmin = () => {
    const [users, setUsers]=useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    return (
        <div>
            <h2>make admin {users.length} </h2>
        </div>
    );
};

export default MakeAdmin;