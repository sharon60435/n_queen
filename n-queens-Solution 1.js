// Solution 1
// .Q..
// ...Q
// Q...
// ..Q.

var queen = 0

var print_answer = function (columns) {
  for (let i = 0; i < columns.length; i++) {
    for (let j = 0; j < columns.length; j++) {
      process.stdout.write(columns[i] === j ? "Q " : ". ");
    }
    process.stdout.write("\n");
  }
};

var check = function (columns) {
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
    if (!check(columns) &&
        place_next_queen(total, queens - 1, columns)) {
      return columns
    }
    columns.pop(column)
  }

  return null
}

print_answer(place_next_queen(4, 4))
console.log('\nqueen: ', queen)

// answer:
// [ 1, 3, 0, 2 ] columns
// # Q # # 
// # # # Q 
// Q # # # 
// # # Q # 