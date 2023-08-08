import { combineReducers } from 'redux';
import eventReducer from './eventReducer';
import publicEventReducer from './publicEventReducer';

const rootReducer = combineReducers({
    events: eventReducer,
    allEvents: publicEventReducer,
});

export default rootReducer;