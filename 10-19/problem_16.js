//////////////////////////////////////
// 215 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
//
// What is the sum of the digits of the number 21000?
//////////////////////////////////////

const bigInteger = require( '../vendor/bigInteger' );

const EXAMPLE = 15;
const RESULT  = 26;

function findSumOfExponent( number )
{
	const exponentiated = bigInteger( 2 ).pow( number );

	if (Array.isArray( exponentiated.value ))
		return exponentiated.value.reduce(( prev, current ) => prev + sumNumbers( current ), 0 );
	else
		return sumNumbers( exponentiated.value );
}

function sumNumbers( number )
{
	return ('' + number).split( '' )
		.reduce(( prev, current ) => prev + Number( current ), 0 );
}

let result = findSumOfExponent( EXAMPLE );
console.assert( result === RESULT, result, RESULT );

result = findSumOfExponent( 1000 );
console.log( result, 'result' );
