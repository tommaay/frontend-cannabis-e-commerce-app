import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../store/actions/authActions';
import { Link, Badge } from './style/nav';

const SignedinLinks = props => {
    const { cart } = props;
    const count = Object.values(cart).reduce((a, v) => {
        return a + v;
    }, 0);

    return (
        <>
            <Link to="/">Home</Link>
            <Link to="/account">My Account</Link>
            <Link to="/" onClick={props.logout}>
                Logout
            </Link>

            <div className="cart">
                <Link to="/cart">
                    <i class="fas fa-shopping-basket" />
                    {count ? <Badge>{count}</Badge> : null}
                </Link>
            </div>
        </>
    );
};

const mapStateToProps = state => {
    return {
        cart: state.cart.itemsInCart,
        subtotal: state.cart.subtotal,
    };
};

export default connect(
    mapStateToProps,
    { logout }
)(SignedinLinks);
