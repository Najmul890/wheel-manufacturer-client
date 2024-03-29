import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../../shared/Loading/Loading';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { auth } from '../../../../firebase.init';
import useToken from '../../../hooks/useToken';

const GoogleSignIn = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [token]=useToken(user);

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    let errorElement;

    if (loading) {
        return <Loading></Loading>
    }

    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message} </p>
    }

    if (token) {
        navigate(from, { replace: true });
    }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='w-50 element-bg-dark'></div>
                <p className='element-color-light mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className=' w-50 element-bg-dark'></div>
            </div>
            {errorElement}

            <div>
                <button style={{backgroundColor:"#2bcbba", border:"none"}} onClick={() => signInWithGoogle()} className="btn text-white">Sign in with google</button>

            </div>
        </div>
    );
};

export default GoogleSignIn;