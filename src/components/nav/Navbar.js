import React from 'react';
import { connect } from 'react-redux';
import SignedinLinks from './SignedinLinks';
import SignedoutLinks from './SignedoutLinks';
import { Nav } from './style/nav';

const Navbar = props => {
    const navLinks = props.loggedIn ? <SignedinLinks /> : <SignedoutLinks />;

    return (
        <Nav>
            <div className="links-container">{navLinks}</div>
        </Nav>
    );
};

const mapStateToProps = state => {
    return {
        loggedIn: state.auth.loggedIn,
    };
};

export default connect(mapStateToProps)(Navbar);
