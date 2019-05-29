import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import RegisterUser from './components/auth/RegisterUser';

function App() {
    return (
        <Router>
            <div className="App">
                <Route path="/login" component={Login} />
                <Route path="/register-user" component={RegisterUser} />
            </div>
        </Router>
    );
}

export default App;
