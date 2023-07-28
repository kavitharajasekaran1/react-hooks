import React from 'react'
import './App.css';
import Counter from './Components/Counter';
import HooksGetFetch from './Components/HooksGetFetch';
import HooksSingleFetch from './Components/HooksSingleFetch';
import ComponentC from './Components/ComponentC';

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();
function App() {
  return (
    <div className="App">
      {/* <Counter/> */}
      {/* <HooksGetFetch/> */}
      {/* <HooksSingleFetch/> */}
      <UserContext.Provider value ={"Avanthi"}>
      <ChannelContext.Provider value = {"Nice Girl"}>
      <ComponentC/>
      </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
