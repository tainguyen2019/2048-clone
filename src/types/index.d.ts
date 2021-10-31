type CellLabel = number | null;

type RowLabels = CellLabel[];

type GameLabels = RowLabels[];

type GameFunc = (rowLabel: RowLabels) => void;

type CellAvailable = {
  row: number;
  col: number;
};
