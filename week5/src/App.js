import React, { useState } from 'react';
import './App.css';
import { data } from './data';
import { data2 } from './data2';



function App() {

  const[name, setName]= useState("Anna");
  const[age, setAge] = useState(20);
  const[count, setCount]= useState(100);
  const[text, setText] = useState("I LOVE JAVA SCRIPT");

  const[books, setBooks]= useState(data);
  const[films, setFilms]= useState(data2);


  const handleClick=()=>{
    setName("Emely");
    setAge(30);
  }

  const handleCount=()=>{
    setCount(count-5);
  }

  const handleText=()=>{
    if(text==="I LOVE JAVA SCRIPT"){
      setText("I LOVE REACT");
    }
    else{
      setText("I LOVE JAVA SCRIPT");
    }
  }

  return (
    <div className="App">
      <h1>Hello {name} !</h1>
      <h2>I am {age} years old.</h2>
      <button onClick={handleClick}>Click</button>

      <h2>{count}</h2>
      <button onClick={handleCount}>CLICK</button>

      <h2>{text}</h2>
      <button onClick={handleText}>CLICK</button>

      <h2>Best books of 2021</h2>
      {
        books.map((book=>{
          const {id, title, author} = book;
          return(
            <div key={id}>
              <p>{id}. {author} "{title}".</p>
            </div>
          )
        }))
      }
      <button onClick={()=> setBooks([])}>DELETE</button>


      <h2>Best films of 2021</h2>
      {
        films.map((film=>{
          const {id, title, director, cast} = film;
          return(
            <div key={id}>
              <p>{id}. "{title}".</p>
              <p>Director: { director }</p>
              <p>Cast: { cast }</p>
            </div>
          )
        }))
      }
      <button onClick={()=> setFilms([])}>DELETE</button>


    </div>
  );
}


/*class App extends React.Component{

  state={
    count:100
  }

  handleClick =()=> {
    this.setState({
      count: this.state.count-5
    })
  }

  render(){
    return(
      <>
      <h2>{this.state.count}</h2>
      <button onClick ={this.handleClick}>CLICK</button>
      </>
    )
  }

}

*/

export default App;
