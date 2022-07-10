import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../../shared/Loading/Loading';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../../../firebase.init';
import { toast } from 'react-toastify';
import GoogleSignIn from '../GoogleSignIn/GoogleSignIn';
import useToken from '../../../hooks/useToken';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation(); 
    const emailRef = useRef('');

    let from = location.state?.from?.pathname || "/";
    let errorElement;
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [token]=useToken(user);

    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
    

    if (loading) {
        return <Loading></Loading>
    }

    if(token){
        navigate(from, { replace: true });
    }

    
    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }



    const handleLogin = async(event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        await signInWithEmailAndPassword(email, password);
       
    }

    const navigateRegister = () => {
        navigate('/register');
    }

    const resetPassword = async() => {
        
        const email = emailRef.current.value;
        if (email) {
            
            await sendPasswordResetEmail(email);
            toast.success('Sent reset password email');
            
        }
        else{
            toast.error('please enter your email address');
        }
    }
    return (
        <div style={{minHeight:"80vh"}} className='container w-lg-50 w-50 mx-auto mb-5'>

            <h2 style={{color:"#22a6b3"}} className='text-center mt-2'>Please Login</h2>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control name="email" ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control name="password" type="password" placeholder="Password" required />
                </Form.Group>
                <Button style={{backgroundColor:"#2bcbba", border:"none"}} className="text-white w-50 mx-auto d-block mb-2" type="submit">
                    Login
                </Button>
            </Form>

            {errorElement}
            <p className='element-color-dark' >Didn't have an account? <Link to="/register" className='element-color-light fw-bold pe-auto text-decoration-none' onClick={navigateRegister}>Please Register</Link> </p>
            <p className="element-color-dark" >Forget Password? <button className='btn btn-link element-color-light pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</button> </p>
            <GoogleSignIn></GoogleSignIn>   
        </div>
    );
};

export default Login;