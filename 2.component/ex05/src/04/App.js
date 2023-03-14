import React, {useState, useEffect} from 'react';
import './assets/scss/App.scss'
import Clock from './Clock';

export default function App() {
    const [ticks, setTick] = useState(new Date());

    useEffect(() => {
        const id = setInterval(() => {
            setTick(new Date());
        }, 1000);
        return(()=>clearInterval(id))
    }, []);

    return (
        <div>
            <span>{ticks.toLocaleTimeString()}</span>
        {
            ticks.getSeconds() % 10 === 0?
            null : 

            <Clock
                message={'ex05: useEffect Hook example'} 
                hours={ticks.getHours()}
                minutes={ticks.getMinutes()}
                seconds={ticks.getSeconds()}/>
        }
        </div>
    );
}