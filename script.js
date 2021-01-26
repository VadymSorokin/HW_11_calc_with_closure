//const calc = createCalculator(10);

//calc.sum(5); /// 15
//calc.mult(10); // 150
//calc.sub(40); // 110
//calc.div(10); // 11
//calc.set(100); // 100

const calc = createCalculator(10);

function createCalculator(a) {
	const sum = () => {
		return a += 5;
	}
	const mult = () => {
		return a *= 10;
	}
	const sub = () => {
		return a -= 40;
	}
	const div = () => {
		return a /= 10;
	}
	const set = () => {
		return a = 100;
	}
	return {
		sum,
		mult,
		sub,
		div,
		set,
	}
}

console.log(calc.sum());
console.log(calc.mult());
console.log(calc.sub());
console.log(calc.div());
console.log(calc.set());
