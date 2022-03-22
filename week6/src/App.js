import React, { useState } from "react";
import Birds from "./Birds";
import Dogs from "./Dogs";
import { dataBirds } from "./dataBirds";
import { dataDogs } from "./dataDogs";
import './App.css';

function App() {

    const[birds, setBirds] = useState(dataBirds);
    const[dogs, setDogs] = useState(dataDogs);

  return (
    <div className="App">
      <Birds bird={birds}/>
      <Dogs dog ={dogs}/>
    </div>
  );
}

export default App;
