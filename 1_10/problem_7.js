/////////////////////////////////////////////
// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
//
// What is the 10 001st prime number?
////////////////////////////////////////////

const EXAMPLE        = 6;
const EXAMPLE_RESULT = 13;

function findNthPrime( number )
{
    let primes         = [ 2 ];
    let naturalNumbers = 2;

    while (primes.length <= number)
    {
        if (primes.some( prime => naturalNumbers % prime === 0) === false)
            primes.push( naturalNumbers );

        naturalNumbers += 1;
    }

    return primes[ number - 1 ];
}

let result = findNthPrime( EXAMPLE );
console.assert( result === EXAMPLE_RESULT, `don't match ${ result } vs ${ EXAMPLE_RESULT }`);
console.log( result, 'result')

result = findNthPrime( 10001 );
console.log( result, 'result')
