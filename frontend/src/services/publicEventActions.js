import axios from 'axios';

export const FETCH_ONLINE_EVENTS_REQUEST = 'FETCH_ONLINE_EVENTS_REQUEST';
export const FETCH_ONLINE_EVENTS_SUCCESS = 'FETCH_ONLINE_EVENTS_SUCCESS';
export const FETCH_ONLINE_EVENTS_ERROR = 'FETCH_ONLINE_EVENTS_ERROR';

export const FETCH_OFFLINE_EVENTS_REQUEST = 'FETCH_OFFLINE_EVENTS_REQUEST';
export const FETCH_OFFLINE_EVENTS_SUCCESS = 'FETCH_OFFLINE_EVENTS_SUCCESS';
export const FETCH_OFFLINE_EVENTS_ERROR = 'FETCH_OFFLINE_EVENTS_ERROR';

export const fetchOnlineEventRequest = () => ({
    type: FETCH_ONLINE_EVENTS_REQUEST,
});

export const fetchOnlineEventSuccess = (online_events) => ({
    type: FETCH_ONLINE_EVENTS_SUCCESS,
    payload: online_events,
});

export const fetchOnlineEventError = (error) => ({
    type: FETCH_ONLINE_EVENTS_ERROR,
    payload: error,
});

export const fetchOfflineEventRequest = () => ({
    type: FETCH_OFFLINE_EVENTS_REQUEST,
});

export const fetchOfflineEventSuccess = (offline_events) => ({
    type: FETCH_OFFLINE_EVENTS_SUCCESS,
    payload: offline_events,
});

export const fetchOfflineEventError = (error) => ({
    type: FETCH_OFFLINE_EVENTS_ERROR,
    payload: error,
});

export const fetchOnlineEvents = () => {
    return async(dispatch) => {
        try {
            dispatch(fetchOnlineEventRequest());
            const onlineEventResponse = await axios.get('http://localhost:9080/api/famfest/online_events');
            const onlineEvent = onlineEventResponse.data;
            dispatch(fetchOnlineEventSuccess(onlineEvent));
        } catch (error) {
            console.log(error);
            dispatch(fetchOnlineEventError(error));
        }
    };
};

export const fetchOfflineEvents = () => {
    return async(dispatch) => {
        try {
            dispatch(fetchOfflineEventRequest());
            const offlineEventResponse = await axios.get('http://localhost:9080/api/famfest/offline_events');
            const offlineEvent = offlineEventResponse.data;
            dispatch(fetchOfflineEventSuccess(offlineEvent));
        } catch (error) {
            console.log(error);
            dispatch(fetchOfflineEventError(error));
        }
    };
};