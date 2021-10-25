import './styles.css';

type HeaderProps = {
  scrore: number;
  bestScore: number;
};

const Header: React.FC<HeaderProps> = ({ scrore, bestScore }) => {
  return (
    <div className="header">
      <div className="header-row">
        <div className="title">2048</div>
        <div className="score">
          <div className="score-label">SCORE</div>
          <div className="score-value">{scrore}</div>
        </div>
        <div className="score">
          <div className="score-label">BEST SCORE</div>
          <div className="score-value">{scrore}</div>
        </div>
      </div>
      <div className="new-game">
        <div className="intro">Join the numbers and get to the 2048 tile!</div>
        <button>New Game</button>
      </div>
    </div>
  );
};

export default Header;
