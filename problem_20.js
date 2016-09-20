
//////////////////////////////////
// n! means n × (n − 1) × ... × 3 × 2 × 1
//
// For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
// and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.
//
// Find the sum of the digits in the number 100!
//////////////////////////////////

const bigint  = require( './vendor/bigInteger' );

const EXAMPLE = 10;
const RESULT  = 27;

/**
 * First we find the factorial using bigint methods
 * Then we check if the factorial number is big or not.
 * If it's a small number, we convert it to a string and start adding all its numbers
 * If it's a big number, we iterate on bigint value array and then we turn them into strings adn
 * add its internal numbers
 */
function findSumOfDigitsOf( number )
{
	let multiplication = bigint( 1 );

	while (number > 0)
	{
		multiplication = multiplication.multiply( number );
		number -= 1;
	}

	if (Array.isArray( multiplication.value ))
		return multiplication.value.reduce( chooseReduce, 0);

	else
		return splitAndReduce( multiplication );
}

function chooseReduce( previous, current )
{
	if (current < 10) return previous + current;

	return previous + splitAndReduce( current );
}

function splitAndReduce( number )
{
	return (number + '').split( '' ).reduce( reduce, 0 )
}

function reduce( previous, current )
{
	return previous + Number( current );
}

let result = findSumOfDigitsOf( EXAMPLE );
console.assert( result === RESULT, result, RESULT );

result = findSumOfDigitsOf( 100 );
console.log( result, ' result' );
