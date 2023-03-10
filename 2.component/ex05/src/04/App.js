import React, {useState, useEffect} from 'react';
import './assets/scss/App.scss'
import Clock from './Clock';

export default function App() {
    const [ticks, setTick] = useState(0);

    return (
        <div>
            <span>{ticks}</span>
        {
            ticks % 10 == 0?
            null : 

            <Clock
                message={'ex05: useEffect Hook example'}
                hours={state.hours}
                minutes={state.minutes}
                seconds={state.seconds}/>
        }
        </div>
    );
}