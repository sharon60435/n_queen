/**
 * @param {number} n
 * @return {string[][]}
 */
// var solveNQueens = function(n) {
//   var res = [];
//   if (n === 1 || n >= 4) dfs(res, [], n, 0);
//   return res;
// };

// var dfs = function (res, points, n, index) {
//   for (var i = index; i < n; i++) {
//     if (points.length !== i) return;
//     for (var j = 0; j < n; j++) {
//       if (isValid(points, [i, j])) {
//         points.push([i, j]);
//         dfs(res, points, n, i + 1);
//         if (points.length === n) res.push(buildRes(points));
//         points.pop();
//       }
//     }
//   }
// };

// var buildRes = function (points) {
//   var res = [];
//   var n = points.length;
//   for (var i = 0; i < n; i++) {
//     res[i] = '';
//     for (var j = 0; j < n; j++) {
//       res[i] += (points[i][1] === j ? 'Q' : '.');
//     }
//   }
//   return res;
// };

// var isValid = function (oldPoints, newPoint) {
//   var len = oldPoints.length;
//   for (var i = 0; i < len; i++) {
//     if (oldPoints[i][0] === newPoint[0] || oldPoints[i][1] === newPoint[1]) return false;
//     if (Math.abs((oldPoints[i][0] - newPoint[0]) / (oldPoints[i][1] - newPoint[1])) === 1) return false;
//   }
//   return true;
// };

var iterations = 0

var print_board = function (columns) {
  for (let i = 0; i < columns.length; i++) {
    for (let j = 0; j < columns.length; j++) {
      process.stdout.write(columns[i] === j ? "Q " : "# ");
    }
    process.stdout.write("\n");
  }
};

var has_conflict = function (columns) {
  var len = columns.length, last = columns[len - 1], previous = len - 2

  while (previous >= 0) {
    if (columns[previous] === last) return true
    if (last - (len - 1) === columns[previous] - previous) return true
    if (last + (len - 1) === columns[previous] + previous) return true
    previous--
  }

  return false
}

var place_next_queen = function (total, queens, columns) {
  console.log(total,'total');
  console.log(queens,'queens');
  console.log(columns,'columns');
  if (queens === 0) return columns
  columns = columns || []

  for (var column = 0; column < total; column++) {
    columns.push(column)
    iterations++
    if (!has_conflict(columns) &&
        place_next_queen(total, queens - 1, columns)) {
      return columns
    }
    columns.pop(column)
  }

  return null
}

print_board(place_next_queen(4, 4))
console.log('\niterations: ', iterations)