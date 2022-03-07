import React, { useState } from 'react';
import './App.css';
import { data } from './data';

function App() {

  const[gifts, setGifts] = useState(data);
  console.log(data);

  const removeItem = (id) =>{
    let newGifts = gifts.filter(gift => gift.id !== id);
    console.log(id);
    setGifts(newGifts);
  }

  return (
    <div >
      <div className='container'>
          <h1>List of {gifts.length} gifts</h1>
      </div>

      {
        gifts.map((element =>{

          const{id, gifty, image } = element;
            return(
              <div key={id}>
                <div className='container'>
                  <h2>{id} - {gifty}</h2>
                </div>

                <div className='container'>
                  <img src={image} width ="300px" alt={gifty}/>
                  </div>

                <div className='container'>
                  <button onClick={() => removeItem(id)}>remove</button>
                </div>

              </div>
            )
        }))
      }
      
      <div className='container'>
          <button onClick={()=> setGifts([])}>delete all</button>
      </div>

    </div>
  );
}

export default App;
