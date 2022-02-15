
import './App.css';
import girl from './assets/girl.jpg';
import Activities from './Activities';

function App() {
  return (
    <div className="App">
      <img src ={ girl } width="300px" alt="girl"/>
      <h1>My activities</h1>
      <Activities/>
    </div>
  );
}

export default App;
