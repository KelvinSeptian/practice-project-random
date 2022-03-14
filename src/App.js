import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function App() {
  const [numDice, setNumDice] = useState();
  const [numSides,setNumSides] = useState();
  const [out,setOut] = useState([]);

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
function takeinfo(){
  
  console.log(numDice);
  console.log(numSides);

  let temp = [];

  for(let i = 0;i<numDice;i++){
    temp.push(getRandomInt(1, numSides))
  }

  setOut(temp)
}

  return (
    <div className="app">
      <div>
        <input onChange={e => setNumDice(e.target.value)} />
        <select value="Choose num of sides" onChange={e => setNumSides(e.target.value)}>
          <option disabled defaultValue={true}> Choose num of sides</option>
          <option value="6" >6</option>
          <option value="8" >8</option>
          <option value="10" >10</option>
          <option value="12" >12</option>
          <option value="14" >14</option>
          <option value="16" >16</option>
          <option value="18" >18</option>
          <option value="20" >20</option>
        </select>
      </div>
      <div className='button'>
        <Button size="small" variant="contained" onClick={takeinfo}>generate random number</Button>
      </div>
     

      {/* <button onClick={takeinfo}>
        save changes
      </button> */}
      <div>

      </div>
      {out.map(x => <div>{x}</div>)}
    </div>
  );
}

export default App;
