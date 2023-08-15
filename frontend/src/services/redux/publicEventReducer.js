import {
  FETCH_ONLINE_EVENTS_REQUEST,
  FETCH_ONLINE_EVENTS_SUCCESS,
  FETCH_ONLINE_EVENTS_ERROR,
  FETCH_OFFLINE_EVENTS_REQUEST,
  FETCH_OFFLINE_EVENTS_SUCCESS,
  FETCH_OFFLINE_EVENTS_ERROR,
  MARK_ONLINE_EVENTS_AS_FETCHED,
  MARK_OFFLINE_EVENTS_AS_FETCHED
} from "./publicEventActions";

const initialState = {
  online: {
    events: [],
    loading: false,
    error: null,
    fetched: false,
  },
  offline: {
    events: [],
    loading: false,
    error: null,
    fetched: false,
  },
};

const publicEventReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ONLINE_EVENTS_REQUEST:
      return {
        ...state,
        online: {
          ...state.online,
          loading: true,
          error: null,
        },
      };

    case FETCH_OFFLINE_EVENTS_REQUEST:
      return {
        ...state,
        offline: {
          ...state.offline,
          loading: true,
          error: null,
        },
      };

    case FETCH_ONLINE_EVENTS_SUCCESS:
      return {
        ...state,
        online: {
          ...state.online,
          loading: false,
          events: action.payload,
        },
      };

    case FETCH_OFFLINE_EVENTS_SUCCESS:
      return {
        ...state,
        offline: {
          ...state.offline,
          loading: false,
          events: action.payload,
        },
      };

    case FETCH_ONLINE_EVENTS_ERROR:
      return {
        ...state,
        online: {
          ...state.online,
          loading: false,
          error: action.payload,
        },
      };

    case FETCH_OFFLINE_EVENTS_ERROR:
      return {
        ...state,
        offline: {
          ...state.offline,
          loading: false,
          error: action.payload,
        },
      };

    case MARK_ONLINE_EVENTS_AS_FETCHED:
      return {
        ...state,
        online: {
          ...state.online,
          fetched: true,
        },
      };

    case MARK_OFFLINE_EVENTS_AS_FETCHED:
      return {
        ...state,
        offline: {
          ...state.offline,
          fetched: true,
        },
      };

    default:
      return state;
  }
};

export default publicEventReducer;
