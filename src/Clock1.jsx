import React, {useState, useEffect} from 'react';

function Clock1() {

    const [time, setTime] = useState(new Date());
    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        }
    }, []);

    function formatTime() {
        let hours = time.getHours();
        const min = time.getMinutes();
        const sec = time.getSeconds();
        const meridiem = hours >= 12 ? "PM" : "AM";

        hours = hours % 12 || 12;
        return `${padTime(hours)}: ${padTime(min)}:${padTime(sec)} ${meridiem}`;
    }

    function padTime(num){
        return (num < 10 ? "0" : "") + num;
    }
    
    return (
        <div className = "container1">
            <div className="clock">
               <span>{formatTime()}</span>
            </div>
        </div>
    );
}

export default Clock1;
