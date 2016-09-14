/////////////////////////////////////
// By starting at the top of the triangle below and moving to adjacent numbers on the row below, the maximum total from top to bottom is 23.

//    3
//   7 4
//  2 4 6
// 8 5 9 3

// That is, 3 + 7 + 4 + 9 = 23.

// Find the maximum total from top to bottom of the triangle below:

//               75
//              95 64
//             17 47 82
//            18 35 87 10
//           20 04 82 47 65
//          19 01 23 75 03 34
//         88 02 77 73 07 63 67
//        99 65 04 28 06 16 70 92
//       41 41 26 56 83 40 80 70 33
//      41 48 72 33 47 32 37 16 94 29
//     53 71 44 65 25 43 91 52 97 51 14
//    70 11 33 28 77 73 17 78 39 68 17 57
//   91 71 52 38 17 14 91 43 58 50 27 29 48
//  63 66 04 68 89 53 67 30 73 16 69 87 40 31
// 04 62 98 27 23 09 70 98 73 93 38 53 60 04 23
///////////////////////////////////////

const EXAMPLE = 
`3
7 4
2 4 6
8 5 9 3`
	.split( '\n' )
	.map( n => n
		.split( ' ' )
		.map( m => Number( m ))
	);

const RESULT = 23;

const EXERCISE =
`75
95 64
17 47 82
18 35 87 10
20 04 82 47 65
19 01 23 75 03 34
88 02 77 73 07 63 67
99 65 04 28 06 16 70 92
41 41 26 56 83 40 80 70 33
41 48 72 33 47 32 37 16 94 29
53 71 44 65 25 43 91 52 97 51 14
70 11 33 28 77 73 17 78 39 68 17 57
91 71 52 38 17 14 91 43 58 50 27 29 48
63 66 04 68 89 53 67 30 73 16 69 87 40 31
04 62 98 27 23 09 70 98 73 93 38 53 60 04 23`
	.split( '\n' )
	.map( n => n
		.split( ' ' )
		.map( m => Number( m ))
	);

function findMaximumTotal( triangle )
{
	let localIndex = 0;
	let total      = 0;

	for (let row = 0; row < triangle.length; row += 1)
	{
		const currentRow  = triangle[ row ];
		const nextRow     = triangle[ row + 1 ];
		const nextNextRow = triangle[ row + 2 ];

		total += currentRow[ localIndex ];

		if (Array.isArray( nextRow ))
		{
			// I try to look if the next two rows (4 possible paths) are convenient adding and comparing them up
			if (Array.isArray( nextNextRow ))
			{
				let left       = nextRow[ localIndex ];
				let right      = nextRow[ localIndex + 1 ];
				let leftLeft   = nextNextRow[ localIndex ];
				let center     = nextNextRow[ localIndex + 1 ];
				let rightRight = nextNextRow[ localIndex + 2 ] || 0;	// when on the edge this maybe a NaN

				let sumLeftLeft    = left  + leftLeft;
				let sumLeftCenter  = left  + center;
				let sumRightCenter = right + center;
				let sumRightRight  = right + rightRight;

				if ((sumRightCenter    > sumLeftLeft && sumRightCenter > sumLeftCenter) ||
						(sumRightRight > sumLeftLeft && sumRightRight  > sumLeftCenter))
					localIndex += 1;
			}
			else
			{
				if (nextRow[ localIndex + 1 ] > nextRow[ localIndex ])
					localIndex += 1;
			}
		}
	}
	return total;
}

let result = findMaximumTotal( EXAMPLE );
console.assert( result === RESULT, result, RESULT );

result = findMaximumTotal( EXERCISE )
console.log( result, 'result' );
