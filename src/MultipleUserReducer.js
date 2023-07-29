import React, {useReducer} from 'react';

const initialState = 0;
const reducer= (state, action) =>{
    switch(action) {
    case 'increment':
        return state +1;
    case 'decrement' :
        return state -1;
    case 'reset':
        return initialState;
     default:
        return state           
}
}
function MultipleUserReducer() {
    const [ count, dispatch] = useReducer(reducer, initialState);
    const [ counter2, dispatch2 ] = useReducer(reducer, initialState)
  return (
    <div>
        <div> count -{count}</div>
      <button onClick={()=> dispatch('increment')}>Increment</button>
      <button onClick={()=> dispatch('decrement')}>decrement</button>
      <button onClick={()=> dispatch('reset')}>Reset</button>
      <div> counter2 - {counter2}</div>
      <button onClick={()=> dispatch2('increment')}>Increment</button>
      <button onClick={()=> dispatch2('decrement')}>decrement</button>
      <button onClick={()=> dispatch2('reset')}>Reset</button>

    </div>
  );
}

export default MultipleUserReducer;
