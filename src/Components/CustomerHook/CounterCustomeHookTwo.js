import React from 'react';
import useCounter from './useCounter';

function CounterCustomeHookTwo() {

    const [count, increment, decrement, reset ] = useCounter()
  return (
    <div>
        <span> count - {count}</span>
      <button onClick = {()=> increment()}>increment</button>
      <button onClick = {()=> decrement()}>decrement</button>
      <button onClick = {()=> reset()}>reset</button>

    </div>
  );
}

export default CounterCustomeHookTwo;
