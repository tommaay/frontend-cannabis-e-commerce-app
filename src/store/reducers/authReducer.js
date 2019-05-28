import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL } from '../actions/authActions';

const initialState = {
    user: null,
    error: null,
    loading: false,
    loggedIn: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_START:
            return {
                ...state,
                loading: true,
            };

        case LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload,
                loggedIn: true,
            };

        case LOGIN_FAIL:
            return {
                ...state,
                loading: false,
                error: action.error,
            };

        default:
            return state;
    }
};

export default authReducer;
