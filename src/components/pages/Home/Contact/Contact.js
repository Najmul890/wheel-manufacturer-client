import React from 'react';

const Contact = () => {
    return (
        <div style={{backgroundColor:"#22a6b3"}} className='p-5 text-white' >
            <h3 style={{borderBottom:"1px solid white"}} className="text-center mb-5">Contact Us</h3>
            <div className="row">
                <div className="col-md-6 col-12 p-5">
                    <h4>Please feel free to contact with us.</h4>
                    <p>We are ready to provide best service to you.</p>
                </div>
                <div className="col-md-6 col-12">
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">Name</span>
                        <input type="text" class="form-control" placeholder="Your Name" aria-label="Your Name" aria-describedby="basic-addon1" />
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">Email</span>
                        <input type="text" class="form-control" placeholder="Your Email" aria-label="Your Email" aria-describedby="basic-addon1" />
                    </div>
                    <div style={{height:"100px"}} class="input-group">
                        <span class="input-group-text">Write Message</span>
                        <textarea class="form-control" aria-label="With textarea"></textarea>
                    </div>
                    <button style={{backgroundColor:"#2bcbba", border:"none",color:"white"}} className="btn mt-3">Send Message</button>
                </div>
            </div>
        </div>
    );
};

export default Contact;