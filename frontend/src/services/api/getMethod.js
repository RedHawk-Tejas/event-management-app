import axios from 'axios';

const BASE_URL = "https://famfest-backend-production.up.railway.app"

export const handleGenerateOTP = async(email) => {
    try {
        console.log(email, "from get");
        const response = await axios.get(`${BASE_URL}/api/authentication/forgotPassword/${email}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}