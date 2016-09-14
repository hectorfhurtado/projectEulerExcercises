//////////////////////////////////////
// You are given the following information, but you may prefer to do some research for yourself.
//
// - 1 Jan 1900 was a Monday.
// - Thirty days has September,
//   April, June and November.
//   All the rest have thirty-one,
//   Saving February alone,
//   Which has twenty-eight, rain or shine.
//   And on leap years, twenty-nine.
// - A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.
// How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?
///////////////////////////////////////

const monthsWith30Days = [ 4, 6, 9, 11 ];

function findSundays()
{
	let month = 1;		// 1 = January ... 12 December
	let year  = 1900;
	let day   = 2		// days from 1 to 7, 1 is for Sunday

	const DAYS_PER_WEEK   = 7;
	const MONTHS_PER_YEAR = 12;

	let sundays = 0;

	while (year < 2001)
	{
		let days = getNumberOfDaysOf( month, year );
		let rest = days % DAYS_PER_WEEK;

		day += rest;

		if (day > DAYS_PER_WEEK) 
			day -= DAYS_PER_WEEK;

		month += 1;

		if (month > MONTHS_PER_YEAR)
		{
			month -= MONTHS_PER_YEAR;
			year += 1;
		}

		if (day === 1 && year > 1900) 
			sundays += 1;
	}

	return sundays;
}

function getNumberOfDaysOf( month, year )
{
	if (month === 2)
		return isLeap( year ) ? 29 : 28;

	return monthsWith30Days.find( monthNumber => monthNumber === month ) ? 30 : 31;
}

function isLeap( year )
{
	if (year % 4 === 0)
	{
		if (year % 100 === 0) 
		{
			if (year % 400 === 0) return true;

			return false;
		}
		return true;
	}

	return false;
}

let result = findSundays();
console.log( result, ' result');
