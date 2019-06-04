import React from 'react';
import { connect } from 'react-redux';

import { formatPrice } from '../../helpers/helpers';
import { TotalContainer } from './style/style.CartPage';
import { CheckoutBtn, LogintBtn } from '../../styles/buttons';

const CartTotal = props => {
    const { cartItems, itemsInCart, subTotal, tax, loggedIn } = props;

    return (
        <TotalContainer>
            <div className="total-box">
                <div className="row">
                    <h5>Subtotal</h5>
                    <h5>
                        {subTotal > 0 ? formatPrice(subTotal) : formatPrice(0)}
                    </h5>
                </div>

                <div className="row">
                    <h5>Tax (30%)</h5>
                    <h5>{formatPrice(tax)}</h5>
                </div>

                <div className="row">
                    <h5>Flat Delivery</h5>
                    <h5>{formatPrice(1000)}</h5>
                </div>

                <div className="total">
                    <h3>
                        Total: {formatPrice(subTotal + subTotal * 0.3 + 1000)}
                    </h3>
                </div>

                <div className="row-right">
                    {/* {loggedIn ? (
                        <CheckoutBtn>Checkout</CheckoutBtn>
                    ) : (
                        <LogintBtn>Login</LogintBtn>
                    )} */}
                    <CheckoutBtn>Checkout</CheckoutBtn>
                </div>
            </div>
        </TotalContainer>
    );
};

const mapStateToProps = state => {
    return {
        cartItems: state.cart.cartItems,
        itemsInCart: state.cart.itemsInCart,
        subTotal: state.cart.subTotal,
        tax: state.cart.tax,
        loggedIn: state.auth.loggedIn,
    };
};

export default connect(mapStateToProps)(CartTotal);
