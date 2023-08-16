import axios from 'axios';

const BASE_URL = "http://localhost:9080"

export const FETCH_ACCOUNT_DETAILS_REQUEST = 'FETCH_ACCOUNT_DETAILS_REQUEST';
export const FETCH_ACCOUNT_DETAILS_SUCCESS = 'FETCH_ACCOUNT_DETAILS_SUCCESS';
export const FETCH_ACCOUNT_DETAILS_ERROR = 'FETCH_ACCOUNT_DETAILS_ERROR';

export const fetchAccountDetailsRequest = () => ({
    type: FETCH_ACCOUNT_DETAILS_REQUEST,
});
  
export const fetchAccountDetailsSuccess = (account) => ({
    type: FETCH_ACCOUNT_DETAILS_SUCCESS,
    payload: account,
});
  
export const fetchAccountDetailsError = (error) => ({
    type: FETCH_ACCOUNT_DETAILS_ERROR,
    payload: error,
});

export const fetchAccountDetailsBasedOnUserId = (userId) => {
    return async(dispatch) => {
        try {
            dispatch(fetchAccountDetailsRequest());
            const token = sessionStorage.getItem('TOKEN');
            const response = await axios.get(`${BASE_URL}/api/authentication/UserDetails/${userId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            const details = response.data;
            dispatch(fetchAccountDetailsSuccess(details));
        } catch (error) {
            console.log(error);
            dispatch(fetchAccountDetailsError(error));
        }
    }
}