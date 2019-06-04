import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { getProducts } from './store/actions/productActions';

import Dashboard from './components/dashboard/Dashboard';
import Login from './components/auth/Login';
import RegisterUser from './components/auth/RegisterUser';
import RegisterAdmin from './components/auth/RegisterAdmin';
import Navbar from './components/nav/Navbar';
import CategoryNav from './components/nav/CategoryNav';
import ProductsByCategory from './components/product/ProductsByCategory';
import ProductPage from './components/product/ProductPage';
import CartPage from './components/cart/CartPage';

import { StripeProvider, Elements } from 'react-stripe-elements';
import StripeForm from './components/stripe/StripeForm';
// import StripeApp from './components/stripe/StripeApp';

class App extends Component {
    componentDidMount() {
        this.props.getProducts();
    }

    render() {
        return (
            <StripeProvider apiKey="pk_test_yofUtOZ6uXrNHRMIdOFa7qBI0061om15Mw">
                <Router>
                    <Navbar />
                    <CategoryNav />

                    <div className="App">
                        <Route exact path="/" component={Dashboard} />
                        <Route path="/login" component={Login} />
                        <Route path="/register-user" component={RegisterUser} />
                        <Route
                            path="/register-admin"
                            component={RegisterAdmin}
                        />
                        <Route
                            exact
                            path="/products/category/:category"
                            component={ProductsByCategory}
                        />
                        <Route
                            exact
                            path="/products/:productId"
                            component={ProductPage}
                        />
                        <Route path="/cart" component={CartPage} />

                        <Elements>
                            <Route path="/checkout" component={StripeForm} />
                        </Elements>
                    </div>
                </Router>
            </StripeProvider>
        );
    }
}

export default connect(
    null,
    { getProducts }
)(App);
