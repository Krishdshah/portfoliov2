import { useState } from 'react';
import TerminalApp from './TerminalApp';
import ScrollingApp from './ScrollingApp';
import Preloader from './components/Preloader'; // Import the Preloader
import './index.css';

function App() {
  const [isLoading, setIsLoading] = useState(true); // State to manage loading
  const [view, setView] = useState('scrolling'); 

  // If the app is loading, show the preloader
  if (isLoading) {
    return <Preloader onLoaded={() => setIsLoading(false)} />;
  }

  // Once loading is complete, show the selected portfolio version
  return (
    <>
      {view === 'terminal' ? 
        <TerminalApp setView={setView} currentView={view} /> : 
        <ScrollingApp setView={setView} currentView={view} />}
    </>
  );
}

export default App;