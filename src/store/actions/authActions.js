import axios from 'axios';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export const login = creds => dispatch => {
    dispatch({ type: LOGIN_START });

    axios
        .post(`https://flower-co.herokuapp.com/api/users/login`, creds)
        .then(res => {
            console.log(res);
            localStorage.setItem('token', res.data.token);

            dispatch({ type: LOGIN_SUCCESS, payload: res.data.user });
        })
        .catch(err => dispatch({ type: LOGIN_FAIL, error: err }));
};
