import {
    FETCH_PAYMENT_DETAILS_REQUEST,
    FETCH_PAYMENT_DETAILS_SUCCESS,
    FETCH_PAYMENT_DETAILS_ERROR
} from "./paymentInfoAction";

const initialState = {
    transactions: [],
    loading: false,
    error: null,
}

const paymentDetailsReducer = ( state = initialState, action ) => {
    switch (action.type){
        case FETCH_PAYMENT_DETAILS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };

        case FETCH_PAYMENT_DETAILS_SUCCESS:
            return{
                ...state,
                loading: false,
                transactions: action.payload,
            };

        case FETCH_PAYMENT_DETAILS_ERROR:
            return{
                ...state,
                loading: false,
                error: action.payload,
            }

        default:
            return state;
    }
}

export default paymentDetailsReducer;