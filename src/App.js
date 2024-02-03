import { useState } from 'react';
import './App.css';


function App() {
    const [counter, setCounter] = useState(0);

    function increment(){
      setCounter(counter +1)
    }
    function decrement(){
      setCounter(counter -1)
    }
    function resetCounter(data){
      setCounter(data)
    }


  return (
    <div className="App">
        <h1 id='d'>Counter App</h1>
        <div className="card bg-black container w-50 my-5 border shadow-lg">
      <div className="card-body ">
        <h1 className='text-center text-white'>{counter}</h1>
        <div className='text-center mt-5 w-50 container  bg-black p-3  '>
          <button className='btn btn-success w-10 me-2' onClick={increment} type='button'>increment</button> 
          <button className='btn btn-danger w-10 me-2' onClick={decrement}>decrement</button>
          <button className='btn btn-warning w-10 me-2' onClick={()=>resetCounter(0)}>rest </button>
        </div>
      </div>
    </div>


      
      
    </div>
  );
}

export default App;
