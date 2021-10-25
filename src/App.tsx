import React from 'react';
import Game from './components/game';
import Header from './components/header';
import './App.css';
import Footer from './components/footer';

const App: React.FC = () => {
  const gameLabels = [
    [2, 4, 2, null],
    [16, 4, null, null],
    [64, 128, 8, 32],
    [1024, 2048, 512, 256],
  ];

  return (
    <div className="app-container">
      <Header scrore={0} bestScore={0} />
      <Game gameLabels={gameLabels} />
      <Footer />
    </div>
  );
};

export default App;
