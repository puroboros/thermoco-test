import React, { useEffect, useState } from 'react';
import styles from './sensor.module.scss'
import { useDispatch } from 'react-redux';
import { useSensorReducer } from '../../store/reducer';
import { sensorRequest, updateSensorRequest } from '../../store/actions';
import { useParams } from 'react-router-dom';

const Sensor = () => {
    const sensor = useSensorReducer();
    const { sensorId } = useParams();
    const dispatch = useDispatch();
    const [formSensor, setFormSensor] = useState(sensor);
    useEffect(() => {
        if (sensor === null) {
            dispatch(sensorRequest(sensorId));
        } else {
            if (+sensor.id !== +sensorId) {
                dispatch(sensorRequest(sensorId));
            } else {
                setFormSensor(sensor);
            }
        }
    }, [sensor, sensorId, dispatch]);

    const update = (event) => {
        event.preventDefault();
        dispatch(updateSensorRequest(formSensor));
    };
    return (
        <div className={`${styles.container} ${styles.generalMarginBottom}`}>
            <h1>Sensor {sensorId}</h1>
            {formSensor &&
                <div>
                    <form>
                        <div >
                            <div>Id: <input value={formSensor.id} onChange={(event => setFormSensor({ ...formSensor, id: event.target.value }))} /></div>
                            <div>Description: <input value={formSensor.description} onChange={(event => setFormSensor({ ...formSensor, description: event.target.value }))} /></div>
                            <div>Active:  <input type={'checkbox'} checked={formSensor.isActive} onChange={(event => setFormSensor({ ...formSensor, isActive: event.target.checked }))} /></div>
                            <div>Sampling Period:  <input value={formSensor.samplingPeriod} onChange={(event => setFormSensor({ ...formSensor, samplingPeriod: event.target.value }))} /></div>
                        </div>
                        <button onClick={update}>Update</button>
                    </form>
                </div>
            }
        </div>
    );
};

export default Sensor;