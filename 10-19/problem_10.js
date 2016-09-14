//////////////////////////////////////
// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
//
// Find the sum of all the primes below two million.
//////////////////////////////////////

const EXAMPLE = 10;
const EXAMPLE_RESULT = 17;

function sumPrimes( number )
{
    let primes         = [ 2 ];
    let naturalNumbers = 2;
	let sum = 2; 

    while (naturalNumbers < number)
    {
        if (primes.some( prime => naturalNumbers % prime === 0) === false)
		{
            primes.push( naturalNumbers );
			sum += naturalNumbers;
		}

        naturalNumbers += 1;
    }

    return sum;
}

let result = sumPrimes( EXAMPLE );
console.assert( result === EXAMPLE_RESULT, result, EXAMPLE_RESULT);

result = sumPrimes( 2000000 );
console.log( result );