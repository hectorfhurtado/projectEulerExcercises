/**
 * The prime factors of 13195 are 5, 7, 13 and 29.
 * 
 * What is the largest prime factor of the number 600851475143 ?
 */
// let primos = [ 2, 3, 5, 7, 11, 13 ];

const ejemplo = 13195;
const resultado = 29;

function siguientePrimo( primo, primos )
{
    let p = primo;

    debugger;

    while (primos.some( valor => p % valor === 0 ))
    {
        p += 1;
    }

    return p;
}

function getLargestPrimeFactor( numero )
{
    let cosciente = 0;
    let division = numero;
	let primos = [ 2 ];
    let primo = 2;
    let posibleRespuesta = primo;

    do
    {
        if (division % primo === 0) 
		{
			division /= primo;
			posibleRespuesta = primo;
		}

        primo = siguientePrimo( primo + 1 , primos );
        primos.push( primo );

    } while ( division > 1 );

    return posibleRespuesta;
}

let r = getLargestPrimeFactor( ejemplo );

console.assert( r === resultado, 'No son iguales' );
console.log( r, resultado, 'console' );

const problema = 600851475143;

r = getLargestPrimeFactor( problema );

console.log( r , 'respuesta' );
