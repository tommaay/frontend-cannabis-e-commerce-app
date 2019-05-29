import React from 'react';
import { Link } from './style/nav';

const SignedoutLinks = () => {
    return (
        <>
            <Link to="/">Home</Link>
            <Link to="/memberships">Memberships</Link>
            <Link to="/login">Login</Link>
            <Link to="/my-cart">Cart</Link>
        </>
    );
};

export default SignedoutLinks;
