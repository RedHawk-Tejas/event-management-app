import axios from 'axios';

const BASE_URL = "http://localhost:9080"

export const handleDeleteEvent = async(eventId) => {
    try {
        const token = localStorage.getItem('TOKEN');
        const response = await axios.delete(`${BASE_URL}/api/event/delete_event/${eventId}`,{
            headers: {
                Authorization:  `Bearer ${token}`,
            },
        });
        return response.status;
    } catch (error) {
        console.log(error);
    }
}