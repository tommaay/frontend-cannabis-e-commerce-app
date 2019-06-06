import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { addProduct } from '../../store/actions/productActions';

// Modals
import SuccessModal from '../modals/SuccessModal';
import ErrorModal from '../modals/ErrorModal';

// Style
import { SaveBtn } from '../../styles/buttons';
import { ProductFormContainer } from '../auth/style/form';

// React Bootstrap
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class ProductForm extends Component {
    state = {
        product: {
            name: '',
            description: '',
            image: '',
            thc: '',
            cbd: '',
            category: null,
            type: null,
        },
        spec: {
            product_id: null,
            size: '',
            price: null,
            inventory: null,
        },
        file: null,
        modalShow: false,
        successModal: false,
        errorModal: false,
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

    productChangeHandler = e => {
        this.setState({
            product: {
                ...this.state.product,
                [e.target.name]: e.target.value,
            },
        });
    };

    specChangeHandler = e => {
        this.setState({
            spec: {
                ...this.state.spec,
                [e.target.name]: e.target.value,
            },
        });
    };

    fileHandler = e => {
        this.setState({ file: e.target.files[0] });
    };

    uploadImg = async () => {
        const fd = new FormData();
        fd.append('image', this.state.file);

        try {
            const res = await axios.post(
                'https://flower-co.herokuapp.com/api/products/upload',
                fd
            );

            console.log('image', res.data);

            this.setState({
                product: {
                    ...this.state.prdouct,
                    image: res.data.image,
                },
            });
        } catch (err) {
            console.log(err);
        }
    };

    submitHandler = async e => {
        e.preventDefault();

        await this.uploadImg();

        const id = await this.props.addProduct(this.state.product);

        const spec = {
            ...this.state.spec,
            product_id: id,
        };

        await axios.post(`https://flower-co.herokuapp.com/api/specs`, spec);

        if (id) {
            this.successModalOn();
        } else {
            this.errorModalOn();
        }
    };

    render() {
        return (
            <ProductFormContainer>
                <Form onSubmit={this.submitHandler}>
                    <Form.Label htmlFor="name">Name</Form.Label>
                    <Form.Control
                        type="string"
                        name="name"
                        onChange={this.productChangeHandler}
                    />

                    <Form.Label htmlFor="description">Description</Form.Label>
                    <Form.Control
                        as="textarea"
                        name="description"
                        onChange={this.productChangeHandler}
                    />

                    <Row className="mb-3 mt-5">
                        <Col md={4}>
                            <Form.Label htmlFor="thc">THC</Form.Label>
                            <Form.Control
                                type="string"
                                name="thc"
                                onChange={this.productChangeHandler}
                            />
                        </Col>

                        <Col md={4}>
                            <Form.Label htmlFor="cbd">CBD</Form.Label>
                            <Form.Control
                                type="string"
                                name="cbd"
                                onChange={this.productChangeHandler}
                            />
                        </Col>

                        <Col md={4}>
                            <Form.Label htmlFor="type">Type</Form.Label>
                            <Form.Control
                                as="select"
                                name="type"
                                onChange={this.productChangeHandler}
                            >
                                <option>Select...</option>
                                {this.props.types.map(type => (
                                    <option value={type.id}>{type.name}</option>
                                ))}
                            </Form.Control>
                        </Col>
                    </Row>

                    <Row className="mb-3">
                        <Col md={4}>
                            <Form.Label htmlFor="category">Category</Form.Label>
                            <Form.Control
                                as="select"
                                name="category"
                                onChange={this.productChangeHandler}
                            >
                                <option>Select...</option>
                                {this.props.categories.map(category => (
                                    <option value={category.id}>
                                        {category.name}
                                    </option>
                                ))}
                            </Form.Control>
                        </Col>

                        <Col md={8}>
                            <Form.Label htmlFor="image">Image</Form.Label>
                            <Form.Control
                                type="file"
                                name="image"
                                onChange={this.fileHandler}
                            />
                        </Col>
                    </Row>

                    <Row>
                        <Col md={4}>
                            <Form.Label htmlFor="size">Size</Form.Label>
                            <Form.Control
                                type="string"
                                name="size"
                                onChange={this.specChangeHandler}
                            />
                        </Col>

                        <Col md={4}>
                            <Form.Label htmlFor="price">Price</Form.Label>
                            <Form.Control
                                type="number"
                                name="price"
                                onChange={this.specChangeHandler}
                            />
                        </Col>

                        <Col md={4}>
                            <Form.Label htmlFor="inventory">
                                Inventory
                            </Form.Label>
                            <Form.Control
                                type="number"
                                name="inventory"
                                onChange={this.specChangeHandler}
                            />
                        </Col>
                    </Row>

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
            </ProductFormContainer>
        );
    }
}

const mapStateToProps = state => {
    return {
        categories: state.products.categories,
        types: state.products.types,
    };
};

export default connect(
    mapStateToProps,
    { addProduct }
)(ProductForm);
