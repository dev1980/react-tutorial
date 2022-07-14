import React, {useState} from "react";
import List from "./List";
import data from './data'



function App() {
  const[person, setPerson] = useState(data)
  return (
    <div className="App">
     <h1>Today we have {person.length} Birthday</h1>
    <div className="article">
      <div className="flex">
        <List person = {person} />
      </div>
    </div>
    <button onClick = {()=> {setPerson([])}}>Delete All</button>
    </div>
  );
}

export default App;
