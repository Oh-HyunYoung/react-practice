import React from 'react';
import './assets/css/App.css';
import EmailList from './EmailList';
import data from './assets/json/data.json';
import RegisterForm from './RegisterForm';

function App(props) {
    return (
        <div id='App'>
             <RegisterForm/>
             <EmailList data={data}/>
        </div>
    );
}

export default App;