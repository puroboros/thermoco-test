import React from 'react';
import { Routes } from './routes/routes';
import styles from './modules/dashboard/dashboard.module.scss'

import Header from './components/header/header';
import Footer from './components/footer/footer';

const App = () => {
    return (
        <>
            <Header></Header>
            <div className={`${styles.container} ${styles.generalMarginBottom}`}>
                <Routes/>
            </div>
            <Footer></Footer>

        </>
    );

};

export default App;
