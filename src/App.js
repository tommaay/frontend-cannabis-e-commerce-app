import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { getProducts } from './store/actions/productActions';

import Dashboard from './components/dashboard/Dashboard';
import AuthDashboard from './components/auth/AuthDashboard';
import Navbar from './components/nav/Navbar';
import CategoryNav from './components/nav/CategoryNav';
import ProductsByCategory from './components/product/ProductsByCategory';
import ProductPage from './components/product/ProductPage';
import CartPage from './components/cart/CartPage';
import OrdersPage from './components/orders/OrdersHistoryPage';
import AccountPage from './components/account/AccountPage';

class App extends Component {
    componentDidMount() {
        this.props.getProducts();
    }

    render() {
        return (
            <Router>
                <Navbar />
                <CategoryNav />

                <div className="App">
                    <Route exact path="/" component={Dashboard} />
                    <Route path="/login" component={AuthDashboard} />
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
                    <Route path="/account" component={AccountPage} />
                    <Route path="/orders" component={OrdersPage} />
                </div>
            </Router>
        );
    }
}

export default connect(
    null,
    { getProducts }
)(App);
