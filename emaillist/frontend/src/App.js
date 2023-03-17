import React, {useState, useEffect} from 'react';
import './assets/css/App.css';
import Emaillist from './Emaillist';
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

    const deleteEmails = async (no) => {
        try {
            const response = await fetch(`/api/delete/${no}`, {
                method: 'delete',
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

            const deletelist = emails.filter((nos) => nos.no !== no);
            setEmails(deletelist);

        } catch(err){
            console.log(err.message);
        }  
    }


    const notifyKeyWordChanged  = async (keyword) => {
        try {
            const response = await fetch(`/api/email/${keyword}`, {
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

    return (
        <div id='App'>
             <RegisterForm callbackRegister={addRegister}/>
             <Searchbar callback={notifyKeyWordChanged}/>
             <Emaillist emails={emails}
                        onDelete={deleteEmails}/>
            
             
        </div>
    );
}

