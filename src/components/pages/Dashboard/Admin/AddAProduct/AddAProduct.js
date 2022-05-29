import React from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddAProduct = () => {
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const imgStorageApiKey = '70a6e5359137fba020727d1261b7a4a4';
    const onSubmit = data => {
        console.log(data);
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imgStorageApiKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const image = result.data.url;
                    const wheel = {
                        name: data.name,
                        image: image,
                        description: data.description,
                        minOrder: data.minOrder,
                        availableQuantity: data.availableQuantity,
                        price: data.price,

                    }
                    //send to database
                    fetch('http://localhost:5000/wheel', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(wheel)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted.insertedId) {
                                navigate("/");
                                toast.success('successfully added a Wheel');
                                reset();
                            }
                        })
                }
            })
    }

    return (
        <div>
            <h2>Add a product</h2>

            <form className='w-50 mt-5' onSubmit={handleSubmit(onSubmit)}>

                <div className="mb-3">
                    <input className='form-control' placeholder='Product Name' {...register("name", { required: true })} />
                    {errors.name && <span className='text-danger' >Product name is required</span>}
                </div>
                <div className="mb-3">
                    <label htmlFor="image">Upload an image:</label>
                    <input type="file" className='form-control mt-2' placeholder='choose a image' {...register("image", { required: true })} />
                    {errors.image && <span className='text-danger' >Put an image</span>}
                </div>
                <div className="mb-3">
                    <input className='form-control' placeholder='Write a short description about the product' {...register("description", { required: true })} />
                    {errors.description && <span className='text-danger' >Put a short description</span>}
                </div>
                <div className="mb-3">
                    <input className='form-control' placeholder='Minimum order quantity' {...register("minOrder", { required: true })} />
                    {errors.minOrder && <span className='text-danger' >This field is required</span>}
                </div>
                <div className="mb-3">
                    <input className='form-control' placeholder='Available product quantity' {...register("availableQuantity", { required: true })} />
                    {errors.availableQuantity && <span className='text-danger' >This field is required</span>}
                </div>
                <div className="mb-3">
                    <input className='form-control' placeholder='Product price' {...register("price", { required: true })} />
                    {errors.price && <span className='text-danger' >Put the product price</span>}
                </div>


                <input className='btn btn-success' type="submit" />
            </form>
        </div>
    );
};

export default AddAProduct;