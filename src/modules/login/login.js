import React, { useState } from 'react';
import styles from './login.module.scss'
import { useDispatch } from 'react-redux';
import { loginRequest } from '../../store/actions';

const Login = () => {
    const dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = (submit) => {
        submit.preventDefault();
        dispatch(loginRequest(username, password));
    }
    return (
        <div className={`${styles.container} ${styles.generalMarginBottom}`}>
            <h1>Login form</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <span>Username: </span> <input type={'text'} name={'username'} onChange={event => setUsername(event.target.value)} />
                </div>
                <div>
                    <span>Password: </span> <input type={'password'} name={'password'} onChange={event => setPassword(event.target.value)} />
                </div>
                <button className={`${styles.btn} ${styles.marginTop}`}>Login</button>
            </form>
        </div>
    );
};

export default Login;