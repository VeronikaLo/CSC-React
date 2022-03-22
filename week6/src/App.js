import React, { useState } from "react";
// for routing:
import { BrowserRouter as Router, Routes , Route,Link } from "react-router-dom";
import Home from "./Home";
import About from "./About"
import Birds from "./Birds";
import Dogs from "./Dogs";
import { dataBirds } from "./dataBirds";
import { dataDogs } from "./dataDogs";
import './App.css';

function App() {

    const[birds, setBirds] = useState(dataBirds);
    const[dogs, setDogs] = useState(dataDogs);

  return (
    <Router >
      <nav>
        <Link to="/about" className="link">About</Link>
        <Link to="/home" className="link">Home</Link>
        <Link to="/birds" className="link">Birds</Link>
        <Link to="/dogs" className="link">Dogs</Link>
      </nav>
      <Routes>
        <Route path="/about" element= {<About/>}/>
        <Route path="/home" element= {<Home/>}/>
        <Route path="/birds" element= {<Birds bird={birds}/>}/>
        <Route path="/dogs" element= {<Dogs dog ={dogs}/>}/>
      </Routes>
      
      
    </Router>
  );
}

export default App;
