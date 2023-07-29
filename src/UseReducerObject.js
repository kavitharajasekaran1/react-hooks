import React, {useReducer} from 'react';

const initialState = {
    firstCounter : 0,
    secondCounter : 1
};
const reducer= (state, action) =>{
    switch(action.type) {
    case 'increment':
        return {...state, firstCounter : state.firstCounter + action.value};
    case 'decrement' :
        return {...state, firstCounter : state.firstCounter -action.value };
    case 'increment1':
        return {...state, secondCounter : state.secondCounter + action.value};
    case 'decrement1' :
        return {...state, secondCounter : state.secondCounter -action.value };    
    case 'reset':
        return initialState;
     default:
        return state           
}
}
function UseReducerObject() {
    const [ count, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
        <div> count -{count.firstCounter}- {count.secondCounter}</div>
      <button onClick={()=> dispatch({type:'increment', value: 1})}>Increment</button>
      <button onClick={()=> dispatch({type:'decrement', value: 1})}>decrement</button>
      <button onClick={()=> dispatch({type:'increment', value: 5})}>Increment to 5</button>
      <button onClick={()=> dispatch({type:'decrement', value: 10})}>decrement to 10</button>
      <button onClick={()=> dispatch({type:'increment1', value: 1})}>Increment second</button>
      <button onClick={()=> dispatch({type:'decrement1', value: 1})}>decrement second</button>
      <button onClick={()=> dispatch({type:'increment1', value: 5})}>Increment to 5 second</button>
      <button onClick={()=> dispatch({type:'decrement1', value: 10})}>decrement to 10 to second</button>
      <button onClick={()=> dispatch({type:'reset'})}>Reset</button>

    </div>
  );
}

export default UseReducerObject;
