import React, { useState, useEffect } from 'react';
import style from '../CurrentTime/CurrentTime.module.css';

function CurrentTime() {
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString());
        }, 1000); // Update time every second

        return () => clearInterval(intervalId); // Cleanup interval on component unmount
    }, []);

    return (
        <div>
            <h5>Current Time: <span className={style.setTime}>{currentTime}</span></h5>
        </div>
    );
}

export default CurrentTime;