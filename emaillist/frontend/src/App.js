import React, {useState, useEffect} from 'react';
import './assets/css/App.css';
import Emaillist from './Emaillist';
import data from './assets/json/data.json';
import RegisterForm from './RegisterForm';
import Searchbar from './Searchbar';

export default function App(props) {
    const [emails, setEmails] = useState([]);

    const fetchEmails = async () => {
        try {
            const response = await fetch('/api/email', {
                method: 'get',
                headers: {
                    'Accept': 'application/json'
                }
            });

            if(!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }

            const json = await response.json();
            if(json.result !== 'success'){
                throw new Error(`${json.result} ${json.message}`)
            }

            setEmails(json.data);
        } catch(err){
            console.log(err.message);
        }  
    }

    useEffect(() => {
        fetchEmails();
    }, []);

    const addRegister = async (firstName, lastName, email) => {
        const newEmaillist = {
            no: null,
            firstName:firstName,
            lastName:lastName,
            email:email
        };
        
        try{
            const response = await fetch('/api/email', {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body:  JSON.stringify(newEmaillist)
            });

            if(!response.ok){
                throw new Error(`${response.status} ${response.statusText}`)     //error 발생시 다 catch 로 넘겨줌
            }

            const json = await response.json();
            if(json.result !== 'success'){
                throw new Error(`${json.result} ${json.message}`);
            }

            setEmails([json.data, ...emails]);
        }catch(err){
            console.log(err.message);
        }
    
    }


    const notifyKeyWordChanged = (keyword) => {
        // keyword가 firstName or lastName or email
        const emails = data.filter(e => e.firstName.indexOf(keyword) != -1 || e.lastName.indexOf(keyword) != -1 || e.email.indexOf(keyword) != -1);
        setEmails(emails);
    }
    return (
        <div id='App'>
             <RegisterForm callbackRegister={addRegister}/>
             <Searchbar callback={notifyKeyWordChanged}/>
             <Emaillist emails={emails}/>
            
             
        </div>
    );
}

