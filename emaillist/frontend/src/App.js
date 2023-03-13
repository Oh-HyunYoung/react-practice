import React, {useState, useEffect} from 'react';
import './assets/css/App.css';
import Emaillist from './Emaillist';
import data from './assets/json/data.json';
import RegisterForm from './RegisterForm';
import Searchbar from './Searchbar';

function App(props) {
    const [emails, setEmails] = useState(data);
    const notifyKeyWordChanged = function() {
        // keyword가 firstName or lastName or email
        const newEmails = emails.filter(function(e) {return true})
    }

    return (
        <div id='App'>
             <RegisterForm/>
             <Searchbar/>
             <Emaillist data={data}/>
             
        </div>
    );
}

export default App;