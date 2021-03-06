import {
    ADD_TO_CART_START,
    ADD_TO_CART_SUCCESS,
    ADD_TO_CART_FAIL,
    REMOVE_FROM_CART_START,
    REMOVE_FROM_CART_SUCCESS,
    REMOVE_FROM_CART_FAIL,
    CLEAR_CART_START,
    CLEAR_CART_SUCCESS,
    REMOVE_PRODUCT_START,
    REMOVE_PRODUCT_SUCCESS,
    REMOVE_PRODUCT_FAIL,
} from '../actions/cartActions';

import { LOGOUT } from '../actions/authActions';

const initialState = {
    cartItems: [],
    itemsInCart: {},
    subtotal: 0,
    tax: 0,
    taxRate: 0.3,
    delivery: 1000,
    loading: false,
    error: false,
    order: null,
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
                    subtotal: state.subtotal + action.product.specs.price,
                    tax:
                        (state.subtotal +
                            state.delivery +
                            action.product.specs.price) *
                        state.taxRate,
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
                    subtotal: state.subtotal + action.product.specs.price,
                    tax:
                        (state.subtotal +
                            state.delivery +
                            action.product.specs.price) *
                        state.taxRate,
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
            // If there is more than 1 of this product in the cart
            if (state.itemsInCart[action.spec.id] > 1) {
                state.itemsInCart[action.spec.id] -= 1;

                return {
                    ...state,
                    loading: false,
                    subtotal: state.subtotal - action.spec.price,
                    tax:
                        (state.subtotal + state.delivery - action.spec.price) *
                        state.taxRate,
                };
                // If there is only 1 of this product left in the cart
            } else {
                delete state.itemsInCart[action.spec.id];

                return {
                    ...state,
                    cartItems: state.cartItems.filter(
                        product => product.specs.id !== action.spec.id
                    ),
                    loading: false,
                    subtotal: state.subtotal - action.spec.price,
                    tax:
                        (state.subtotal + state.delivery - action.spec.price) *
                        state.taxRate,
                };
            }
        case REMOVE_FROM_CART_FAIL:
            return {
                ...state,
                loading: false,
                error: 'There was an error processing your request',
            };

        // Remove entire quantity of item from cart
        case REMOVE_PRODUCT_START:
            return {
                ...state,
                loading: true,
            };
        case REMOVE_PRODUCT_SUCCESS:
            delete state.itemsInCart[action.id];
            const product = state.cartItems.filter(
                item => item.specs.id === action.id
            )[0];

            const amount = product.specs.price * product.quantity;

            return {
                ...state,
                loading: false,
                cartItems: state.cartItems.filter(
                    item => item.specs.id !== action.id
                ),
                itemsInCart: state.itemsInCart,
                subtotal: state.subtotal - amount,
                tax:
                    state.subtotal - amount !== 0
                        ? (state.subtotal + state.delivery - amount) *
                          state.taxRate
                        : 0,
            };
        case REMOVE_PRODUCT_FAIL:
            return {
                ...state,
                loading: false,
                error: 'There was an error processing your request',
            };

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
                subtotal: 0,
                tax: 0,
                taxRate: 0.3,
                delivery: 1000,
                loading: false,
                error: false,
                order: null,
            };

        // Logout
        case LOGOUT:
            return {
                cartItems: [],
                itemsInCart: {},
                subtotal: 0,
                tax: 0,
                taxRate: 0.3,
                delivery: 1000,
                loading: false,
                error: false,
                order: null,
            };

        default:
            return state;
    }
};

export default cartReducer;
