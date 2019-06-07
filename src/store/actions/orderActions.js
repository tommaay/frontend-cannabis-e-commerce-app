import axios from 'axios';

export const GET_ORDERS_START = 'GET_ORDERS_START';
export const GET_ORDERS_SUCCESS = 'GET_ORDERS_SUCCESS';
export const GET_ORDERS_FAIL = 'GET_ORDERS_FAIL';

export const ADD_ORDER_START = 'ADD_ORDER_START';
export const ADD_ORDER_SUCCESS = 'ADD_ORDER_SUCCESS';
export const ADD_ORDER_FAIL = 'ADD_ORDER_FAIL';

export const SET_ORDER_START = 'SET_ORDER_START';
export const SET_ORDER_SUCCESS = 'SET_ORDER_SUCCESS';
export const SET_ORDER_FAIL = 'SET_ORDER_FAIL';

// Get a list of all orders by the user's id
export const getOrders = userId => async dispatch => {
    dispatch({ type: GET_ORDERS_START });

    try {
        const res = await axios.get(
            `https://flower-co.herokuapp.com/api/orders/user/${userId}`
        );

        dispatch({ type: GET_ORDERS_SUCCESS, payload: res.data });
    } catch (err) {
        dispatch({ type: GET_ORDERS_FAIL, error: err });
    }
};

// Creates a new order
export const addOrder = (cartInfo, cartItems) => async dispatch => {
    dispatch({ type: ADD_ORDER_START });

    try {
        const res = await axios.post(
            `https://flower-co.herokuapp.com/api/orders`,
            cartInfo
        );
        const orderId = res.data.id;

        // Maps over each product in the cart and creates a product-order
        cartItems.map(async item => {
            const info = {
                order_id: orderId,
                product_id: item.id,
                spec_id: item.specs.id,
                quantity: item.quantity,
                total: item.quantity * item.specs.price,
            };

            await axios.post(
                `https://flower-co.herokuapp.com/api/product-orders`,
                info
            );
        });

        const order = await axios.get(
            `https://flower-co.herokuapp.com/api/orders/${orderId}`
        );

        dispatch({ type: ADD_ORDER_SUCCESS, payload: order.data });
    } catch (err) {
        dispatch({ type: ADD_ORDER_FAIL, error: err });
    }
};

// Gets an order by id and sets it in state to pass the data into the order modal
export const setOrder = id => async dispatch => {
    dispatch({ type: SET_ORDER_START });

    try {
        const res = await axios.get(
            `https://flower-co.herokuapp.com/api/orders/${id}`
        );

        dispatch({ type: SET_ORDER_SUCCESS, payload: res.data });
    } catch (err) {
        dispatch({ type: SET_ORDER_FAIL, error: err });
    }
};
