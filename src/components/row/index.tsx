import Cell from '../cell';
import './styles.css';

type RowProps = {
  labels: RowLabels;
};

const Row: React.FC<RowProps> = ({ labels }) => {
  return (
    <div className="row">
      {labels.map((label, index) => (
        <Cell label={label} key={index} />
      ))}
    </div>
  );
};

export default Row;
