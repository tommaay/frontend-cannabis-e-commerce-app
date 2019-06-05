import React from 'react';
import { connect } from 'react-redux';
import CartItem from './CartItem';
import CartTotal from './CartTotal';

import { CartPageContainer } from './style/style.CartPage';
import { clearCart } from '../../store/actions/cartActions';
import { ClearBtn } from '../../styles/buttons';

const CartPage = props => {
    const { cartItems, itemsInCart, clearCart } = props;

    return (
        <CartPageContainer>
            <div className="header">
                <h1>Shopping Cart</h1>

                <ClearBtn onClick={clearCart} className="clear-btn">
                    Clear
                </ClearBtn>
            </div>

            <>
                {cartItems.map(item => {
                    return (
                        <CartItem
                            item={item}
                            itemsInCart={itemsInCart}
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
    };
};

export default connect(
    mapStateToProps,
    { clearCart }
)(CartPage);
