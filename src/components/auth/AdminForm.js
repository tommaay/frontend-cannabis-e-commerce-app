import React, { Component } from 'react';
import { connect } from 'react-redux';
import { registerAdmin } from '../../store/actions/authActions';

// Modals
import SuccessModal from '../modals/SuccessModal';
import ErrorModal from '../modals/ErrorModal';
import Loading from '../modals/Loading';

// Style
import { SaveBtn } from '../../styles/buttons';
import { FormContainer } from './style/form';

// React Bootstrap
import Form from 'react-bootstrap/Form';

class AdminForm extends Component {
    state = {
        user: {
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            zipcode: '',
            phone: '',
            birthday: '',
            is_admin: true,
        },
        modalShow: false,
        successModal: false,
        errorModal: false,
    };

    changeHandler = e => {
        this.setState({
            user: {
                ...this.state.user,
                [e.target.name]: e.target.value,
            },
        });
    };

    modalClose = () => {
        this.setState({
            modalShow: false,
            successModal: false,
            errorModal: false,
        });
    };

    successModalOn = () => {
        this.setState({
            modalShow: false,
            successModal: true,
            errorModal: false,
        });
    };

    errorModalOn = () => {
        this.setState({
            modalShow: false,
            successModal: false,
            errorModal: true,
        });
    };

    registerHandler = async e => {
        e.preventDefault();
        const res = await this.props.registerAdmin(this.state.user);

        if (res) {
            this.successModalOn();
        } else {
            this.errorModalOn();
        }
    };

    render() {
        return (
            <>
                <FormContainer>
                    <Form onSubmit={this.registerHandler}>
                        <Form.Group>
                            <Form.Label htmlFor="firstname">
                                First Name
                            </Form.Label>
                            <Form.Control
                                type="string"
                                name="firstname"
                                onChange={this.changeHandler}
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label htmlFor="lastname">
                                Last Name
                            </Form.Label>
                            <Form.Control
                                type="string"
                                name="lastname"
                                onChange={this.changeHandler}
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label htmlFor="email">Email</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                onChange={this.changeHandler}
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label htmlFor="password">Password</Form.Label>
                            <Form.Control
                                type="password"
                                name="password"
                                onChange={this.changeHandler}
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label htmlFor="zipcode">Zipcode</Form.Label>
                            <Form.Control
                                type="string"
                                name="zipcode"
                                onChange={this.changeHandler}
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label htmlFor="phone">
                                Phone Number
                            </Form.Label>
                            <Form.Control
                                type="string"
                                name="phone"
                                onChange={this.changeHandler}
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label htmlFor="birthday">Birthday</Form.Label>
                            <Form.Control
                                type="date"
                                name="birthday"
                                onChange={this.changeHandler}
                            />
                        </Form.Group>

                        <div className="d-flex justify-content-end mt-4">
                            <SaveBtn>Save</SaveBtn>
                        </div>
                    </Form>

                    <SuccessModal
                        show={this.state.successModal}
                        onHide={this.modalClose}
                    />

                    <ErrorModal
                        show={this.state.errorModal}
                        onHide={this.modalClose}
                    />
                </FormContainer>

                {this.props.loading ? <Loading /> : null}
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
    };
};

export default connect(
    mapStateToProps,
    { registerAdmin }
)(AdminForm);
