
import './App.css';
import girl from './assets/girl.jpg';
import Activities from './Activities';
import cat from './assets/cat.jpg';
import Likes from './Likes';

function App() {
  return (
    <div className="App">
      <img src ={ girl } width="300px" alt="girl"/>
      <h1>My activities</h1>
      <Activities/>
      <img src ={ cat } width="200px" alt="cat" className='image'/>
      {/*<Likes/>*/}
    </div>
  );
}

export default App;
