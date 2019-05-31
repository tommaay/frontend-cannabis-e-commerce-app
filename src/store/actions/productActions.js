import axios from 'axios';

export const GET_PRODUCTS_START = 'GET_PRODUCTS_START';
export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS';
export const GET_PRODUCTS_FAIL = 'GET_PRODUCTS_FAIL';

export const GET_ALL_BY_CATEGORY_START = 'GET_ALL_BY_CATEGORY_START';
export const GET_ALL_BY_CATEGORY_SUCCESS = 'GET_ALL_BY_CATEGORY_SUCCESS';
export const GET_ALL_BY_CATEGORY_FAIL = 'GET_ALL_BY_CATEGORY_FAIL';

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

// Filter products by category
export const getAllByCategory = (products, category) => dispatch => {
    dispatch({ type: GET_ALL_BY_CATEGORY_START });

    const productsByCategory = products.filter(
        product =>
            product.category.name
                .toLowerCase()
                .split(' ')
                .join('-') === category
    );

    dispatch({
        type: GET_ALL_BY_CATEGORY_SUCCESS,
        category: category,
    });

    dispatch({
        type: GET_PRODUCTS_FAIL,
        error: 'Error getting prducts by category',
    });

    return productsByCategory;
};
