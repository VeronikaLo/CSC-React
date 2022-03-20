import React, { useState} from "react";
import { dataHotels } from "./dataHotels";

function BestHotels(){

const[hotels, setHotels] = useState(dataHotels);
const[show, setShow] = useState(false);


const removeItem =(id)=>{
    let newHotels = hotels.filter(hotel=> hotel.id !== id);
    setHotels(newHotels);
}

const handleClick = (hotel)=>{
    hotel.show = !hotel.show
    setShow(!show);
}

    return(
        <div className="hotels">
            <div >
                {hotels.length > 0 ?
                <h2>TOP {hotels.length} Hotels in Osnabrück</h2> :
                <h2>Willkommen</h2>
                }
            </div>

        {hotels.map((hotel=>{

        const{ id, hotelName, description, image, source, show } = hotel;
        return(
            <div key={id} className='hotels'>
            <div >
                <h3>{id} - {hotelName}</h3>
            </div>
            <div >
                <p>{ show ? description : description.substring(0, 150) + "..."}
                <button onClick={()=>handleClick(hotel)} className="btn_hotels2"> {show? "Show less": "Show more"}</button>
                </p>
            </div>
            <div >
                <img  src={image} width="500px" alt={hotelName}/>
            </div>
            <div>
                <a href={source}>Homepage</a>
            </div>
            <div className='container'>
                <button className='btn_hotels' onClick={()=> removeItem (id)}> Remove</button>
            </div>
            </div>
        )
      }))}
 
        <div>
            {
                hotels.length > 0 &&
                <button onClick = {()=> setHotels([])} className="btn_hotels extra">Remove all</button>
            }
        </div>

        </div>

    )
}

export default BestHotels;