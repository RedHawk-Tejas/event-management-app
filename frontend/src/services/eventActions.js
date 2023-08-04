import axios from 'axios';

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
            const token = localStorage.getItem('token');
            const response = await axios.get(`http://localhost:9080/api/event/get_event_data/${userId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            const events = response.data;
            console.log(response);
            dispatch(fetchEventsSuccess(events));
        } catch (error) {
            console.log(error);
            dispatch(fetchEventsError(error));
        }
    }
}