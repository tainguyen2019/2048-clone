import { useEffect } from 'react';
import gameLogic from '../../game-logic';
import Row from '../row';
import './styles.css';

type GameProps = {
  gameLabels: GameLabels;
  setGameLabels: React.Dispatch<React.SetStateAction<GameLabels>>;
};

const Game: React.FC<GameProps> = ({ gameLabels, setGameLabels }) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      event.preventDefault();

      switch (event.key) {
        case 'ArrowUp': {
          const result: GameLabels = gameLogic.addCell(
            gameLabels,
            gameLogic.shiftUp(gameLabels)
          );
          setGameLabels(result);
          break;
        }
        case 'ArrowRight': {
          const result: GameLabels = gameLogic.addCell(
            gameLabels,
            gameLogic.shiftRight(gameLabels)
          );
          setGameLabels(result);
          break;
        }
        case 'ArrowDown': {
          const result: GameLabels = gameLogic.addCell(
            gameLabels,
            gameLogic.shiftDown(gameLabels)
          );
          setGameLabels(result);
          break;
        }
        case 'ArrowLeft': {
          const result: GameLabels = gameLogic.addCell(
            gameLabels,
            gameLogic.shiftLeft(gameLabels)
          );
          setGameLabels(result);
          break;
        }
        default:
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  return (
    <div className="game-container">
      {gameLabels.map((labels, index) => (
        <Row labels={labels} key={index} />
      ))}
    </div>
  );
};

export default Game;
