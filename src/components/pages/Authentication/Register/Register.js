import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { auth } from '../../../../firebase.init';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Form, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
import GoogleSignIn from '../GoogleSignIn/GoogleSignIn';
import useToken from '../../../hooks/useToken';

const Register = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";
    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [token]=useToken(user);


    if (token) {
        navigate(from, { replace: true });
    }


    const [updateProfile] = useUpdateProfile(auth);


    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        toast.success('email sent to verify your email address');
        await createUserWithEmailAndPassword(email, password);

        await updateProfile({ displayName: name });
    }
    return (
        <div style={{minHeight:"80vh"}} className='container w-50 mx-auto mb-5' >
            <h2 className='text-center element-color-light mt-2'>Please Register</h2>
                <Form onSubmit={handleRegister}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control name="name" type="text" placeholder="Your Name" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control name="email" type="email" placeholder="Your email" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control name="password" minLength={6} type="password" placeholder="Password" required />
                    </Form.Group>
                    <Button className="bg-btn w-50 mx-auto d-block mb-2" type="submit">
                        Register
                    </Button>
                </Form>
                <p className='element-color-dark' >Already have an account? <Link className='element-color-light' to="/login" >Login</Link> </p>
               <GoogleSignIn></GoogleSignIn> 
        </div>
    );
};

export default Register;