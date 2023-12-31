import React, { useState } from 'react';
import useInput from './useInput';

function UserForm() {
    // const [firstName, setFirstName] = useState('');
    // const [lastName, setLastName] = useState('');
    const [firstName, bindFirstName, resetFirstName ] = useInput('')
    const [lastName, bindLastName, resetLastName ] = useInput('')

    const submitHandler =(e) =>{
        e.preventDefault();
        alert(`hello ${firstName} - ${lastName}`)
        resetFirstName()
        resetLastName()
    }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
            <label>firstName</label>
            <input type='text'
             {...bindFirstName}
             />
        </div>
        <div>
            <label>LastName</label>
            <input type='text' 
            {...bindLastName}
            />
        </div>
        <button >submit</button>
      </form>
    </div>
  );
}

export default UserForm;
