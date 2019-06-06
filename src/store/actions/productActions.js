import axios from 'axios';

export const GET_PRODUCTS_START = 'GET_PRODUCTS_START';
export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS';
export const GET_PRODUCTS_FAIL = 'GET_PRODUCTS_FAIL';

export const GET_ALL_BY_CATEGORY_PARAMS_START =
    'GET_ALL_BY_CATEGORY_PARAMS_START';
export const GET_ALL_BY_CATEGORY_PARAMS_SUCCESS =
    'GET_ALL_BY_CATEGORY_PARAMS_SUCCESS';
export const GET_ALL_BY_CATEGORY_PARAMS_FAIL =
    'GET_ALL_BY_CATEGORY_PARAMS_FAIL';

export const GET_ALL_BY_CATEGORY_START = 'GET_ALL_BY_CATEGORY_START';
export const GET_ALL_BY_CATEGORY_SUCCESS = 'GET_ALL_BY_CATEGORY_SUCCESS';
export const GET_ALL_BY_CATEGORY_FAIL = 'GET_ALL_BY_CATEGORY_FAIL';

export const GET_PRODUCT_BY_ID_START = 'GET_PRODUCT_BY_ID_START';
export const GET_PRODUCT_BY_ID_SUCCESS = 'GET_PRODUCT_BY_ID_SUCCESS';
export const GET_PRODUCT_BY_ID_FAIL = 'GET_PRODUCT_BY_ID_FAIL';

export const ADD_PRODUCT_START = 'ADD_PRODUCT_START';
export const ADD_PRODUCT_SUCCESS = 'ADD_PRODUCT_SUCCESS';
export const ADD_PRODUCT_FAIL = 'ADD_PRODUCT_FAIL';

export const ADD_CATEGORY_START = 'ADD_CATEGORY_START';
export const ADD_CATEGORY_SUCCESS = 'ADD_CATEGORY_SUCCESS';
export const ADD_CATEGORY_FAIL = 'ADD_CATEGORY_FAIL';

export const ADD_TYPE_START = 'ADD_TYPE_START';
export const ADD_TYPE_SUCCESS = 'ADD_TYPE_SUCCESS';
export const ADD_TYPE_FAIL = 'ADD_TYPE_FAIL';

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

// Filter products by category through url params
export const getAllByCategoryParams = (products, category) => dispatch => {
    dispatch({ type: GET_ALL_BY_CATEGORY_PARAMS_START });

    const productsByCategory = products.filter(
        product =>
            product.category.name
                .toLowerCase()
                .split(' ')
                .join('-') === category
    );

    dispatch({
        type: GET_ALL_BY_CATEGORY_PARAMS_SUCCESS,
        category: category,
    });

    if (!productsByCategory) {
        dispatch({
            type: GET_ALL_BY_CATEGORY_PARAMS_FAIL,
            error: 'Error getting prducts by category',
        });
    }

    return productsByCategory;
};

// Filter products by category through url params
export const getAllByCategory = (products, category) => dispatch => {
    dispatch({ type: GET_ALL_BY_CATEGORY_START });

    const productsByCategory = products.filter(
        product => product.category.name === category
    );

    dispatch({
        type: GET_ALL_BY_CATEGORY_SUCCESS,
        category: category,
    });

    if (!productsByCategory) {
        dispatch({
            type: GET_ALL_BY_CATEGORY_FAIL,
            error: 'Error getting prducts by category',
        });
    }

    return productsByCategory;
};

// Get product by ID
export const getProductById = id => async dispatch => {
    dispatch({ type: GET_PRODUCT_BY_ID_START });
    try {
        const res = await axios.get(
            `https://flower-co.herokuapp.com/api/products/${id}`
        );
        const product = await res.data;

        dispatch({ type: GET_PRODUCT_BY_ID_SUCCESS });

        return product;
    } catch (err) {
        dispatch({ type: GET_PRODUCT_BY_ID_FAIL, error: err });
    }
};

// Add a new product
export const addProduct = info => async dispatch => {
    dispatch({ type: ADD_PRODUCT_START });

    try {
        const res = await axios.post(
            `https://flower-co.herokuapp.com/api/products`,
            info
        );

        console.log('addProduct', res.data);

        const productId = res.data.id;

        console.log('productId', productId);

        dispatch({ type: ADD_PRODUCT_SUCCESS, payload: res.data });

        return productId;
    } catch (err) {
        dispatch({ type: ADD_PRODUCT_FAIL, error: err });

        return false;
    }
};

// Add a new category
export const addCategory = info => async dispatch => {
    dispatch({ type: ADD_CATEGORY_START });

    try {
        const res = await axios.post(
            `https://flower-co.herokuapp.com/api/categories`,
            info
        );

        dispatch({ type: ADD_CATEGORY_SUCCESS, payload: res.data });

        return true;
    } catch (err) {
        dispatch({ type: ADD_CATEGORY_FAIL, error: err });

        return false;
    }
};

// Add a new type
export const addType = info => async dispatch => {
    dispatch({ type: ADD_TYPE_START });

    try {
        const res = await axios.post(
            `https://flower-co.herokuapp.com/api/types`,
            info
        );

        dispatch({ type: ADD_TYPE_SUCCESS, payload: res.data });

        return true;
    } catch (err) {
        dispatch({ type: ADD_TYPE_FAIL, error: err });

        return false;
    }
};
