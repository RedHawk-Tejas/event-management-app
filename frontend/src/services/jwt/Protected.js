import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Protected = ({children}) => {

    const navigate = useNavigate();

    useEffect(() => {
      
        const isAuthenticated = !!localStorage.getItem('token');

        if(!isAuthenticated){
            navigate('/');
        }

    }, [navigate])
    
  return children
}

export default Protected