import { combineReducers } from 'redux';
import eventReducer from './eventReducer';
import publicEventReducer from './publicEventReducer';
import paymentDetailsReducer from './paymentInfoReducer';

const rootReducer = combineReducers({
    events: eventReducer,
    allEvents: publicEventReducer,
    payments: paymentDetailsReducer,
});

export default rootReducer;