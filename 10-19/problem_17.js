//////////////////////////////////////
// If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.
//
// If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?
//
//
// NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 letters. The use of "and" when writing out numbers is in compliance with British usage.
//////////////////////////////////////

const EXAMPLE = 5;
const RESULT = 19;

const numberCache =
{
	1: 'one',
	2: 'two',
	3: 'three',
	4: 'four',
	5: 'five',
	6: 'six',
	7: 'seven',
	8: 'eight',
	9: 'nine',
	10: 'ten',
	11: 'eleven',
	12: 'twelve',
	13: 'thirteen',
	14: 'fourteen',
	15: 'fifteen',
	16: 'sixteen',
	17: 'seventeen',
	18: 'eighteen',
	19: 'nineteen',
	20: 'twenty',
	30: 'thirty',
	40: 'forty',
	50: 'fifty',
	60: 'sixty',
	70: 'seventy',
	80: 'eighty',
	90: 'ninety',
};

function findSumOfLettersOf( number )
{
	let sum = 0;

	for (let n = 1; n <= number; n += 1)
	{
		let x = n;

		while (x)
			x = clasify( x );
	}

	function clasify( number )
	{
		let n = number;

		if (n < 21)
		{
			sum += numberCache[ n ].length;
			n = 0;
		}
		else if (n < 100)
		{
			let decena = (n / 10) | 0;
			decena = decena * 10;
			sum += numberCache[ decena ].length;
			n -= decena;
		}
		else if (n < 1000)
		{
			let centena = (n / 100) | 0;
			sum += numberCache[ centena ].length;
			sum += 'hundred'.length;

			centena = centena * 100;
			n -= centena;

			if (n) sum += 'and'.length;
		}
		else
		{
			sum += 'onethousand'.length;
			n -= 1000;
		}

		return n;
	}

	return sum;
}


let result = findSumOfLettersOf( EXAMPLE );
console.assert( result === RESULT, result, RESULT );

result = findSumOfLettersOf( 1000 );
console.log( result, result );
