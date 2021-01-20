import { call, put, select, takeEvery } from 'redux-saga/effects'
import { actionTypes, loginResponse, sensorResponse, sensorsResponse, userResponse } from './actions';
import { deleteSensor, getSensor, getSensors, login, updateSensor, getMe } from '../constants/api.constants';
import { push } from 'connected-react-router';
import { paths } from '../routes/routes';
import { getToken } from './reducer';


const loginEffect = function* (action) {
    try {
        const response = yield call(login, action.payload.username, action.payload.password);
        yield put(loginResponse(response.access_token));
        const user = yield call(getMe, response.access_token);
        yield put(userResponse(user));
        yield put(push(process.env.REACT_APP_APP_BASE_URL + paths.dashboard));
    } catch (error) {
        console.error('saga error', error);
    }
};

const fetchSensorsEffect = function* () {
    try {
        const token = yield select(getToken);
        const response = yield call(getSensors, token);
        yield put(sensorsResponse(response));
    } catch (error) {
        console.error('saga error', error);
    }
};

const fetchSensorEffect = function* (action) {
    try {
        const token = yield select(getToken);
        const response = yield call(getSensor, token, action.payload);
        yield put(sensorResponse(response));
    } catch (error) {
        console.error('saga error', error);
    }
};

const deleteSensorEffect = function* (action) {
    try {
        const token = yield select(getToken);
        yield call(deleteSensor, token, action.payload);
        const response = yield call(getSensors, token);
        yield put(sensorsResponse(response));
    } catch (error) {
        console.error('saga error', error);
    }
};

const updateSensorEffect = function* (action) {
    try {
        const token = yield select(getToken);
        const response = yield call(updateSensor, token, action.payload);
        yield put(sensorResponse(response));
        const sensors = yield call(getSensors, token);
        yield put(sensorsResponse(sensors));
    } catch (error) {
        console.error('saga error', error);
    }
};


export const coreSaga = function* () {
    yield takeEvery(actionTypes.loginRequest, loginEffect);
    yield takeEvery(actionTypes.sensorsRequest, fetchSensorsEffect);
    yield takeEvery(actionTypes.sensorRequest, fetchSensorEffect);
    yield takeEvery(actionTypes.deleteSensorRequest, deleteSensorEffect);
    yield takeEvery(actionTypes.updateSensorRequest, updateSensorEffect);
};