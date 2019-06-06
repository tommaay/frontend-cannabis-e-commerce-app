import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateUser } from '../../store/actions/authActions';
import { withRouter } from 'react-router-dom';

// React Bootstrap
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

// Style
import { ModalContainer } from './style/passwordModal';

class UserProfile extends Component {
    state = {
        newPass1: '',
        newPass2: '',
    };

    changeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    submitHandler = async id => {
        const pass =
            this.state.newPass1 === this.state.newPass2
                ? this.state.newPass2
                : null;

        if (pass !== '') {
            const info = { password: pass };

            const res = await this.props.updateUser(id, info);

            if (res) {
                this.props.successModalOn();
            } else {
                this.props.errorModalOn();
            }
        } else {
            this.props.errorModalOn();
        }
    };

    render() {
        const { id } = this.props;

        return (
            <Modal {...this.props} centered>
                <ModalContainer>
                    <Modal.Body>
                        <Form
                            onSubmit={() => {
                                this.submitHandler(id);
                            }}
                        >
                            <Form.Group>
                                <Form.Label className="pw-label">
                                    New Password
                                </Form.Label>
                                <Form.Control
                                    type="password"
                                    name="newPass1"
                                    onChange={this.changeHandler}
                                />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    name="newPass2"
                                    onChange={this.changeHandler}
                                />
                            </Form.Group>
                        </Form>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.onHide}>
                            Close
                        </Button>
                        <Button
                            variant="primary"
                            onClick={() => {
                                this.submitHandler(id);
                            }}
                        >
                            Save Password
                        </Button>
                    </Modal.Footer>
                </ModalContainer>
            </Modal>
        );
    }
}

export default withRouter(
    connect(
        null,
        { updateUser }
    )(UserProfile)
);
