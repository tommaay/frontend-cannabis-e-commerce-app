import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addType } from '../../store/actions/productActions';

// Modals
import SuccessModal from '../modals/SuccessModal';
import ErrorModal from '../modals/ErrorModal';
import Loading from '../modals/Loading';

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
            successModal: false,
            errorModal: false,
        });
    };

    successModalOn = () => {
        this.setState({
            successModal: true,
            errorModal: false,
        });
    };

    errorModalOn = () => {
        this.setState({
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
            <>
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

                {this.props.loading ? <Loading /> : null}
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        loading: state.products.loading,
    };
};

export default connect(
    mapStateToProps,
    { addType }
)(TypeForm);
