import React from 'react';
import { connect } from 'react-redux';
import CartItem from './CartItem';
import CartTotal from './CartTotal';

import { CartPageContainer } from './style/style.CartPage';
import { clearCart } from '../../store/actions/cartActions';

const CartPage = props => {
    const { cartItems, itemsInCart, clearCart, subTotal } = props;

    return (
        <CartPageContainer>
            <div className="header">
                <h1>Shopping Cart</h1>

                <button onClick={clearCart}>Clear Cart</button>
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

            <CartTotal
                cartItems={cartItems}
                itemsInCart={itemsInCart}
                subTotal={subTotal}
            />
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
    { clearCart }
)(CartPage);
