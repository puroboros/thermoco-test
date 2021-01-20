import { Redirect, Route, Switch } from 'react-router-dom';
import React from 'react';

import NotFound from '../modules/not-found/not-found';
import { useTokenReducer } from '../store/reducer';
import Login from '../modules/login/login';
import Dashboard from '../modules/dashboard/dashboard';
import Sensor from '../modules/sensor/sensor';

export const paths = {
    root: '/',
    login: '/login/',
    dashboard: '/dashboard/',
    sensor: '/sensor/:sensorId',
    usableSensor: '/sensor/'
};

export const PrivateRoute = ({ children, ...rest }) => {
    const token = useTokenReducer();


    return (
        <Route
            {...rest}
            render={({ location }) =>
                token ? (children) :
                    (<Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />)
            }
        />
    );
};


export const Routes = () => (
    <>
        <Switch>

            <Route
                exact
                path={paths.login}
                render={props => <Login {...props} />}
            />
            <Route
                exact
                path={paths.root}
                render={() => <Redirect to={'/login'} />}
            />
            <PrivateRoute
                exact
                path={paths.dashboard}>
                <Dashboard />
            </PrivateRoute>
            <PrivateRoute
                exact
                path={paths.sensor}>
                <Sensor />
            </PrivateRoute>
            <Route render={props => <NotFound {...props} />} />
        </Switch>
    </>
);