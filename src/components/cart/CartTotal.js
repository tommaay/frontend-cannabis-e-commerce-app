import React from 'react';
import { connect } from 'react-redux';

import { formatPrice } from '../../helpers/helpers';
import { TotalContainer } from './style/style.CartPage';
import { CheckoutBtn, LogintBtn } from '../../styles/buttons';

const CartTotal = props => {
    const { cartItems, itemsInCart, subtotal, tax, loggedIn, delivery } = props;

    return (
        <TotalContainer>
            <div className="total-box">
                <div className="row">
                    <h5>Subtotal</h5>
                    <h5>
                        {subtotal > 0 ? formatPrice(subtotal) : formatPrice(0)}
                    </h5>
                </div>

                <div className="row">
                    <h5>Flat Delivery</h5>
                    <h5>{formatPrice(delivery)}</h5>
                </div>

                <div className="row">
                    <h5>Tax (30%)</h5>
                    <h5>{formatPrice(tax)}</h5>
                </div>

                <div className="total">
                    <h3>Total: {formatPrice(subtotal + delivery + tax)}</h3>
                </div>

                <div className="row-right">
                    {loggedIn ? (
                        <CheckoutBtn to="/checkout">Checkout</CheckoutBtn>
                    ) : (
                        <LogintBtn to="login">Login</LogintBtn>
                    )}
                    <CheckoutBtn to="/checkout">Checkout</CheckoutBtn>
                </div>
            </div>
        </TotalContainer>
    );
};

const mapStateToProps = state => {
    return {
        cartItems: state.cart.cartItems,
        itemsInCart: state.cart.itemsInCart,
        subtotal: state.cart.subtotal,
        tax: state.cart.tax,
        delivery: state.cart.delivery,
        loggedIn: state.auth.loggedIn,
    };
};

export default connect(mapStateToProps)(CartTotal);
