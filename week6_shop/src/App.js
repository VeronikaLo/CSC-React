import React, {useState} from 'react';
import { data } from './data';
import Clothes from './Clothes';
import Buttons from './Buttons';

import './App.css';

function App() {

  const[clothes, setClothes] = useState(data);

  const chosenClothes=(searchTerm)=>{
    const newClothes = data.filter(element=> element.searchTerm === searchTerm);
    setClothes(newClothes);
  }
  return (
    <div className="App">
      <div className='cont'>
        <h2 className='back'>Free Standard Shipping</h2>
      </div>
      <Buttons filteredClothes={chosenClothes}/>
      <Clothes data = {clothes}/> 
     
    </div>
  );
}

export default App;
