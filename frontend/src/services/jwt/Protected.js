import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import { toastErrorOptions } from '../toast/config';
import { toast } from 'react-toastify';

const Protected = ({ children }) => {
    const navigate = useNavigate();

    useEffect(() => {

        const token = sessionStorage.getItem('TOKEN'); 
        const isAuthenticated = !!token;

        if (!isAuthenticated) {
            navigate('/');
            return;
        }

        try {
            const decodedToken = jwtDecode(token);
            const currentTime = Date.now() / 1000;

            if (decodedToken.exp < currentTime) {
                // Token has expired, show toast and redirect
                sessionStorage.removeItem('TOKEN');
                sessionStorage.removeItem('USER_ID');
                toast.error('Your session has expired. Please Login.', toastErrorOptions);
                navigate('/');
            }
        } catch (error) {
            // Error occurred while decoding token, show toast and redirect
            toast.error('An error occurred. Please log in again.', toastErrorOptions);
            navigate('/');
        }
    }, [navigate]);

    return children;
};

export default Protected;
