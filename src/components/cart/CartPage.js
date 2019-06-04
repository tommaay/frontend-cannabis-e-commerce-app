import React from 'react';
import { connect } from 'react-redux';
import CartItem from './CartItem';
import CartTotal from './CartTotal';

import { CartPageContainer } from './style/style.CartPage';
import {
    clearCart,
    removeProductFromCart,
} from '../../store/actions/cartActions';
import { Button } from '../../styles/buttons';

const CartPage = props => {
    const { cartItems, itemsInCart, clearCart, subTotal } = props;

    return (
        <CartPageContainer>
            <div className="header">
                <h1>Shopping Cart</h1>

                <Button onClick={clearCart} className="clear-btn">
                    Clear
                </Button>
            </div>

            <>
                {cartItems.map(item => {
                    return (
                        <CartItem
                            item={item}
                            itemsInCart={itemsInCart}
                            removeProductFromCart={removeProductFromCart}
                            key={item.specs.id}
                        />
                    );
                })}
            </>

            <CartTotal />
        </CartPageContainer>
    );
};

const mapStateToProps = state => {
    return {
        cartItems: state.cart.cartItems,
        itemsInCart: state.cart.itemsInCart,
        loading: state.cart.loading,
        subTotal: state.cart.subTotal,
    };
};

export default connect(
    mapStateToProps,
    { clearCart, removeProductFromCart }
)(CartPage);
