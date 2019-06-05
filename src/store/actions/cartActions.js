import axios from 'axios';

export const ADD_TO_CART_START = 'ADD_TO_CART_START';
export const ADD_TO_CART_SUCCESS = 'ADD_TO_CART_SUCCESS';
export const ADD_TO_CART_FAIL = 'ADD_TO_CART_FAIL';

export const REMOVE_FROM_CART_START = 'REMOVE_FROM_CART_START';
export const REMOVE_FROM_CART_SUCCESS = 'REMOVE_FROM_CART_SUCCESS';
export const REMOVE_FROM_CART_FAIL = 'REMOVE_FROM_CART_FAIL';

export const REMOVE_PRODUCT_START = 'REMOVE_PRODUCT_START';
export const REMOVE_PRODUCT_SUCCESS = 'REMOVE_PRODUCT_SUCCESS';
export const REMOVE_PRODUCT_FAIL = 'REMOVE_PRODUCT_FAIL';

export const CLEAR_CART_START = 'CLEAR_CART_START';
export const CLEAR_CART_SUCCESS = 'CLEAR_CART_SUCCESS';

export const ADD_ORDER_START = 'ADD_ORDER_START';
export const ADD_ORDER_SUCCESS = 'ADD_ORDER_SUCCESS';
export const ADD_ORDER_FAIL = 'ADD_ORDER_FAIL';

export const PAY_START = 'PAY_START';
export const PAY_SUCCESS = 'PAY_SUCCESS';
export const PAY_FAIL = 'PAY_FAIL';

export const addToCart = (productInfo, spec) => dispatch => {
    dispatch({ type: ADD_TO_CART_START });

    const product = { ...productInfo };
    product.specs = spec;

    dispatch({ type: ADD_TO_CART_SUCCESS, product: product });

    if (!product) {
        dispatch({ type: ADD_TO_CART_FAIL });
    }
};

export const removeFromCart = spec => dispatch => {
    dispatch({ type: REMOVE_FROM_CART_START });

    dispatch({ type: REMOVE_FROM_CART_SUCCESS, spec: spec });

    if (!spec) {
        dispatch({ type: REMOVE_FROM_CART_FAIL });
    }
};

export const removeProduct = id => dispatch => {
    dispatch({ type: REMOVE_PRODUCT_START });

    dispatch({ type: REMOVE_PRODUCT_SUCCESS, id: id });

    if (!id) {
        dispatch({ type: REMOVE_PRODUCT_FAIL });
    }
};

export const clearCart = () => dispatch => {
    dispatch({ type: CLEAR_CART_START });

    dispatch({ type: CLEAR_CART_SUCCESS });
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
