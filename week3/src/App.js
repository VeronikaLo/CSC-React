
import './App.css';
import shopping from './assets/shopping.jpg';
import man from './assets/man.jpg';
import GroceryList from './GroceryList';

function App() {
  return (
    
    <div className="App" >
      <img src={ shopping } width='250px' alt='shopping'></img>
      <h1>Grocery List</h1>
      <GroceryList/>
      <img src={ man } width='250px' alt='man'></img>
    </div>
    
  );
}

export default App;
