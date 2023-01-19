import React, { useState } from 'react';
import './Counter.css';

const Conter = () => {
    const [counter,setCounter] = useState(0)
    const increment = () => {
        setCounter(counter + 1);
      };
      const decrement = () => {
        setCounter(counter -1);
      };
      const reset = () =>{
         setCounter(0)
      }

    return (
        <div className="counter-container">
        <p className="counter">Counter: {counter}</p>
        <button className="increment" onClick={increment}>Increment</button>
        <button className="decrement" onClick={decrement}>Decrement</button>
        <button className="reset" onClick={reset}>Reset</button>
      </div>
      );
}
 
export default Conter;