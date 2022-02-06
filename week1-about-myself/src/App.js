
import './App.css';
import Image from './components/Image';
import Facts from './components/Facts';
import Pictures from './components/Pictures';

function App() {
  return (
    <div className="wrapper">
      <div className='container'>
        <h1>About me</h1>
      </div>
      <div className='container'>  
        <h2>My name is Veronika</h2>
      </div>
      <div className='container'>
        <Image/>
      </div>
      <div className='container'>
        <Facts/>
      </div>
        <Pictures/>
      
      
    </div>
  );
}

export default App;
