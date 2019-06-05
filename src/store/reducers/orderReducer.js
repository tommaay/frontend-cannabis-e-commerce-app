import {
    GET_ORDERS_START,
    GET_ORDERS_SUCCESS,
    GET_ORDERS_FAIL,
    ADD_ORDER_START,
    ADD_ORDER_SUCCESS,
    ADD_ORDER_FAIL,
} from '../actions/orderActions';

const initialState = {
    orders: [],
    loading: false,
    error: null,
};

const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        // Get list of all order for a user
        case GET_ORDERS_START:
            return {
                ...state,
                loading: true,
            };

        case GET_ORDERS_SUCCESS:
            return {
                ...state,
                loading: false,
                orders: action.payload,
            };

        case GET_ORDERS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.error,
            };

        // Add orders to database
        case ADD_ORDER_START:
            return {
                ...state,
                loading: true,
            };
        case ADD_ORDER_SUCCESS:
            return {
                ...state,
                loading: false,
                order: action.payload,
                paid: false,
            };
        case ADD_ORDER_FAIL:
            return {
                ...state,
                loading: false,
                error: action.error,
            };

        default:
            return state;
    }
};

export default orderReducer;