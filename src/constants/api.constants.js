import { axiosInstance } from './axios.constants';

export const login = async (username, password) => {
    const params = new URLSearchParams();
    params.append('username', username);
    params.append('password', password);
    params.append('grant_type', 'password');
    return axiosInstance.post(process.env.REACT_APP_API_LOGIN_URL_SUFFIX, params);
}
export const getSensors = async (token) => await axiosInstance.get(process.env.REACT_APP_API_SENSORS_SUFFIX, { headers: { 'Authorization': 'Bearer ' + token } });
export const getSensor = async (token, id) => await axiosInstance.get(process.env.REACT_APP_API_SENSOR_SUFFIX + id, { headers: { 'Authorization': 'Bearer ' + token } });
export const getMe = async (token) => await axiosInstance.get(process.env.REACT_APP_API_USER_URL_SUFFIX, { headers: { 'Authorization': 'Bearer ' + token } });
export const deleteSensor = async (token, id) => await axiosInstance.delete(process.env.REACT_APP_API_SENSOR_SUFFIX + id, { headers: { 'Authorization': 'Bearer ' + token } });
export const updateSensor = async (token, sensor) => await axiosInstance.put(process.env.REACT_APP_API_SENSOR_SUFFIX + sensor.id, sensor, { headers: { 'Authorization': 'Bearer ' + token } });
export const getHealth = async () => axiosInstance.get(process.env.REACT_APP_API_HEALTH);