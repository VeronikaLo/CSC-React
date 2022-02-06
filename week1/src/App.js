import './App.css';
import pic from './grocery.jpg';
import GroceryList from './GroceryList';
import GroceryPic from './GroceryPic';

function App() {

  const sayhi= () =>{
    alert('Hallo, user!');
  }

  const saybye =() =>{
    alert('Bye-bye, user!');
  }

  return (
    <div>
      
      <div className="pic">
        <img src={pic} className="App-logo" alt="logo" /> 
      </div>
      <h2>Grocery List</h2>
      <GroceryList/>
      <GroceryPic/>
      
      <button onClick={sayhi}>BUTTON HELLO</button>

      <button onClick={saybye}>BUTTON BYE</button>
    </div>
  );
}

export default App;
