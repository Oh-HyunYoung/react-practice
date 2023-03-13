import React, {useState, useEffect} from 'react';
import './assets/css/App.css';
import Emaillist from './Emaillist';
import data from './assets/json/data.json';
import RegisterForm from './RegisterForm';
import Searchbar from './Searchbar';

export default function App(props) {
    const [emails, setEmails] = useState(data);
    const notifyKeyWordChanged = (e) => {
        // keyword가 firstName or lastName or email
        //setEmails(e.target.value.toLowerCase())
        const newEmails = emails.filter((keywordlist) => 
            e.email.indexOf(keywordlist)
        );
        setEmails(emails);
    }

    return (
        <div id='App'>
             <RegisterForm/>
             <Searchbar callback={notifyKeyWordChanged}/>
             <Emaillist data={data}/>
             
        </div>
    );
}

