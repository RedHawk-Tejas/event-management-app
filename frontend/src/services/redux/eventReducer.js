import { 
    FETCH_EVENTS_SUCCESS, 
    FETCH_EVENTS_REQUEST, 
    FETCH_EVENTS_ERROR,
    MARK_EVENTS_AS_FETCHED
} from "./eventActions";

const initialState = {
    events: [],
    loading: false,
    error: null,
    fetched: false,
};

const eventReducer = ( state = initialState, action ) => {
    switch(action.type) {
        case FETCH_EVENTS_REQUEST:
            return{
                ...state,
                loading: true,
                error: null,
            };

        case FETCH_EVENTS_SUCCESS:
            return{
                ...state,
                loading: false,
                events: action.payload,
            };

        case FETCH_EVENTS_ERROR:
            return{
                ...state,
                loading: false,
                error: action.payload,
            };

        case MARK_EVENTS_AS_FETCHED:
            return{
                ...state,
                fetched: true,
            };

        default:
            return state;
    }
}

export default eventReducer;