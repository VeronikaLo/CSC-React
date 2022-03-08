import React, { useState } from 'react';
import './App.css';
import { data } from './data';

function App() {

  const[hotels, setHotels] = useState(data);
  const[show, setShow] = useState(false);

  const removeItem =(id)=>{
    let newHotels = hotels.filter(hotel=> hotel.id !== id);
    setHotels(newHotels);
  }

  const handleClick = (hotel)=>{
    hotel.showMore = !hotel.showMore
    setShow(!show);
  }

  return (
    <div >
      <div className='container'>
        <h1>NYC TOP{hotels.length} HOTELS</h1>
      </div>

      {hotels.map((hotel=>{

        const{id, hotelName, description, image, source, showMore } = hotel;
        return(
          <div key={id}>
            <div className='container'>
              <h2>{id} - {hotelName}</h2>
            </div>
            <div className='container'>
              <p>{ show ? description : description.substring(0, 200) + "..."}
              <button onClick={()=>handleClick(hotel)}> {showMore? "Show less": "Show more"}</button>
              </p>
            </div>
            <div className='container'>
              <img  src={image} width="500px" alt={hotelName}/>
            </div>
            <div className='container'>
              <p>{source}</p>
            </div>
            <div className='container'>
              <button className='btn' onClick={()=> removeItem (id)}> Remove</button>
            </div>
          </div>
        )
      }))}
    </div>
  );
}

export default App;
