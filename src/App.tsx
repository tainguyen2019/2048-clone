import React, { useState } from 'react';
import Game from './components/game';
import Header from './components/header';
import Footer from './components/footer';
import gameLogic from './game-logic';
import GameOverlay from './components/game-overlay';
import './App.css';

const App: React.FC = () => {
  const [gameLabels, setGameLabels] = useState(gameLogic.initialGameLabels());
  const [status, setStatus] = useState('running');

  const handleNewGame = () => {
    setGameLabels(gameLogic.initialGameLabels());
  };

  const handleTryAgain = () => {
    setStatus('running');
    handleNewGame();
  };

  const handleKeepGoing = () => {
    setStatus('continue');
  };

  return (
    <div className="app-container">
      <Header scrore={0} bestScore={0} newGame={handleNewGame} />
      <GameOverlay
        status={status}
        setStatus={setStatus}
        tryAgain={handleTryAgain}
        keepGoing={handleKeepGoing}
      />
      <Game
        gameLabels={gameLabels}
        status={status}
        setGameLabels={setGameLabels}
        setStatus={setStatus}
      />
      <Footer />
    </div>
  );
};

export default App;
