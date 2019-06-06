import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    REGISTER_USER_START,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,
    REGISTER_ADMIN_START,
    REGISTER_ADMIN_SUCCESS,
    REGISTER_ADMIN_FAIL,
    UPDATE_USER_START,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_FAIL,
    LOGOUT,
} from '../actions/authActions';

const initialState = {
    user: null,
    error: null,
    loading: false,
    loggedIn: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        // Login
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

        // Register User
        case REGISTER_USER_START:
            return {
                ...state,
                loading: true,
            };

        case REGISTER_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload,
                loggedIn: true,
            };

        case REGISTER_USER_FAIL:
            return {
                ...state,
                loading: false,
                error: action.error,
            };

        // Register Admin
        case REGISTER_ADMIN_START:
            return {
                ...state,
                loading: true,
            };

        case REGISTER_ADMIN_SUCCESS:
            return {
                ...state,
                loading: false,
            };

        case REGISTER_ADMIN_FAIL:
            return {
                ...state,
                loading: false,
                error: action.error,
            };

        // Update user
        case UPDATE_USER_START:
            return {
                ...state,
                loading: true,
            };

        case UPDATE_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload,
            };

        case UPDATE_USER_FAIL:
            return {
                ...state,
                loading: false,
                error: action.error,
            };

        // Logout
        case LOGOUT:
            return {
                user: null,
                error: null,
                loading: false,
                loggedIn: false,
            };

        default:
            return state;
    }
};

export default authReducer;
