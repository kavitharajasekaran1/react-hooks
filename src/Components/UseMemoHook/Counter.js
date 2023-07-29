import React, {useMemo, useState} from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    const [countTwo, setCountTwo] = useState(0);

    const incrementOne =() =>{
        setCount(count + 1)
    }

    const incrementTwo =() =>{
        setCountTwo(countTwo + 1)
    }

    const isEven = useMemo(() =>{
      let i= 0
      while (i< 20000000) i++;
      return count %2 === 0
  },[count]
)


  return (
    <div>
      <button onClick={incrementOne}>incrementOne- {count}</button>
      <span> 
        {isEven ? 'Even' : 'Odd'}
      </span>
      <button onClick={incrementTwo}>incrementTwo -{countTwo}</button>

    </div>
  );
}

export default Counter;
