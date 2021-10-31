import { useEffect } from 'react';
import gameLogic from '../../game-logic';
import Row from '../row';
import './styles.css';

type GameProps = {
  gameLabels: GameLabels;
  status: string;
  setGameLabels: React.Dispatch<React.SetStateAction<GameLabels>>;
  setStatus: React.Dispatch<React.SetStateAction<string>>;
};

const Game: React.FC<GameProps> = ({
  gameLabels,
  status,
  setGameLabels,
  setStatus,
}) => {
  const handleKeyDown = (event: KeyboardEvent) => {
    event.preventDefault();
    let result: GameLabels = [];

    switch (event.key) {
      case 'ArrowUp': {
        result = gameLogic.addCell(gameLabels, gameLogic.shiftUp(gameLabels));
        setGameLabels(result);
        break;
      }
      case 'ArrowRight': {
        result = gameLogic.addCell(
          gameLabels,
          gameLogic.shiftRight(gameLabels)
        );
        setGameLabels(result);
        break;
      }
      case 'ArrowDown': {
        result = gameLogic.addCell(gameLabels, gameLogic.shiftDown(gameLabels));
        setGameLabels(result);
        break;
      }
      case 'ArrowLeft': {
        result = gameLogic.addCell(gameLabels, gameLogic.shiftLeft(gameLabels));
        setGameLabels(result);
        break;
      }
      default:
    }

    if (gameLogic.hasNoMovesLeft(result)) {
      setStatus('over');
    }

    if (gameLogic.has2048(result) && status !== 'continue') {
      setStatus('won');
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  useEffect(() => {
    if (!['continue', 'running'].includes(status)) {
      window.removeEventListener('keydown', handleKeyDown);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  return (
    <div className="game-container">
      {gameLabels.map((labels, index) => (
        <Row labels={labels} key={index} />
      ))}
    </div>
  );
};

export default Game;
