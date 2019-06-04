import axios from 'axios';

export const ADD_TO_CART_START = 'ADD_TO_CART_START';
export const ADD_TO_CART_SUCCESS = 'ADD_TO_CART_SUCCESS';
export const ADD_TO_CART_FAIL = 'ADD_TO_CART_FAIL';

export const REMOVE_FROM_CART_START = 'REMOVE_FROM_CART_START';
export const REMOVE_FROM_CART_SUCCESS = 'REMOVE_FROM_CART_SUCCESS';
export const REMOVE_FROM_CART_FAIL = 'REMOVE_FROM_CART_FAIL';

export const REMOVE_PRODUCT_FROM_CART_START = 'REMOVE_PRODUCT_FROM_CART_START';
export const REMOVE_PRODUCT_FROM_CART_SUCCESS =
    'REMOVE_PRODUCT_FROM_CART_SUCCESS';
export const REMOVE_PRODUCT_FROM_CART_FAIL = 'REMOVE_PRODUCT_FROM_CART_FAIL';

export const CLEAR_CART_START = 'CLEAR_CART_START';
export const CLEAR_CART_SUCCESS = 'CLEAR_CART_SUCCESS';

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

export const removeProductFromCart = specId => dispatch => {
    // dispatch({ type: REMOVE_PRODUCT_FROM_CART_START });

    console.log('specId', specId);

    // dispatch({ type: REMOVE_PRODUCT_FROM_CART_SUCCESS, id: specId });

    // if (!specId) {
    //     dispatch({ type: REMOVE_PRODUCT_FROM_CART_FAIL });
    // }
};

export const clearCart = () => dispatch => {
    dispatch({ type: CLEAR_CART_START });

    dispatch({ type: CLEAR_CART_SUCCESS });
};
