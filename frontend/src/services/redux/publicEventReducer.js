import { FETCH_ONLINE_EVENTS_REQUEST, FETCH_ONLINE_EVENTS_SUCCESS, FETCH_ONLINE_EVENTS_ERROR, 
FETCH_OFFLINE_EVENTS_REQUEST, FETCH_OFFLINE_EVENTS_SUCCESS, FETCH_OFFLINE_EVENTS_ERROR } from "./publicEventActions";

const initialState = {
    online: {
        events: [],
        loading: false,
        error: null,
    },
    offline: {
        events: [],
        loading: false,
        error: null,
    },
    // online_events: [],
    // offline_events: [],
    // loading: false,
    // error: null,
};  

const publicEventReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case FETCH_ONLINE_EVENTS_REQUEST:
            return{
                ...state,
                online: {
                    ...state.online,
                    loading: true,
                    error: null,
                },
            };

        case FETCH_OFFLINE_EVENTS_REQUEST:
            return{
                ...state,
                offline: {
                    ...state.offline,
                    loading: true,
                    error: null,
                },
            };

        case FETCH_ONLINE_EVENTS_SUCCESS:
            return{
                ...state,
                online: {
                    ...state.online,
                    loading: false,
                    events: action.payload,
                },
            };

        case FETCH_OFFLINE_EVENTS_SUCCESS:
            return{
                ...state,
                offline: {
                    ...state.offline,
                    loading: false,
                    events: action.payload,
                },
            };

        case FETCH_ONLINE_EVENTS_ERROR:
            return{
                ...state,
                online: {
                    ...state.online,
                    loading: false,
                    error: action.payload,
                },
            };

        case FETCH_OFFLINE_EVENTS_ERROR:
            return{
                ...state,
                offline: {
                    ...state.online,
                    loading: false,
                    error: action.payload,
                },
            };
    
        default:
            return state;
    }
}

export default publicEventReducer;