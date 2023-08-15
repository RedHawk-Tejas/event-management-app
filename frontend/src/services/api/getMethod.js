import axios from 'axios';

const BASE_URL = "http://localhost:9080"

export const handleGenerateOTP = async(email) => {
    try {
        const response = await axios.get(`${BASE_URL}/api/authentication/forgotPassword/${email}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}