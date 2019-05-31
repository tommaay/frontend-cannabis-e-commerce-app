import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Dashboard from './components/dashboard/Dashboard';
import Login from './components/auth/Login';
import RegisterUser from './components/auth/RegisterUser';
import RegisterAdmin from './components/auth/RegisterAdmin';
import Navbar from './components/nav/Navbar';
import CategoryNav from './components/nav/CategoryNav';
import ProductPage from './components/product/ProductPage';

function App() {
    return (
        <Router>
            <Navbar />
            <CategoryNav />

            <div className="App">
                <Route path="/" exact component={Dashboard} />
                <Route path="/login" component={Login} />
                <Route path="/register-user" component={RegisterUser} />
                <Route path="/register-admin" component={RegisterAdmin} />
                <Route path="/products/:product" component={ProductPage} />
            </div>
        </Router>
    );
}

export default App;
