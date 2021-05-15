import NewGrudge from './NewGrudge';
import Grudges from './Grudges';
import React, { useState } from 'react';
import initialState from './initialState';


const App=()=> {
  const [grudges, setGrudges] = useState(initialState);
  const addGrudge = grudge =>{
    grudge.id = grudges.length + 1;
    grudge.forgiven = false;
    setGrudges([grudge, ...grudges])
  }
  const toggleForgiveness = id =>{
    setGrudges(
      grudges.map(grudge =>{
        if(grudge.id !== id) return grudge;
        return{...grudge, forgiven : !grudge.forgiven}
      })
    )
  }
  console.log(grudges)
  return (
    <div className="App">
      <NewGrudge onsubmit = {addGrudge}/>
      <Grudges grudges = {grudges} onForgive={toggleForgiveness}/>
      
    </div>
  );
}

export default App;
