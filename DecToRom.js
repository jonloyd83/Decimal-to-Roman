let numbersAndNumerals = [
	{ number: 1000, roman: 'M'},
	{ number: 900, roman: 'CM'},
	{ number: 500, roman: 'D'},
	{ number: 400, roman: 'CD'},
	{ number: 100, roman: 'C'},
	{ number: 90, roman: 'XC'},
	{ number: 50, roman: 'L'},
	{ number: 40, roman: 'XL'},
	{ number: 10, roman: 'X'},
	{ number: 9, roman: 'IX'},
	{ number: 5, roman: 'V'},
	{ number: 4, roman: 'IV'},
	{ number: 1, roman: 'I'},
];

	function convert(Number) {
		let romanNumber = '';
		let number = Number;
		for(let i=0; i < numbersAndNumerals.length; i++ ) {
			if(numbersAndNumerals[i].number <= number) {
				number = number - numbersAndNumerals[i].number;

				romanNumber = romanNumber + numbersAndNumerals[i].roman

				i--;
			}
		}
		
		document.getElementById('romanInput').value = romanNumber;
	
	}

	document.getElementById('convert').addEventListener('click', () => {
			let number = document.getElementById('numberInput').value;

			convert(number);
});