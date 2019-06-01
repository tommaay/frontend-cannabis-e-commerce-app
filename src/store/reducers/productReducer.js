import {
    GET_PRODUCTS_START,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_FAIL,
    GET_ALL_BY_CATEGORY_PARAMS_START,
    GET_ALL_BY_CATEGORY_PARAMS_SUCCESS,
    GET_ALL_BY_CATEGORY_PARAMS_FAIL,
    GET_ALL_BY_CATEGORY_START,
    GET_ALL_BY_CATEGORY_SUCCESS,
    GET_ALL_BY_CATEGORY_FAIL,
} from '../actions/productActions';

const initialState = {
    products: [],
    categories: [],
    types: [],
    loading: false,
    error: false,
    category: '',
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS_START:
            return {
                ...state,
                loading: true,
            };

        case GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                products: action.products,
                categories: action.categories,
                types: action.types,
            };

        case GET_PRODUCTS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.error,
            };

        case GET_ALL_BY_CATEGORY_START:
            return {
                ...state,
                loading: true,
            };

        case GET_ALL_BY_CATEGORY_SUCCESS:
            return {
                ...state,
                loading: false,
                category: action.category,
            };

        case GET_ALL_BY_CATEGORY_FAIL:
            return {
                ...state,
                loading: false,
                error: action.error,
            };

        default:
            return state;
    }
};

export default productReducer;
