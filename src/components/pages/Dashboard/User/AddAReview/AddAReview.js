import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { auth } from '../../../../../firebase.init';

const AddAReview = () => {
    const [user]=useAuthState(auth);
    const navigate= useNavigate();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch('https://afternoon-taiga-42988.herokuapp.com/addAReview', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data =>{
            navigate("/");
            toast.success('successfully added a review');
        })
    }
    return (
        <div>
            <h2>Add a review </h2>
            <form className='w-50 mt-5' onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <input className='form-control' value={user?.displayName} readOnly {...register("name", { required: true })} />
                    
                </div>
                <div className="mb-3">
                    <input className='form-control' value={user?.email} readOnly {...register("email", { required: true })} />
                    
                </div>
                <div className="mb-3">
                    <input className='form-control' placeholder='write a review' {...register("review", { required: true })} />
                    {errors.review && <span className='text-danger' >Put a review</span>}
                </div>

                <input className='btn btn-success' type="submit" />
            </form>
        </div>
    );
};

export default AddAReview;