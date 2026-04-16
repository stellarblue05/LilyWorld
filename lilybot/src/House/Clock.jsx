import React, {useState, useEffect} from 'react';
import './Clock.css'
const Clock = (props) => {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date())
        }, 1000);

        return () => {
            clearInterval(intervalId)
        }
    }, []);

    function formatTime(){
        const hours = time.getHours()
        const minutes = time.getMinutes()
        const seconds = time.getSeconds()
        return `${padZero(hours)}:${padZero(minutes)}`;
    }

    function formatDate(){
        const year = time.getFullYear();
        const month = time.getMonth() + 1;
        const day = time.getDate();
        return `${padZero(day)}/${padZero(month)}/${padZero(year)}`;
    }

    function padZero(num) {
        return (num < 10 ? '0' : '') + num;
    }
    
    return (
        <div className='clock'>
            <p className='time'>{formatTime()}</p>
            <p className='date'>{formatDate()}</p>
        </div>
    );
}

export default Clock;
