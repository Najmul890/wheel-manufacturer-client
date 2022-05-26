import React, { useEffect, useState } from 'react';

const MakeAdmin = () => {
    const [users, setUsers]=useState([]);
    useEffect(() => {
        fetch('https://afternoon-taiga-42988.herokuapp.com/users')
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