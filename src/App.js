import React, { useState } from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { incrementByAmount } from './features/counter/counterSlice';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
const [ state, setState ] = useState();
const buttonHandler = () => {
  dispatch(incrementByAmount(Number(state)))
}

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <input type="text" className="App-input" placeholder="Enter a counter"
          value={state} onChange={(e) => setState(e.target.value)} />
        <button onClick={buttonHandler}>ADD</button>
      </header>
    </div>
  );
}

export default App;
