import { actionTypes } from './actions';
import { useSelector } from 'react-redux';

const initialState = {
    token: '',
    sensors: null,
    sensor: null,
    me: null,
    health: null
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.loginResponse:
            return { ...state, token: action.payload };
        case actionTypes.sensorsResponse:
            return { ...state, sensors: action.payload };
        case actionTypes.sensorResponse:
            return { ...state, sensor: action.payload };
        case actionTypes.userResponse:
            return { ...state, me: action.payload };
        case actionTypes.logout:
            return { ...state, me: null, token: '' };
        case actionTypes.healthResponse:
            return { ...state, health: action.payload };
        default:
            return state;
    }
};


export const useTokenReducer = () => {
    return useSelector((state) => state.reducer.token);
}

export const useSensorsReducer = () => {
    return useSelector((state) => state.reducer.sensors);
}

export const getToken = (state) => state.reducer.token;

export const useSensorReducer = () => {
    return useSelector((state) => state.reducer.sensor);
}
export const useMeReducer = () => {
    return useSelector((state) => state.reducer.me);
}
export const useHealthReducer = () => {
    return useSelector((state) => state.reducer.health);
}