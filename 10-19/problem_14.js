////////////////////////////////////
// The following iterative sequence is defined for the set of positive integers:
//
// n → n/2 (n is even)
// n → 3n + 1 (n is odd)
//
// Using the rule above and starting with 13, we generate the following sequence:
//
// 13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
// It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.
//
// Which starting number, under one million, produces the longest chain?
//
// NOTE: Once the chain starts the terms are allowed to go above one million.
//////////////////////////////////////

const EXAMPLE = 13;
const EXAMPLE_RESULT = 10;

/**
 * number: {
 * 	chain: int;  Number of elements in the chain
 * }
 */
let chains = {};


function findLongestChain( startTerm )
{
	let biggestChainLength = 0;
	let result             = 0;

	for (let i = 2; i <= startTerm; i += 1)
	{
		let chainLength = findChainFor( i );

		if (chainLength > biggestChainLength)
		{
			biggestChainLength = chainLength;
			result = i;
		}
	}

	return result;
}

function findChainFor( number )
{
	let length = 1; 
	let n      = number;

	while (n !== 1)
	{
		if (chains[ n ])
		{
			length += chains[ n ] - 1;
			n = 1;
		} 
		else
		{
			n = (n % 2 === 0) ? nextNumberForEven( n ) : nextNumberForOdd( n );
			length += 1;
		}
	}
	chains[ number ] = length;

	return length;
}

function nextNumberForEven( number )
{
	return number * 0.5;
}

function nextNumberForOdd( number )
{
	return 3 * number + 1;
}

let result = findChainFor( EXAMPLE );
console.assert( result === EXAMPLE_RESULT, result, EXAMPLE_RESULT );

console.log( findLongestChain( EXAMPLE ) );
console.log( findLongestChain( 1000000 ));
