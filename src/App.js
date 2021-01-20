import React, { useEffect, useState } from 'react';
import { Routes } from './routes/routes';
import styles from './modules/dashboard/dashboard.module.scss'

import Header from './components/header/header';
import Footer from './components/footer/footer';
import { useDispatch } from 'react-redux';
import { useHealthReducer } from './store/reducer';
import { healthRequest } from './store/actions';

const App = () => {
    const [visible, setVisible] = useState(false);
    const dispatch = useDispatch();
    const health = useHealthReducer();
    useEffect(() => {
        setInterval(() => {
            dispatch(healthRequest());
        }, 6000);
    }, [dispatch]);

    useEffect(() => {
        setVisible(health && health.offline);
        console.log('health: ', health);
    }, [health]);

    return (
        <>
            <Header></Header>
            {visible && <div className={`${styles.offline}`}>Server offline</div>}
            <div className={`${styles.container} ${styles.generalMarginBottom}`}>
                <Routes />
            </div>
            <Footer></Footer>

        </>
    );

};

export default App;
