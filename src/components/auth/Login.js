import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { login } from '../../store/actions/authActions';

// Modals
import SuccessModal from '../modals/SuccessModal';
import ErrorModal from '../modals/ErrorModal';

// Style
import { SaveBtn } from '../../styles/buttons';
import { FormContainer } from './style/form';

// React Bootstrap
import Form from 'react-bootstrap/Form';

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
            <FormContainer style={{ background: 'white' }}>
                <Form onSubmit={this.loginHandler}>
                    <Form.Label htmlFor="email">Email</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        onChange={this.changeHandler}
                    />

                    <Form.Label htmlFor="password">Password</Form.Label>
                    <Form.Control
                        type="password"
                        name="password"
                        onChange={this.changeHandler}
                    />

                    <div className="d-flex justify-content-end mt-4">
                        <SaveBtn>Sign In</SaveBtn>
                    </div>
                </Form>
            </FormContainer>
        );
    }
}

export default withRouter(
    connect(
        null,
        { login }
    )(Login)
);
