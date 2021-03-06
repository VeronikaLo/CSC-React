import React, { useState } from 'react';
import './App.css';
import { data } from './data';

function App() {

  const[person, setPerson] = useState(0);
  const{id, name, description, age, image} = data[person];

  const nextPerson =()=> {
      setPerson(person => {
        person++;
        if(person > data.length-1){
          person = 0;
        }
        return person;
      })
  }

  const previousPerson =()=> {
    setPerson(person => {
      person --;
      if(person < 0){
        person = data.length-1
      }
      return person;
    })
}

  return (
    <div >
      <div className='container'>
        <img src={image} width="350px" alt="user-profile"/>
      </div>

      <div className='container'>
        <h1>{id} - {name}</h1>
      </div>

      <div className='container'>
        <h2>{description}</h2>
      </div>

      <div className='container'>
        <h2>{age} years old</h2>
      </div>

      <div className='btn'>
        <button onClick={previousPerson}>Previous</button>
        <button onClick={nextPerson}>Next</button>
      </div>

    </div>
  );
}

export default App;
