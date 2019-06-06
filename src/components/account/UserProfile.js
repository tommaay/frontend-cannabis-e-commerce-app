import React, { Component } from 'react';
import { connect } from 'react-redux';
import ChangePassword from './ChangePassword';
import SuccessModal from '../modals/SuccessModal';
import ErrorModal from '../modals/ErrorModal';
import { updateUser } from '../../store/actions/authActions';
import { withRouter } from 'react-router-dom';
import { SaveBtn } from '../../styles/buttons';

// React Bootstrap
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

// Style
import { ProfileContainer } from './style/profileTab';

class UserProfile extends Component {
    state = {
        user: {
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            zipcode: '',
            phone: '',
        },
        modalShow: false,
        successModal: false,
        errorModal: false,
    };

    componentDidMount() {
        this.setState({
            user: {
                firstname: this.props.user.firstname,
                lastname: this.props.user.lastname,
                email: this.props.user.email,
                zipcode: this.props.user.zipcode,
                phone: this.props.user.phone,
            },
        });
    }

    changeHandler = e => {
        this.setState({
            user: {
                ...this.state.user,
                [e.target.name]: e.target.value,
            },
        });
    };

    submitHandler = async id => {
        const res = await this.props.updateUser(id, this.state.user);

        if (res) {
            this.successModalOn();
        } else {
            this.errorModalOn();
        }
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

    render() {
        const { user, staticContext, ...rest } = this.props;

        return (
            <ProfileContainer>
                <Form
                    onSubmit={e => {
                        e.preventDefault();
                        this.submitHandler(user.id);
                    }}
                >
                    <Form.Group as={Row}>
                        <Col sm="6">
                            <Form.Label htmlFor="firstname">
                                First Name
                            </Form.Label>
                            <Form.Control
                                size="lg"
                                type="string"
                                name="firstname"
                                value={this.state.user.firstname}
                                onChange={this.changeHandler}
                            />
                        </Col>
                        <Col sm="6">
                            <Form.Label htmlFor="lastname">
                                Last Name
                            </Form.Label>
                            <Form.Control
                                size="lg"
                                type="string"
                                name="lastname"
                                value={this.state.user.lastname}
                                onChange={this.changeHandler}
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row}>
                        <Col sm="4">
                            <Form.Label htmlFor="email">Email</Form.Label>
                            <Form.Control
                                size="lg"
                                type="email"
                                name="email"
                                value={this.state.user.email}
                                onChange={this.changeHandler}
                            />
                        </Col>

                        <Col sm="4">
                            <Form.Label htmlFor="zipcode">Zipcode</Form.Label>
                            <Form.Control
                                size="lg"
                                type="string"
                                name="zipcode"
                                value={this.state.user.zipcode}
                                onChange={this.changeHandler}
                            />
                        </Col>

                        <Col sm="4">
                            <Form.Label htmlFor="phone">
                                Phone Number
                            </Form.Label>
                            <Form.Control
                                size="lg"
                                type="string"
                                name="phone"
                                value={this.state.user.phone}
                                onChange={this.changeHandler}
                            />
                        </Col>
                    </Form.Group>

                    <Row className="d-flex justify-content-end">
                        <div className="d-flex flex-column align-items-center">
                            <Button
                                variant="link"
                                onClick={() =>
                                    this.setState({ modalShow: true })
                                }
                            >
                                Change Password
                            </Button>

                            <SaveBtn
                                onClick={() => this.submitHandler(user.id)}
                            >
                                Save
                            </SaveBtn>
                        </div>
                    </Row>
                </Form>

                <ChangePassword
                    show={this.state.modalShow}
                    onHide={this.modalClose}
                    id={user.id}
                    successModalOn={this.successModalOn}
                    errorModalOn={this.errorModalOn}
                />

                <SuccessModal
                    show={this.state.successModal}
                    onHide={this.modalClose}
                    id={user.id}
                />

                <ErrorModal
                    show={this.state.errorModal}
                    onHide={this.modalClose}
                    id={user.id}
                />
            </ProfileContainer>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.auth.user,
    };
};

export default withRouter(
    connect(
        mapStateToProps,
        { updateUser }
    )(UserProfile)
);
