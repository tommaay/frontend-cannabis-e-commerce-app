import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/auth/Login';

function App() {
    return (
        <Router>
            <div className="App">
                <Route path="/login" component={Login} />
            </div>
        </Router>
    );
}

export default App;
