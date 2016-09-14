/////////////////////////////////////
// Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.
//
//
// How many such routes are there through a 20×20 grid?
/////////////////////////////////////

const EXAMPLE = [ 2, 2 ];
const EXAMPLE_RESULT = 6;

// Used permutations and combinations
function findRoutes( gridCorners )
{
	let totalPosibilites = gridCorners[ 0 ] + gridCorners[ 1 ];
	let dividend         = 1;
	let divisor          = 1;

	for (let i = 1; i <= totalPosibilites; i += 1)
	{
		if (i <= gridCorners[ 1 ]) divisor *= i;
		else                       dividend *= i;
	}

	return dividend / divisor;
}

let result = findRoutes( EXAMPLE );
console.assert( result === EXAMPLE_RESULT, result, EXAMPLE_RESULT );

result = findRoutes([ 20, 20 ]);
console.log( 'result: ', result );
