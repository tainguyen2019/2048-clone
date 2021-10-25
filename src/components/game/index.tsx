import Row from '../row';
import './styles.css';

type GameProps = {
  gameLabels: (number | null)[][];
};

const Game: React.FC<GameProps> = ({ gameLabels }) => {
  return (
    <div className="game-container">
      {gameLabels.map((labels, index) => (
        <Row labels={labels} key={index} />
      ))}
    </div>
  );
};

export default Game;
