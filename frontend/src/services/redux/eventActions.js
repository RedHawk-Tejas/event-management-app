import axios from 'axios';

const BASE_URL = "http://localhost:9080"

export const FETCH_EVENTS_REQUEST = 'FETCH_EVENTS_REQUEST';
export const FETCH_EVENTS_SUCCESS = 'FETCH_EVENTS_SUCCESS';
export const FETCH_EVENTS_ERROR = 'FETCH_EVENTS_ERROR';

export const fetchEventsRequest = () => ({
    type: FETCH_EVENTS_REQUEST,
});
  
export const fetchEventsSuccess = (events) => ({
    type: FETCH_EVENTS_SUCCESS,
    payload: events,
});
  
export const fetchEventsError = (error) => ({
    type: FETCH_EVENTS_ERROR,
    payload: error,
});

export const fetchEventsBasedOnUserId = (userId) => {
    return async(dispatch) => {
        try {
            dispatch(fetchEventsRequest());
            const token = sessionStorage.getItem('TOKEN');
            const response = await axios.get(`${BASE_URL}/api/event/get_event_data/${userId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            const events = response.data;
            dispatch(fetchEventsSuccess(events));
        } catch (error) {
            console.log(error);
            dispatch(fetchEventsError(error));
        }
    }
}