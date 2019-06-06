import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../store/actions/authActions';
import { Link } from './style/nav';

const SignedinLinks = props => {
    return (
        <>
            <Link to="/">Home</Link>
            <Link to="/account">My Account</Link>
            <Link to="/" onClick={props.logout}>
                Logout
            </Link>
            <Link to="/cart">
                <i class="fas fa-shopping-basket" />
            </Link>
        </>
    );
};

export default connect(
    null,
    { logout }
)(SignedinLinks);
