import React, { useReducer } from 'react'
import './App.css';
import Counter from './Components/UseMemoHook/Counter';
import HooksGetFetch from './Components/HooksGetFetch';
import HooksSingleFetch from './Components/HooksSingleFetch';
import ComponentC from './Components/ComponentC';
import UseReducer from './Components/UseReducer';
import UseReducerObject from './UseReducerObject';
import MultipleUserReducer from './MultipleUserReducer';
import UserContextWithUserReducer from './UserContextWithUserReducer';
import FetchDataWithUseReducer from './FetchDataWithUseReducer';
import ParentComponent from './Components/UseCallBackHook/ParentComponent';
import FocusInput from './Components/UseRefHook/FocusInput';
import Timer from './Components/UseRefHook/Timer';
import HooksTimer from './Components/UseRefHook/HooksTimer';
import DocTitleOne from './Components/CustomerHook/DocTitleOne';
import DocTitleTwo from './Components/CustomerHook/DocTitleTwo';
import CounterCustomerHookone from './Components/CustomerHook/CounterCustomerHookone';
import CounterCustomeHookTwo from './Components/CustomerHook/CounterCustomeHookTwo';
import UserForm from './Components/CustomerHook/UserForm';

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();
export const CounterContext = React.createContext();

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

function App() {
  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <div className="App">
      {/* <Counter/> */}
      {/* <HooksGetFetch/> */}
      {/* <HooksSingleFetch/> */}
      {/* <UserContext.Provider value ={"Avanthi"}>
      <ChannelContext.Provider value = {"Nice Girl"}>
      <ComponentC/>
      </ChannelContext.Provider>
      </UserContext.Provider> */}
      {/* <UseReducer/> */}
      {/* <UseReducerObject/> */}
      {/* <MultipleUserReducer/> */}
      {/* <CounterContext.Provider value ={{countValue: count, counterDispatch: dispatch}}>
      <UserContextWithUserReducer/>
      </CounterContext.Provider> */}
      {/* <FetchDataWithUseReducer/> */}
      {/* <ParentComponent/> */}
      {/* <Counter/> */}
      {/* <FocusInput/> */}
      {/* <Timer/> */}
      {/* <HooksTimer/> */}
      {/* <DocTitleOne/>
      <DocTitleTwo/> */}
      <CounterCustomerHookone/>
      <CounterCustomeHookTwo/>
      <UserForm/>
    </div>
  );
}

export default App;
