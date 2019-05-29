import {
    GET_PRODUCTS_START,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_FAIL,
} from '../actions/productActions';

const initialState = {
    products: [],
    categories: [],
    types: [],
    loading: false,
    error: false,
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

        default:
            return state;
    }
};

export default productReducer;
