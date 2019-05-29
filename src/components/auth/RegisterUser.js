import React, { Component } from 'react';
import { connect } from 'react-redux';
import { register } from '../../store/actions/authActions';

class RegisterUser extends Component {
    state = {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        zipcode: '',
        phone: '',
        birthday: '',
        is_admin: 0,
    };

    changeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    registerHandler = e => {
        e.preventDefault();
        this.props.register(this.state);
        // this.props.history.push('/');
    };

    render() {
        return (
            <div>
                <form onSubmit={this.registerHandler}>
                    <label htmlFor="firstname">First Name</label>
                    <input
                        type="string"
                        name="firstname"
                        id="firstname"
                        onChange={this.changeHandler}
                    />

                    <label htmlFor="lastname">Last Name</label>
                    <input
                        type="string"
                        name="lastname"
                        id="lastname"
                        onChange={this.changeHandler}
                    />

                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        onChange={this.changeHandler}
                    />

                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        onChange={this.changeHandler}
                    />

                    <label htmlFor="zipcode">Zipcode</label>
                    <input
                        type="string"
                        name="zipcode"
                        id="zipcode"
                        onChange={this.changeHandler}
                    />

                    <label htmlFor="phone">Phone Number</label>
                    <input
                        type="string"
                        name="phone"
                        id="phone"
                        onChange={this.changeHandler}
                    />

                    <label htmlFor="birthday">Birthday</label>
                    <input
                        type="date"
                        name="birthday"
                        id="birthday"
                        onChange={this.changeHandler}
                    />

                    <button>Register</button>
                </form>
            </div>
        );
    }
}

export default connect(
    null,
    { register }
)(RegisterUser);
