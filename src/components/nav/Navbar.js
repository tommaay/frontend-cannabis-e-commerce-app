import React from 'react';
import { connect } from 'react-redux';
import SignedinLinks from './SignedinLinks';
import SignedoutLinks from './SignedoutLinks';

const Navbar = props => {
    const navLinks = props.loggedIn ? <SignedinLinks /> : <SignedoutLinks />;

    return <nav>{navLinks}</nav>;
};

const mapStateToProps = state => {
    return {
        loggedIn: state.auth.loggedIn,
    };
};

export default connect(mapStateToProps)(Navbar);
