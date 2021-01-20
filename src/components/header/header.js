import React from 'react';
import { useDispatch } from 'react-redux';
import { logoutRequest } from '../../store/actions';
import { useMeReducer } from '../../store/reducer';
import styles from './header.module.scss';

const Header = () => {
    const dispatch = useDispatch();
    const user = useMeReducer();
    const logout = () => {
        dispatch(logoutRequest());
    }
    return (
        <header className={styles.header}>
            <h2>{process.env.REACT_APP_APP_NAME}</h2>
            {user && <span className={styles.username}>Hello {user.username} <a className={styles.logout} onClick={logout}>(logout)</a></span>}
        </header>
    );
};

export default Header;