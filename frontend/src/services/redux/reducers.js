import { combineReducers } from 'redux';
import eventReducer from './eventReducer';
import publicEventReducer from './publicEventReducer';
import paymentDetailsReducer from './paymentInfoReducer';
import accountDetails from './accDetailsReducer';

const rootReducer = combineReducers({
    events: eventReducer,
    allEvents: publicEventReducer,
    payments: paymentDetailsReducer,
    account: accountDetails,
});

export default rootReducer;