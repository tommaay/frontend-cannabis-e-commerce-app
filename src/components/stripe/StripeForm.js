import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    CardNumberElement,
    CardExpiryElement,
    CardCVCElement,
    injectStripe,
} from 'react-stripe-elements';

class StripeForm extends Component {
    state = {
        name: '',
        cardnumber: '',
        expiration: '',
        cvc: '',
    };

    changeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    handleSubmit = async e => {
        const {
            stripe,
            cartItems,
            tax,
            subtotal,
            delivery,
            userId,
        } = this.props;
        e.preventDefault();

        // Destructuring token to not have to type token.token
        let { token } = await stripe.createToken({
            name: this.state.name,
        });

        const cartInfo = {
            user_id: userId,
            subtotal,
            tax,
            delivery,
            total: subtotal + tax,
        };

        console.log(token, cartInfo, cartItems);
    };

    render() {
        return (
            <div>
                <h2>StripeForm</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        onChange={this.changeHandler}
                    />

                    <label>Card number</label>
                    <CardNumberElement />

                    <label>Expiration date</label>
                    <CardExpiryElement />

                    <CardCVCElement />

                    <button>Pay</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        cartItems: state.cart.cartItems,
        tax: state.cart.tax,
        delivery: state.cart.delivery,
        subtotal: state.cart.subtotal,
        userId: state.auth.user.id,
    };
};

export default connect(mapStateToProps)(injectStripe(StripeForm));
