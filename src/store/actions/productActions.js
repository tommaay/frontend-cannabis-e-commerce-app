import axios from 'axios';

export const GET_PRODUCTS_START = 'GET_PRODUCTS_START';
export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS';
export const GET_PRODUCTS_FAIL = 'GET_PRODUCTS_FAIL';

// Get all products
export const getProducts = () => dispatch => {
    dispatch({ type: GET_PRODUCTS_START });

    axios
        .get(`https://flower-co.herokuapp.com/api/products`)
        .then(res => {
            console.log('products', res.data);
            dispatch({ type: GET_PRODUCTS_SUCCESS, payload: res.data });
        })
        .catch(err => dispatch({ type: GET_PRODUCTS_FAIL, error: err }));
};
