import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects'
import { reducer } from './reducer';
import { coreSaga } from './saga';
import { composeWithDevTools } from 'redux-devtools-extension'
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router'

export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(combineReducers({ reducer, router: connectRouter(history) }), composeWithDevTools(
    compose(applyMiddleware(
        routerMiddleware(history),
        sagaMiddleware
    ))
));

const rootSaga = function* () {
    yield all([coreSaga()])
};

sagaMiddleware.run(rootSaga);

