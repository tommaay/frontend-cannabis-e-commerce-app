import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedoutLinks = () => {
    return (
        <>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/my-cart">My Cart</NavLink>
            <NavLink to="/memberships">Memberships</NavLink>
            <NavLink to="/login">Sign In</NavLink>
        </>
    );
};

export default SignedoutLinks;
