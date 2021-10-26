const boardSize = 4;
const bufferRowLabels: RowLabels = Array.from(Array(boardSize).keys()).map(
  (_) => null
);

const shiftLeft = (rowLabels: RowLabels) => {
  const result = rowLabels
    .filter(Boolean)
    .concat(bufferRowLabels)
    .slice(0, boardSize);

  for (let i = 0; i < rowLabels.length - 1; i++) {
    if (result[i] && result[i + 1] && result[i] === result[i + 1]) {
      result[i] = Number(result[i]) * 2;
      result[i + 1] = null;
    }
  }

  return result.filter(Boolean).concat(bufferRowLabels).slice(0, boardSize);
};

const shiftRight = (rowLabels: RowLabels) => {
  rowLabels = rowLabels.filter(Boolean);
  let result: RowLabels = [];

  for (let i = rowLabels.length - 1; i > 0; i--) {
    if (rowLabels[i] && rowLabels[i - 1] && rowLabels[i] === rowLabels[i - 1]) {
      result[i] = Number(result[i]) * 2;
      rowLabels[i - 1] = null;
    }
  }

  result = bufferRowLabels.concat(rowLabels.filter(Boolean));
  result = result.slice(result.length - boardSize);
  return result;
};

const gameLabelsFunction = (gameLabels: GameLabels, func: GameFunc) => {
  gameLabels.forEach((rowLabels) => func(rowLabels));
};

const addRandomCell = (gameLabels: GameLabels) => {
  const availableCells = getAvailableCells(gameLabels);
  const availableCellsLength = availableCells.length;

  if (!availableCellsLength) {
    return gameLabels;
  }

  const randomIndex = Math.floor(Math.random() * availableCellsLength);
  const randomNumber = Math.random() < 0.9 ? 2 : 4;
  const { row, col } = availableCells[randomIndex];

  gameLabels[row][col] = randomNumber;

  return gameLabels;
};

const getAvailableCells = (gameLabels: GameLabels) => {
  const result: CellAvailable[] = [];

  gameLabels.forEach((rowLabels, rowIndex) => {
    rowLabels.forEach((cellLabel, columnIndex) => {
      if (cellLabel == null) {
        result.push({ row: rowIndex, col: columnIndex });
      }
    });
  });

  return result;
};

const gameLogic = {
  shiftLeft: (gameLabels: GameLabels) => {
    const mergedGameLabels: GameLabels = [];

    gameLabelsFunction(gameLabels, (rowLabels: RowLabels) => {
      mergedGameLabels.push(shiftLeft(rowLabels));
    });

    return mergedGameLabels;
  },
  shiftRight: (gameLabels: GameLabels) => {
    const mergedGameLabels: GameLabels = [];

    gameLabelsFunction(gameLabels, (rowLabels: RowLabels) => {
      mergedGameLabels.push(shiftRight(rowLabels));
    });

    return mergedGameLabels;
  },
  rotateRight: (gameLabels: GameLabels) => {
    const result: GameLabels = [];

    for (let i = 0; i < gameLabels.length; i++) {
      const rowLabels: RowLabels = [];
      for (let j = gameLabels.length - 1; j >= 0; j--) {
        rowLabels.push(gameLabels[j][i]);
      }

      result.push(rowLabels);
    }

    return result;
  },
  rotateLeft: (gameLabels: GameLabels) => {
    const result: GameLabels = [];

    for (let i = gameLabels.length - 1; i >= 0; i--) {
      const rowLabels: RowLabels = [];
      for (let j = 0; j < gameLabels.length; j++) {
        rowLabels.push(gameLabels[j][i]);
      }

      result.push(rowLabels);
    }

    return result;
  },
  shiftUp: (gameLabels: GameLabels) => {
    let result: GameLabels = [];

    result = gameLogic.rotateLeft(gameLabels);
    result = gameLogic.shiftLeft(result);
    result = gameLogic.rotateRight(result);

    return result;
  },
  shiftDown: (gameLabels: GameLabels) => {
    let result: GameLabels = [];

    result = gameLogic.rotateRight(gameLabels);
    result = gameLogic.shiftLeft(result);
    result = gameLogic.rotateLeft(result);

    return result;
  },
  addRandomCell: (gameLabels: GameLabels) => {
    return addRandomCell(gameLabels);
  },
  getAvailableCells: (gameLabels: GameLabels) => {
    return getAvailableCells(gameLabels);
  },
};

export default gameLogic;
