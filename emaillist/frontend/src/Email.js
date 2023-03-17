import React from 'react';

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