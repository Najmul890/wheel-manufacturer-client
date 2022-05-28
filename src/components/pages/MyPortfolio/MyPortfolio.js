import React from 'react';
import iceStorageImg from "../../../img/ice-storage.png";
import travelGuruImg from "../../../img/travel-guru.png";
import redOnionImg from "../../../img/red-onion.png";
import Project from './Project';


const projects = [
    {
        name: 'Ice Storage Management',
        id: 101,
        image: iceStorageImg,
        technology: 'React, firebase, Bootstrap, React Router, Node, Express, Mongodb',
        description: 'It is a MERN-stack website.This is a website of a product management  where various ice cream and cold drinks etc products are managed.',
        live:'https://ice-storage-management.web.app/'
    },
    {
        name: 'Travel Guru',
        id: 102,
        image: travelGuruImg,
        technology: 'React, firebase, React Router',
        description: 'It is a travel based react website , where the user can book a seat in a hotel via their travel destination',
        live:'https://travel-guru-f7d19.web.app/'
    },
    {
        name: 'Red Onion Restaurant',
        id: 103,
        image: redOnionImg,
        technology: 'React, firebase, Bootstrap, React Router',
        description: 'It is a online food selling restaurant website, where user can order breakfast, lunch and dinner items',
        live:'https://red-onion-890.web.app/'
    }
]

const MyPortfolio = () => {
    return (
        <div className='px-5 py-3' >
            <h2 className="text-center mb-2">My Portfolio</h2>
            <div className="row">
                <div className="col-md-3 px-3 bg-dark text-white">
                    <h4 className="text-success my-5 ">Md. Najmul Hossain Rajib</h4>
                    <p>Email: najmul890089@gmail.com</p>
                    <p>Education: BSC in Textile Engineering (4th year)</p>
                    <p className="text-info0 mt-5">
                        Skils: Javascript, React, Firebase, Node, Express, Mongodb, HTML, CSS, Bootstrap
                    </p>
                </div>
                <div style={{overflowY:'scroll',height:'500px'}} className="col-md-9 px-5">
                    <h3 className='text-success' >My Projects</h3>
                    <div>
                        {
                            projects.map(project=><Project key={project.id} project={project} ></Project>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;