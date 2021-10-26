import React, { useState } from 'react';
import Game from './components/game';
import Header from './components/header';
import './App.css';
import Footer from './components/footer';

const App: React.FC = () => {
  const initialGameLabels: GameLabels = [
    [null, null, null, null],
    [null, null, 2, null],
    [null, null, 2, null],
    [null, null, null, null],
  ];

  const [gameLabels, setGameLabels] = useState(initialGameLabels);

  return (
    <div className="app-container">
      <Header scrore={0} bestScore={0} />
      <Game gameLabels={gameLabels} setGameLabels={setGameLabels} />
      <Footer />
    </div>
  );
};

export default App;
