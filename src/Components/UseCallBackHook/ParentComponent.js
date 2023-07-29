import React, { useCallback, useState } from 'react';
import Title from './Title';
import Count from './Count';
import Button from './Button';

function ParentComponent() {
    const [age, setAge] = useState(40);
    const [salary, setSalary] = useState(4000);

    const incrementAge =useCallback(() =>{
        setAge(age +1)

    }, [age])
    
    const incrementSalary = useCallback(()=>{
        setSalary(salary +2000)

    }, [salary])

     
    
  return (
    <div>
        <Title/>
        <Count text={"age"} count={age} />
        <Button handleClick={incrementAge}>incrementAge</Button>
        <Count text={"salary"} count={salary} />
        <Button handleClick={incrementSalary}>incrementSalary</Button>
      
    </div>
  );
}

export default ParentComponent;
