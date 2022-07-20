function compareNumbers(number1, number2) {
	const sentence1 = createSentence1(number1, number2);
	const sentence2 = createSentence2(number1, number2);

	return `${sentence1} ${sentence2}`;
}

function createSentence1(number1, number2) {
	let sentence1 = `Os números ${number1} e ${number2}`;
	let checkEqual = 'não';

	if (number1 === number2) {
		checkEqual = '';
	}

	return `${sentence1} ${checkEqual} são iguais.`;
}

function createSentence2(number1, number2) {
	const sum = number1 + number2;
	let compare10 = 'menor';
	let compare20 = 'menor';

	if (sum > 10) {
		compare10 = 'maior';
	}

	if (sum > 20) {
		compare20 = 'maior';
	}

	return `A soma é ${sum}, que é ${compare10} do que 10 e ${compare20} do que 20.`;
}

console.log(compareNumbers(10, 10));