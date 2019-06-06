import axios from 'axios';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export const REGISTER_START = 'REGISTER_START';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAIL = 'REGISTER_FAIL';

export const UPDATE_USER_START = 'UPDATE_USER_START';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const UPDATE_USER_FAIL = 'UPDATE_USER_FAIL';

export const LOGOUT = 'LOGOUT';

// Login
export const login = creds => dispatch => {
    dispatch({ type: LOGIN_START });

    axios
        .post(`https://flower-co.herokuapp.com/api/users/login`, creds)
        .then(res => {
            localStorage.setItem('token', res.data.token);

            dispatch({ type: LOGIN_SUCCESS, payload: res.data.user });
        })
        .catch(err => dispatch({ type: LOGIN_FAIL, error: err }));
};

// Register
export const register = creds => dispatch => {
    dispatch({ type: REGISTER_START });

    axios
        .post(`https://flower-co.herokuapp.com/api/users/register`, creds)
        .then(res => {
            localStorage.setItem('token', res.data.token);

            dispatch({ type: REGISTER_SUCCESS, payload: res.data.user });
        })
        .catch(err => dispatch({ type: REGISTER_FAIL, error: err }));
};

// Update user
export const updateUser = (id, info) => async dispatch => {
    dispatch({ type: UPDATE_USER_START });

    try {
        const res = await axios.patch(
            `https://flower-co.herokuapp.com/api/users/${id}`,
            info
        );

        dispatch({ type: UPDATE_USER_SUCCESS, payload: res.data });
        if (res.data) {
            console.log('res', res.data);
            return true;
        } else {
            return false;
        }
    } catch (err) {
        dispatch({ type: UPDATE_USER_FAIL, error: err });
    }
};

// Logout
export const logout = creds => dispatch => {
    localStorage.removeItem('token');
    dispatch({ type: LOGOUT });
};
