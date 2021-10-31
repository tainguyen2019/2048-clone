import './styles.css';

type GameOverlayProps = {
  status: string;
  setStatus: React.Dispatch<React.SetStateAction<string>>;
  tryAgain: VoidFunction;
  keepGoing: VoidFunction;
};

const GameOverlay: React.FC<GameOverlayProps> = ({
  status,
  setStatus,
  tryAgain,
  keepGoing,
}) => {
  const display = ['running', 'continue'].includes(status) ? 'none' : 'flex';

  return (
    <div className="game-overlay" style={{ display }}>
      {status === 'over' && (
        <div className="overlay-box">
          <div className="message">Game Over!</div>
          <button onClick={tryAgain}>Try Again</button>
        </div>
      )}
      {status === 'won' && (
        <div className="overlay-box">
          <div className="message">You win!</div>
          <div className="row-button">
            <button onClick={tryAgain}>Try Again</button>
            <button onClick={keepGoing}>Keep going</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GameOverlay;
