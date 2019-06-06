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
    GET_PRODUCT_BY_ID_START,
    GET_PRODUCT_BY_ID_SUCCESS,
    GET_PRODUCT_BY_ID_FAIL,
    ADD_PRODUCT_START,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_FAIL,
    ADD_CATEGORY_START,
    ADD_CATEGORY_SUCCESS,
    ADD_CATEGORY_FAIL,
    ADD_TYPE_START,
    ADD_TYPE_SUCCESS,
    ADD_TYPE_FAIL,
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
        // Get list of products
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

        // Get products by category with parameters
        case GET_ALL_BY_CATEGORY_PARAMS_START:
            return {
                ...state,
                loading: true,
            };
        case GET_ALL_BY_CATEGORY_PARAMS_SUCCESS:
            return {
                ...state,
                loading: false,
                category: action.category,
            };
        case GET_ALL_BY_CATEGORY_PARAMS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.error,
            };

        // Get all by category
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

        // Get product by id
        case GET_PRODUCT_BY_ID_START:
            return {
                ...state,
                loading: true,
            };
        case GET_PRODUCT_BY_ID_SUCCESS:
            return {
                ...state,
                loading: false,
            };
        case GET_PRODUCT_BY_ID_FAIL:
            return {
                ...state,
                loading: false,
                error: action.error,
            };

        // Add a product
        case ADD_PRODUCT_START:
            return {
                ...state,
                loading: true,
            };
        case ADD_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                products: [...state.products, action.payload],
            };
        case ADD_PRODUCT_FAIL:
            return {
                ...state,
                loading: false,
                error: action.error,
            };

        // Add a category
        case ADD_CATEGORY_START:
            return {
                ...state,
                loading: true,
            };
        case ADD_CATEGORY_SUCCESS:
            return {
                ...state,
                loading: false,
                categories: [...state.categories, action.payload],
            };
        case ADD_CATEGORY_FAIL:
            return {
                ...state,
                loading: false,
                error: action.error,
            };

        // Add a type
        case ADD_TYPE_START:
            return {
                ...state,
                loading: true,
            };
        case ADD_TYPE_SUCCESS:
            return {
                ...state,
                loading: false,
                types: [...state.types, action.payload],
            };
        case ADD_TYPE_FAIL:
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
