import axios from 'axios';

export const GET_ORDERS_START = 'GET_ORDERS_START';
export const GET_ORDERS_SUCCESS = 'GET_ORDERS_SUCCESS';
export const GET_ORDERS_FAIL = 'GET_ORDERS_FAIL';

export const ADD_ORDER_START = 'ADD_ORDER_START';
export const ADD_ORDER_SUCCESS = 'ADD_ORDER_SUCCESS';
export const ADD_ORDER_FAIL = 'ADD_ORDER_FAIL';

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

export const addOrder = (cartInfo, cartItems) => async dispatch => {
    dispatch({ type: ADD_ORDER_START });

    try {
        const res = await axios.post(
            `https://flower-co.herokuapp.com/api/orders`,
            cartInfo
        );
        const orderId = res.data.id;

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

        dispatch({ type: ADD_ORDER_SUCCESS, payload: res.data });
    } catch (err) {
        dispatch({ type: ADD_ORDER_FAIL, error: err });
    }
};
