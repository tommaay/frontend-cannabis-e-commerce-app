import axios from 'axios';

export const GET_PRODUCTS_START = 'GET_PRODUCTS_START';
export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS';
export const GET_PRODUCTS_FAIL = 'GET_PRODUCTS_FAIL';

// Get all products, categories, types
export const getProducts = () => async dispatch => {
    dispatch({ type: GET_PRODUCTS_START });

    try {
        let res = await axios.get(
            `https://flower-co.herokuapp.com/api/products`
        );
        const products = await res.data;

        res = await axios.get(`https://flower-co.herokuapp.com/api/categories`);
        const categories = await res.data;

        res = await axios.get(`https://flower-co.herokuapp.com/api/types`);
        const types = await res.data;

        dispatch({ type: GET_PRODUCTS_SUCCESS, products, categories, types });
    } catch (err) {
        dispatch({ type: GET_PRODUCTS_FAIL, error: err });
    }
};
