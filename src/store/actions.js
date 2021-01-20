export const actionTypes = {
    loginRequest: 'LOGIN_REQUEST',
    loginResponse: 'LOGIN_RESPONSE',
    userResponse: 'USER_RESPONSE',
    sensorsRequest: 'SENSORS_REQUEST',
    sensorsResponse: 'SENSORS_RESPONSE',
    sensorRequest: 'SINGLE_SENSOR_REQUEST',
    sensorResponse: 'SINGLE_SENSOR_RESPONSE',
    deleteSensorRequest: 'DELETE_SENSOR_REQUEST',
    deleteSensorResponse: 'DELETE_SENSOR_RESPONSE',
    updateSensorRequest: 'UPDATE_SENSOR_REQUEST',
    updateSensorResponse: 'UPDATE_SENSOR_RESPONSE',
    logout: 'LOGOUT'
};

export const loginRequest = (username, password) => {
    return { type: actionTypes.loginRequest, payload: {username, password} }
}

export const loginResponse = (payload) => {
    return { type: actionTypes.loginResponse, payload }
};

export const userResponse = (payload) => {
    return { type: actionTypes.userResponse, payload }
};

export const sensorsRequest = () => {
    return { type: actionTypes.sensorsRequest}
}

export const sensorsResponse = (payload) => {
    return { type: actionTypes.sensorsResponse, payload }
};
export const sensorRequest = (id) => {
    return { type: actionTypes.sensorRequest, payload: id}
}

export const sensorResponse = (payload) => {
    return { type: actionTypes.sensorResponse, payload }
};

export const deleteSensorRequest = (id) => {
    return { type: actionTypes.deleteSensorRequest, payload: id}
}

export const deleteSensorResponse = (payload) => {
    return { type: actionTypes.deleteSensorResponse, payload }
};

export const updateSensorRequest = (sensor) => {
    return { type: actionTypes.updateSensorRequest, payload: sensor}
}

export const updateSensorResponse = (payload) => {
    return { type: actionTypes.updateSensorResponse, payload }
};

export const logoutRequest = () => {
    return { type: actionTypes.logout }
};

