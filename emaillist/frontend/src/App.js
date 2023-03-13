import React, {useState, useEffect} from 'react';
import './assets/css/App.css';
import Emaillist from './Emaillist';
import data from './assets/json/data.json';
import RegisterForm from './RegisterForm';
import Searchbar from './Searchbar';

export default function App(props) {
    const [emails, setEmails] = useState(data);
    const notifyKeyWordChanged = (keyword) => {
        // keyword가 firstName or lastName or email
        //setEmails(e.target.value.toLowerCase())
        const emails = data.filter(e => e.firstName.indexOf(keyword) != -1 || e.lastName.indexOf(keyword) != -1 || e.email.indexOf(keyword) != -1);
        setEmails(emails);
    }
    return (
        <div id='App'>
             <RegisterForm/>
             <Searchbar callback={notifyKeyWordChanged}/>
             <Emaillist emails={emails}/>
             
        </div>
    );
}

