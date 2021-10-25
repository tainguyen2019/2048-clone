import './styles.css';

type CellProps = {
  label: number | null;
};

const Cell: React.FC<CellProps> = ({ label }) => {
  return <div className={`cell ${label && 'cell-' + label}`}>{label}</div>;
};

export default Cell;
