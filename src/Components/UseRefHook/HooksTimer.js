import React, {useState, useEffect, useRef} from 'react';

function HooksTimer() {
    const [timer, setTimer] = useState(0);
    const intervalRef = useRef()
    useEffect(()=>{
         intervalRef.current = setInterval(()=>{
            setTimer(prevTimer => prevTimer + 1)
        }, 1000)

        return ()=>{
            clearInterval(intervalRef.current)
        }
    
    }, [timer])
  return (
    <div>
      HookTimer - {timer}
       {/* cause the problem that interval is not defined. since it is scoped only inside the useEffect */}
      {/* <button onClick={clearInterval(interval)}>stop timer</button> */}
      <button onClick={()=>clearInterval(intervalRef.current)}> stop timer</button>
    </div>
  );
}

export default HooksTimer;
