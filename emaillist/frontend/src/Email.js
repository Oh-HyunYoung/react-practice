import React from 'react';
import styles from './assets/css/EmailList.css';

const Email = ({no, firstName, lastName, email}) => {
    return (
        <li>
            {firstName+lastName}
            <br/>
            {email}
        </li>
    );
};

export default Email;