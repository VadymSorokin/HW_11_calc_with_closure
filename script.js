//const calc = createCalculator(10);

//calc.sum(5); /// 15
//calc.mult(10); // 150
//calc.sub(40); // 110
//calc.div(10); // 11
//calc.set(100); // 100

const calc = createCalculator(10);

function createCalculator(currentNumber) {
	
	return {
		 sum : (num) => {
			return currentNumber += num;
		},
		 mult : (num) => {
			return currentNumber *= num;
		},
		 sub :(num) => {
			return currentNumber -= num;
		},
		 div :(num) => {
			return currentNumber /= num;
		},
		 set : (num) => {
			return currentNumber = num;
		},
	}
}


console.log(calc.sum());
console.log(calc.mult());
console.log(calc.sub());
console.log(calc.div());
console.log(calc.set());
