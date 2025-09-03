
import { useCallback, useEffect, useRef, useState } from 'react';
import './App.css';
import CustomeButton from './components/Botton';

function App() {
  const [count,setCount] = useState(0);
  const [val,setVal] =useState(1);
  const ref = useRef();

  const increment= useCallback(()=>{
    setCount((c)=>c+val)
  },[val])


  const decrement=useCallback(()=>{
   setCount((c)=>c-val)
  },[val])

  useEffect(()=>{
    ref.current = count
  },[count])
  return (
    <div className="flex h-screen  flex-row items-center justify-center  gap-x-4">
      <div className='p-5 gap-4 bg-gray-300 rounded-md flex items-center justify-center'><CustomeButton func={decrement} text={"prev"}/>
      <div>new {count}</div>
      <div>prev {ref.current}</div>
     <CustomeButton func={increment} text={"next"}/>
      <input className='border p-1 text-center w-10 text-black bg-white ' type='nunber' value={val} onChange={(e)=>setVal(Number(e.target.value))}/>

     </div>

    </div>
  );
}

export default App;
