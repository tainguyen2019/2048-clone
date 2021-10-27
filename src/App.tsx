import React, { useState } from 'react';
import Game from './components/game';
import Header from './components/header';
import './App.css';
import Footer from './components/footer';
import gameLogic from './game-logic';

const App: React.FC = () => {
  const [gameLabels, setGameLabels] = useState(gameLogic.initialGameLabels());

  const handleNewGame = () => {
    setGameLabels(gameLogic.initialGameLabels());
  };

  return (
    <div className="app-container">
      <Header scrore={0} bestScore={0} newGame={handleNewGame} />
      <Game gameLabels={gameLabels} setGameLabels={setGameLabels} />
      <Footer />
    </div>
  );
};

export default App;
