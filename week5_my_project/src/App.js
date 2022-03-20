import Pictures from './components/Pictures';
import './App.css';
import BestHotels from './components/BestHotels';

function App() {
  return (
    <div className="App">

        <div>
          <h1>OSNABRÜCK</h1>
        </div>

        <div>
          <p>Die Friedensstadt Osnabrück hat sich bis heute dem Motto des Westfälischen Friedens verpflichtet. Vielleicht leben hier daher einer Umfrage zufolge, die glücklichsten Deutschen. Die viertgrößte Stadt in Niedersachsen (mit rund 170.000 Einwohnern) war bereits im Mittelalter Knotenpunkt wichtiger Handelsrouten. Ob bei einem abwechslungsreichen Rundgang durch die Altstadt oder bei einer Doppeldeckerstadtrundfahrt – in Osnabrück lässt sich vieles entdecken.</p>
        </div>

        <Pictures/>

        <BestHotels/>
      
    </div>
  );
}

export default App;
