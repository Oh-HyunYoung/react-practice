import React from 'react';
import styles from './assets/css/Emaillist.css';

const Email = ({no, firstName, lastName, email, onDelete}) => {
    return (
        <li>
            {firstName+lastName}    
            <br></br>       
            {email}
            <a href='' onClick={e=>{
                    e.preventDefault();
                    onDelete(no);
                    }}/>
        </li>
    );
};

export default Email;