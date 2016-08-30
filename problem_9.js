///////////////////////////////////////////////
// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
//
// a2 + b2 = c2
// For example, 32 + 42 = 9 + 16 = 25 = 52.
//
// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.
////////////////////////////////////////////////

function findPythagoreanTriplet()
{
	let a = 2;
	let b = 3;
	let c = 0;

	let found   = false;
	let result  = null;

	while (found === false)
	{
		let square = a * a + b * b;
		c          = Math.sqrt( square );

		if (c === ( c | 0 ))
		{
			if (a + b + c === 1000)
			{
				found  = true;
				result = a * b * c;
			}
		}

		b += 1;

		if (b > 1000)
		{
			a += 1;
			b  = a + 1;

			if (a > 1000) found = true;
		}
	}

	console.log( result, 'result' )
}

findPythagoreanTriplet();