import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logout } from '../../store/actions/authActions';

const SignedinLinks = props => {
    return (
        <>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/my-cart">My Cart</NavLink>
            <NavLink to="/account">My Account</NavLink>
            <NavLink to="/" onClick={props.logout}>
                Logout
            </NavLink>
        </>
    );
};

export default connect(
    null,
    { logout }
)(SignedinLinks);
