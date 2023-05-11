import {React,useState} from 'react'
import './Counts.css'

function Counts() {
    const[counter,setCounter]=useState(0)
    const increase=()=>{
    
      setCounter(count=>count+1);
    
    };
    const decrease=()=>{
    
      setCounter(count=>count-1);
      
    };
    const reset=()=>{
      setCounter(0)
    }
  return (
    
        <div className='counter'>
          <h1>COUNTER</h1>
          <span className='cow'>{counter}</span>
          <div className='container'>
            <button className='controlbtn'onClick={increase}>+</button>
            {/* <span className='cow'>{counter}</span> */}
            <button className='reset'onClick={reset}>Reset</button>
            <button className='controlbtn'onClick={decrease}>-</button>
            {/* <button className='reset'onClick={reset}>Reset</button> */}
           
          </div>
        </div>
      );
    }
    
  


export default Counts