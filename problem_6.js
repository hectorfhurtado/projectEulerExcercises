/////////////////////////////////////////////////////////////////
// The sum of the squares of the first ten natural numbers is,
//
// 12 + 22 + ... + 102 = 385
// The square of the sum of the first ten natural numbers is,
//
// (1 + 2 + ... + 10)2 = 552 = 3025
// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.
//
// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
//////////////////////////////////////////////////////////////////

const EXAMPLE = 10;
const EXAMPLE_RESULT = 2640;

function getDifferenceFor( number )
{
    return squareOfSum( number ) - sumOfSquares( number );
}

function sumOfSquares( number )
{
    let sum = 0;

    for (let i = 1; i <= number; i += 1)
        sum += i * i;

    return sum;
}

function squareOfSum( number )
{
    let sum = 0

    for (let i = 1; i <= number; i += 1)
        sum += i;

    return sum * sum;
}

let result = getDifferenceFor( EXAMPLE )
console.assert( result === EXAMPLE_RESULT, `They are different: ${ result } !== ${ EXAMPLE_RESULT }`);

result = getDifferenceFor( 100 );
console.log( 'result ', result );
