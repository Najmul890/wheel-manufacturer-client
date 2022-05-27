import React from 'react';

const Project = ({project}) => {
    const {name, image, description, live}= project;
    return (
        <div className='row bg-dark p-5 mb-5 text-white' >
            <div className="col-md-6">
                <h4 className="text-success">{name}</h4>
                <p>{description}</p>
                <a className='text-info' href={live} target="_blank" >Live-site: {live}</a>
            </div>
            <div className="col-md-6">
                <img className='img-fluid' src={image} alt="" />
            </div>
        </div>
    );
};

export default Project;