// Solution 2
// ..Q.
// Q...
// ...Q
// .Q..

var N = 4;

var ld = new Array(30);

var rd = new Array(30);

var cl = new Array(30);

function printAnswer( board)
{
	for (let i = 0; i < N; i++)
	{
		for (let j = 0; j < N; j++)
      process.stdout.write(board[i][j] + " ");
		process.stdout.write("\n");
	}
}

function solveNQUtil(board, col)
{
	if (col >= N)
		return true;

	for (let i = 0; i < N; i++)
	{
		
		if ((ld[i - col + N - 1] != 1 &&
			rd[i + col] != 1) && cl[i] != 1)
		{
		
			board[i][col] = 'Q';
			ld[i - col + N - 1] =
			rd[i + col] = cl[i] = 1;

			if (solveNQUtil(board, col + 1))
				return true;

			board[i][col] = '.'; 
			ld[i - col + N - 1] =
			rd[i + col] = cl[i] = 0;
		}
	}

	return false;
}

function solveNQ()
{
	let board = [[ `.`, `.`,`.`,`.` ],
					[ `.`, `.`,`.`,`.` ],
					[ `.`, `.`,`.`,`.` ],
					[ `.`, `.`,`.`,`.` ]];

	if (solveNQUtil(board, 0) == false)
	{
		process.stdout.write("noAnser");
		return false;
	}

	printAnswer(board);
	return true;
}

	solveNQ();

