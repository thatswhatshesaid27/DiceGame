import { useState } from 'react';
import StartGame from './components/StartGame';
import GamePlay from './components/GamePlay';

function App() {
  const [isGameStarted, setGameStarted] = useState(false);

  // Corrected function to toggle game state
  const toggleGameStarted = () => {
    setGameStarted((prev) => !prev);
  };

  return (
    <>
      {isGameStarted ? <GamePlay /> : <StartGame toggle={toggleGameStarted} />}
    </>
  );
}

export default App;
