import jwtDecode from 'jwt-decode'; 
import { useNavigate } from 'react-router-dom';

const CheckTokenExpiration = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    if (token) {
        const decodedToken = jwtDecode(token);
        const currentTime = Date.now() / 1000; 
        const tokenExpiry = decodedToken.exp; 

        const timeUntilExpiry = tokenExpiry - currentTime;

        if (timeUntilExpiry < 300) {
            setTimeout(() => {
                localStorage.removeItem('token');
                // Redirect to the login page
                navigate('/');
            }, timeUntilExpiry * 1000); // Convert to milliseconds
        }
    }
};

export default CheckTokenExpiration();
