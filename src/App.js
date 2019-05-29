import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Dashboard from './components/dashboard/Dashboard';
import Login from './components/auth/Login';
import RegisterUser from './components/auth/RegisterUser';
import RegisterAdmin from './components/auth/RegisterAdmin';
import Navbar from './components/nav/Navbar';

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Dashboard />
                <Route path="/login" component={Login} />
                <Route path="/register-user" component={RegisterUser} />
                <Route path="/register-admin" component={RegisterAdmin} />
            </div>
        </Router>
    );
}

export default App;
