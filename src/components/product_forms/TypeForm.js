import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addType } from '../../store/actions/productActions';

// Modals
import SuccessModal from '../modals/SuccessModal';
import ErrorModal from '../modals/ErrorModal';

// Style
import { SaveBtn } from '../../styles/buttons';
import { FormContainer } from '../auth/style/form';

// React Bootstrap
import Form from 'react-bootstrap/Form';

class TypeForm extends Component {
    state = {
        type: {
            name: '',
        },
        modalShow: false,
        successModal: false,
        errorModal: false,
    };

    changeHandler = e => {
        this.setState({
            type: {
                ...this.state.type,
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

    submitHandler = async e => {
        e.preventDefault();
        const res = await this.props.addType(this.state.type);

        if (res) {
            this.successModalOn();
        } else {
            this.errorModalOn();
        }
    };

    render() {
        return (
            <FormContainer>
                <Form onSubmit={this.submitHandler}>
                    <Form.Label htmlFor="name">Name</Form.Label>
                    <Form.Control
                        type="string"
                        name="name"
                        onChange={this.changeHandler}
                    />

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
        );
    }
}

export default connect(
    null,
    { addType }
)(TypeForm);
