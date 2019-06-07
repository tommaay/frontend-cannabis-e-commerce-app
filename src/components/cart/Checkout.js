import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { clearCart } from '../../store/actions/cartActions';
import { addOrder } from '../../store/actions/orderActions';
import StripeCheckout from 'react-stripe-checkout';
import SuccessModal from '../modals/SuccessModal';
import ErrorModal from '../modals/ErrorModal';

class Checkout extends Component {
    state = {
        showSuccess: false,
        showError: false,
    };
    successPayment = () => {
        this.setState({
            showSuccess: true,
        });
    };

    errorPayment = () => {
        this.setState({
            showError: true,
        });
    };

    modalClose = () => {
        this.setState({
            showSuccess: false,
            showError: false,
        });
    };

    onToken = amount => token => {
        axios
            .post(`https://flower-co.herokuapp.com/api/payments/charge`, {
                description: 'Flower Co',
                source: token.id,
                currency: 'USD',
                amount: amount,
            })
            .then(async res => {
                // Order info
                const cartInfo = {
                    user_id: this.props.user.id,
                    subtotal: this.props.subtotal,
                    tax: this.props.tax,
                    tax_rate: this.props.taxRate,
                    delivery: this.props.delivery,
                    total: this.props.subtotal + this.props.tax,
                };

                // Create a new order and also product-orders
                await this.props.addOrder(cartInfo, this.props.cartItems);

                // Clear what's in the cart
                this.props.clearCart();

                this.successPayment();
            })
            .catch(err => {
                this.errorPayment();
            });
    };

    render() {
        const { tax, subtotal, user, delivery } = this.props;
        const amount = subtotal + tax + delivery;

        return (
            <>
                <StripeCheckout
                    name={`${user.firstname} ${user.lastname}`}
                    email={user.email}
                    description="Flower Co"
                    amount={amount}
                    token={this.onToken(amount)}
                    currency="USD"
                    stripeKey="pk_test_yofUtOZ6uXrNHRMIdOFa7qBI0061om15Mw"
                    label="Checkout"
                />

                <SuccessModal
                    show={this.state.showSuccess}
                    onHide={this.modalClose}
                />
                <ErrorModal
                    show={this.state.showError}
                    onHide={this.modalClose}
                />
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        cartItems: state.cart.cartItems,
        tax: state.cart.tax,
        taxRate: state.cart.taxRate,
        delivery: state.cart.delivery,
        subtotal: state.cart.subtotal,
        user: state.auth.user,
    };
};

export default connect(
    mapStateToProps,
    { addOrder, clearCart }
)(Checkout);
