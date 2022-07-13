// Solution 1
// .Q..
// ...Q
// Q...
// ..Q.

var queen = 0

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
  console.log(columns,'columns');
  if (queens === 0) return columns
  columns = columns || []

  for (var column = 0; column < total; column++) {
    columns.push(column)
    queen++
    if (!has_conflict(columns) &&
        place_next_queen(total, queens - 1, columns)) {
      return columns
    }
    columns.pop(column)
  }

  return null
}

print_board(place_next_queen(4, 4))
console.log('\nqueen: ', queen)