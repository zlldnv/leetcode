/**
 * @param {number[][]} grid
 * @return {number}
 */
const maxIncreaseKeepingSkyline = grid => {
  const verticalLength = grid[0].length;
  const horizonalMax = Array(grid.length).fill(0);
  const verticalMax = Array(verticalLength).fill(0);
  let summ = 0;

  const iterateGrid = callback => {
    for (let column = 0; column < verticalLength; column++) {
      for (let row = 0; row < grid.length; row++) {
        callback(row, column);
      }
    }
  };
  iterateGrid((row, column) => {
    horizonalMax[row] = Math.max(horizonalMax[row], grid[row][column]);
    verticalMax[column] = Math.max(verticalMax[column], grid[row][column]);
  });
  iterateGrid((row, column) => {
    summ += Math.min(horizonalMax[row], verticalMax[column]) - grid[row][column];
  });

  return summ;
};

console.log(maxIncreaseKeepingSkyline([[3, 0, 8, 4], [2, 4, 5, 7], [9, 2, 6, 3], [0, 3, 1, 0]]));
