import React from 'react';
import styles from './assets/css/EmailList.css';
import Email from './Email';

const EmailList = ({data}) => {
    return (
        <ul className={styles.EmailList}>
           {
                data.map(email => <Email
                                    key={email.no}
                                    no={email.no}
                                    firstName={email.firstName}
                                    lastName={email.lastName}
                                    email={email.email}
                                    />)
            }

        </ul>
    );
};

export default EmailList;