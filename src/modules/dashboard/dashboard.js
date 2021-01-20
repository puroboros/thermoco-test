import React, { useEffect, useState } from 'react';
import styles from './dashboard.module.scss'
import { useDispatch } from 'react-redux';
import { useSensorsReducer } from '../../store/reducer';
import { deleteSensorRequest, sensorsRequest } from '../../store/actions';
import { paths } from '../../routes/routes';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const sensors = useSensorsReducer();
    const [propmtVisible, setPromptVisitble] = useState(false);
    const [sensorId, setSensorId] = useState(null);
    const dispatch = useDispatch();
    const promptDeleteSensor = (id) => {
        setSensorId(id);
        setPromptVisitble(true);
    }
    const rejectDeletion = () => {
        setSensorId(null);
        setPromptVisitble(false);
    }
    const proceedDeletion = () => {
        setPromptVisitble(false);
        dispatch(deleteSensorRequest(sensorId));
    }
    useEffect(() => {
        if (sensors === null) {
            dispatch(sensorsRequest());
        }
    }, [sensors, dispatch]);

    return (
        <div className={`${styles.container} ${styles.generalMarginBottom}`}>
            {propmtVisible && <div className={styles.modal}>
                <div className={styles.modalContent}>
                    <div>Are you sure about deleting Sensor: {sensorId}?</div>
                    <button onClick={proceedDeletion}>Yes</button>
                    <button onClick={rejectDeletion}>No</button>
                </div>
            </div>}
            <h1>Sensors</h1>
            {sensors &&
                <div>
                    {sensors.map((sensor, index) =>
                        <div key={index} className={styles.sensor}>
                            <div>Id: {sensor.id}</div>
                            <div>Description: {sensor.description}</div>
                            <div>Active: {sensor.isActive ? 'yes' : 'no'}</div>
                            <div>Sampling Period: {sensor.samplingPeriod}</div>
                            <div>
                                <Link to={`${paths.usableSensor}${sensor.id}`}>Update</Link>
                            </div>
                            <button onClick={() => promptDeleteSensor(sensor.id)}>Delete</button>
                        </div>
                    )}
                </div>
            }
        </div>
    );
};

export default Dashboard;