import React from 'react';

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