import { useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
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
  const updateStatus = (gameLabelsInput: GameLabels) => {
    if (gameLogic.hasNoMovesLeft(gameLabelsInput)) {
      setStatus('over');
    }

    if (gameLogic.has2048(gameLabelsInput) && status !== 'continue') {
      setStatus('won');
    }
  };

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
    updateStatus(result);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      let result: GameLabels = [];
      result = gameLogic.addCell(gameLabels, gameLogic.shiftLeft(gameLabels));
      setGameLabels(result);
      updateStatus(result);
    },
    onSwipedRight: () => {
      let result: GameLabels = [];
      result = gameLogic.addCell(gameLabels, gameLogic.shiftRight(gameLabels));
      setGameLabels(result);
      updateStatus(result);
    },
    onSwipedUp: () => {
      let result: GameLabels = [];
      result = gameLogic.addCell(gameLabels, gameLogic.shiftUp(gameLabels));
      setGameLabels(result);
      updateStatus(result);
    },
    onSwipedDown: () => {
      let result: GameLabels = [];
      result = gameLogic.addCell(gameLabels, gameLogic.shiftDown(gameLabels));
      setGameLabels(result);
      updateStatus(result);
    },
  });

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
    <div className="game-container" {...handlers}>
      {gameLabels.map((labels, index) => (
        <Row labels={labels} key={index} />
      ))}
    </div>
  );
};

export default Game;
