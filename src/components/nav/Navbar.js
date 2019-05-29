import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logout } from '../../store/actions/authActions';

const Navbar = props => {
    return (
        <nav>
            <NavLink to="/" onClick={props.logout}>
                Logout
            </NavLink>
        </nav>
    );
};

const mapStateToProps = state => {
    return {
        logged: state.auth.loggedIn,
    };
};

export default connect(
    mapStateToProps,
    { logout }
)(Navbar);
