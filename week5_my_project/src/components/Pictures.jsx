import React, {useState} from "react";
import { dataPictures } from "./dataPictures";

function Pictures(){

    const[count, setCount] = useState(0);

    const next =()=>{
        setCount((count => {count++;
            if(count> dataPictures.length-1){
                count = 0;
            }
        return count}));

    }

    const back =()=>{
        setCount((count => {count--;
            if(count < 0){
                count = dataPictures.length-1 ;
            }
        return count}));

    }


    return(
        <div className="picture">

            <button onClick= {back} className="btn_pictures">Back</button>

            <img src= {dataPictures[count]} width="600px" alt = "osnabrueck" />

            <button onClick= {next} className="btn_pictures">Next</button>


        </div>
    )
}

export default Pictures;