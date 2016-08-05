/**
 * A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
 * 
 * Find the largest palindrome made from the product of two 3-digit numbers.
 */

const NUMERO_DIGITOS = 2;
const RESULTADO      = 9009;

function rango( digitos )
{
    let rangoInferior = 0;
    let rangoSuperior = 0;

    while (( '' + rangoInferior ).length < digitos )
    {
        rangoInferior += 1;
    }

    rangoSuperior = rangoInferior + 1;

    while (( '' + rangoSuperior ).length == digitos )
    {
        rangoSuperior += 1;
    }

    return [ rangoInferior, rangoSuperior - 1 ];
}

function palindrome( digitos )
{
    const [ rangoInferior, rangoSuperior ] = rango( digitos );

    let multiplicando = rangoSuperior;
    let multiplicador = rangoSuperior;
    let encontrado    = false;
    let producto      = 0;

    let palindromeEncontrado = 0;

    while (multiplicando > rangoInferior )
    {
        producto = multiplicando * multiplicador;

        if (esPalindrome( '' + producto ))
        {
            if ( producto > palindromeEncontrado ) palindromeEncontrado = producto;
        }

        multiplicador -= 1;

        if (multiplicador < rangoInferior)
        {
            multiplicando -= 1;
            multiplicador = rangoSuperior;
        }
    }

    return palindromeEncontrado;
}

/**
 * @param   {String}    numero
 * @returns {Boolean}
 */
function esPalindrome( numero )
{
    const longitudNumero = numero.length
    const tope           = Math.ceil( longitudNumero / 2 );

    for (let i = 0; i < tope; i += 1)
    {
        if (numero[ i ] !== numero[( longitudNumero - 1 ) - i ]) return false;
    }

    return true;
}

const prueba1 = palindrome( NUMERO_DIGITOS );

console.assert( prueba1 === RESULTADO, 'No son iguales', prueba1, RESULTADO );

const prueba2 = palindrome( 3 );

console.log( 'resultado: ', prueba2 );