import React from 'react';
import { useState } from 'react';

export const Counter = () => {

    const [Counter, setCounter] = useState(0);

    const Increment = () => {
        setCounter(Counter+1);
    }

    const Decrement = () => {
        setCounter(Counter-1);
    }

    const Double = () => {
        setCounter(Counter*2);
    }

  return (
    <div>
        <h1 className={`${Counter%2===0 ? 'green' : 'red'}`} >Counter : { Counter}</h1>
        <button className='btn' onClick={Increment}>Increment</button>
        <button className='btn' onClick={Decrement}>Decrement</button>
        <button className='btn' onClick={Double}>Double</button>
    </div>
  )
}
