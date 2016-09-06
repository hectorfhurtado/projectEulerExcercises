/**
 * 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
 *
 * What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
 */
const respuestaEjemplo = 2520;

function calculaMenorNumeroDivisibleDeUnoA( numero )
{
    let minimo         = traeMinimo( numero );
    let respuesta      = 1;
    const listaNumeros = [];

    for (let i = numero; i > 1; i -= 1)
        listaNumeros.push( i );

    let posible = minimo;

    while (respuesta === 1)
    {
        // La primera coincidencia es el numero que buscamos
        if (listaNumeros.every( num => posible % num === 0))
            respuesta = posible;

        posible += minimo;
    }

    return respuesta;
}

/**
 * Calculamos el minimo comun multiplo para poder usarlo como el paso para ir llegando al numero desconocido
 * @param   {number}    numeros
 * @returns {number}
 */
function traeMinimo( numeros )
{
    let primos = [2];

    for (let i = 3; i <= numeros; i += 1)
        if (primos.some( primo => i % primo === 0) === false)
            primos.push( i );

    return primos.reduce(( previo, actual ) => previo * actual, 1 );
}

let calculoEjemplo = calculaMenorNumeroDivisibleDeUnoA( 10 );
console.assert( calculoEjemplo === respuestaEjemplo, 'No son iguales', calculoEjemplo, respuestaEjemplo );

let calculo = calculaMenorNumeroDivisibleDeUnoA( 20 );
console.log('Respuesta: ', calculo);
