import {
    ADD_TO_CART_START,
    ADD_TO_CART_SUCCESS,
    ADD_TO_CART_FAIL,
    REMOVE_FROM_CART_START,
    REMOVE_FROM_CART_SUCCESS,
    REMOVE_FROM_CART_FAIL,
    CLEAR_CART_START,
    CLEAR_CART_SUCCESS,
    REMOVE_PRODUCT_FROM_CART_START,
    REMOVE_PRODUCT_FROM_CART_SUCCESS,
    REMOVE_PRODUCT_FROM_CART_FAIL,
} from '../actions/cartActions';

const initialState = {
    cartItems: [],
    itemsInCart: {},
    subTotal: 0,
    loading: false,
    error: false,
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        // Add to cart
        case ADD_TO_CART_START:
            return {
                ...state,
                loading: true,
            };
        case ADD_TO_CART_SUCCESS:
            // If item id is not in itemsInCart, add a key with the id and value 1
            // Else add 1 to the value to the key that matches the product id
            if (!(action.product.specs.id in state.itemsInCart)) {
                state.itemsInCart[action.product.specs.id] = 1;
                action.product.quantity = 1;

                return {
                    ...state,
                    loading: false,
                    cartItems: [...state.cartItems, action.product],
                    subTotal: state.subTotal + action.product.specs.price,
                };
            } else {
                state.itemsInCart[action.product.specs.id] =
                    state.itemsInCart[action.product.specs.id] + 1;

                action.product.quantity = action.product.quantity + 1;

                return {
                    ...state,
                    loading: false,
                    cartItems: state.cartItems.map(item => {
                        if (item.specs.id === action.product.specs.id) {
                            item.quantity++;
                        }
                        return item;
                    }),
                    subTotal: state.subTotal + action.product.specs.price,
                };
            }
        case ADD_TO_CART_FAIL:
            return {
                ...state,
                loading: false,
                error: 'There was an error processing your request',
            };

        // Remove a single unit from cart
        case REMOVE_FROM_CART_START:
            return {
                ...state,
                loading: true,
            };
        case REMOVE_FROM_CART_SUCCESS:
            if (state.itemsInCart[action.spec.id] > 1) {
                state.itemsInCart[action.spec.id] -= 1;

                return {
                    ...state,
                    loading: false,
                    subTotal: state.subTotal - action.spec.price,
                };
            } else {
                delete state.itemsInCart[action.spec.id];

                return {
                    ...state,
                    cartItems: state.cartItems.filter(
                        product => product.specs.id !== action.spec.id
                    ),
                    loading: false,
                    subTotal: state.subTotal - action.spec.price,
                };
            }
        case REMOVE_FROM_CART_FAIL:
            return {
                ...state,
                loading: false,
                error: 'There was an error processing your request',
            };

        // Remove entire quantity of item from cart
        // case REMOVE_PRODUCT_FROM_CART_START:
        //     return {
        //         ...state,
        //         loading: true,
        //     };
        // case REMOVE_PRODUCT_FROM_CART_SUCCESS:
        //     delete state.itemsInCart[action.id];

        //     return {
        //         ...state,
        //         loading: false,
        //         cartItems: state.cartItems.filter(
        //             item => item.specs.id !== action.id
        //         ),
        //         itemsInCart: state.itemsInCart,
        //     };
        // case REMOVE_PRODUCT_FROM_CART_FAIL:
        //     return {
        //         ...state,
        //         loading: false,
        //         error: 'There was an error processing your request',
        //     };

        // Clear entire cart
        case CLEAR_CART_START:
            return {
                ...state,
                loading: true,
            };
        case CLEAR_CART_SUCCESS:
            return {
                cartItems: [],
                itemsInCart: {},
                subTotal: 0,
                loading: false,
                error: false,
            };

        default:
            return state;
    }
};

export default cartReducer;
