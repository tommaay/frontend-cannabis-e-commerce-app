import React from 'react';
import { Link } from './style/nav';

const SignedoutLinks = () => {
    return (
        <>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/cart">
                <i class="fas fa-shopping-cart" />
            </Link>
        </>
    );
};

export default SignedoutLinks;
