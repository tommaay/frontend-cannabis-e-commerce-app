import axios from 'axios';

// Login
export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export const login = creds => dispatch => {
    dispatch({ type: LOGIN_START });

    axios
        .post(`https://flower-co.herokuapp.com/api/users/login`, creds)
        .then(res => {
            console.log(res.data);
            localStorage.setItem('token', res.data.token);

            dispatch({ type: LOGIN_SUCCESS, payload: res.data.user });
        })
        .catch(err => dispatch({ type: LOGIN_FAIL, error: err }));
};

// Register
export const REGISTER_START = 'REGISTER_START';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAIL = 'REGISTER_FAIL';

export const register = creds => dispatch => {
    dispatch({ type: REGISTER_START });

    axios
        .post(`https://flower-co.herokuapp.com/api/users/register`, creds)
        .then(res => {
            console.log(res.data);
            localStorage.setItem('token', res.data.token);

            dispatch({ type: REGISTER_SUCCESS, payload: res.data.user });
        })
        .catch(err => dispatch({ type: REGISTER_FAIL, error: err }));
};

// Logout
export const LOGOUT = 'LOGOUT';

export const logout = creds => dispatch => {
    localStorage.removeItem('token');
    dispatch({ type: LOGOUT });
};
