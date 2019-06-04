import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../../store/actions/authActions';

class Login extends Component {
    state = {
        email: '',
        password: '',
    };

    changeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    loginHandler = e => {
        e.preventDefault();
        this.props.login(this.state);
        this.props.history.push('/');
    };

    render() {
        return (
            <div>
                <form onSubmit={this.loginHandler}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        onChange={this.changeHandler}
                    />

                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        onChange={this.changeHandler}
                    />

                    <button>Sign In</button>
                </form>
            </div>
        );
    }
}

export default connect(
    null,
    { login }
)(Login);
