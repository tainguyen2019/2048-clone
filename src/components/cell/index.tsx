import './styles.css';

type CellProps = {
  label: CellLabel;
};

const Cell: React.FC<CellProps> = ({ label }) => {
  return <div className={`cell ${label && 'cell-' + label}`}>{label}</div>;
};

export default Cell;
