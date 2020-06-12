import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './counter.js'

function App() {
  let [counter_var ,setCounter] = useState(0)
  let [ismorning,setMorning] = useState(true)
  return (
    <div className={`daytime ${ismorning ? "night" : ''}`}>

      <Counter count = {counter_var} colorchanger={ismorning}/>
      <button onClick={()=>setCounter(counter_var + 1)} 
       className={`headingnite ${ismorning ? "headingday" : ''}`}>Clicker</button>

      <button onClick={()=>setMorning(!ismorning)} 
       className={`headingnite ${ismorning ? "headingday" : ''}`}>change Time</button>
    </div>
  );
}

export default App;
