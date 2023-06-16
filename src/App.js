import './App.css';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <header className='header-background'>
        <div className='header-hero-section'>
          <Navbar />
          <div className='header-hero'>
            <h1>I am a hero</h1>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
