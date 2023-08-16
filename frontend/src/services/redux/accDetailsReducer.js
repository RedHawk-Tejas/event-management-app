import {
    FETCH_ACCOUNT_DETAILS_REQUEST,
    FETCH_ACCOUNT_DETAILS_SUCCESS,
    FETCH_ACCOUNT_DETAILS_ERROR
} from './accDetailsAction';

const initialState = {
    details: [],
    loading: false,
    error: null,
};

const accountDetails = ( state = initialState, action ) => {
    switch(action.type) {
        case FETCH_ACCOUNT_DETAILS_REQUEST:
            return{
                ...state,
                loading: true,
                error: null,
            };

        case FETCH_ACCOUNT_DETAILS_SUCCESS:
            return{
                ...state,
                loading: false,
                details: action.payload,
            };

        case FETCH_ACCOUNT_DETAILS_ERROR:
            return{
                ...state,
                loading: false,
                error: action.payload,
            };

        default:
            return state;
    }
}

export default accountDetails;