import React, { useContext } from 'react';
import { CounterContext } from './App';

function UserContextWithUserReducer() {
    const counterContext = useContext(CounterContext)
  return (
    <div>
      count -{counterContext.countValue}
      <button onClick={()=> counterContext.counterDispatch('increment')}>Increment</button>
      <button onClick={()=> counterContext.counterDispatch('decrement')}>decrement</button>
      <button onClick={()=> counterContext.counterDispatch('reset')}>Reset</button>
    </div>
  );
}

export default UserContextWithUserReducer;
