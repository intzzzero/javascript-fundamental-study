function solution(X, Y) {
	let A = 0;
	let B = 0;
	let C = 0;

	for (let i = 1; i <= X; i++) {
		if (i.toString().includes(Y.toString())) {
			C = 10;
			A += 1;
			B += i;
			C *= i;
		}
	}

	return [ A, B, C ];
}

console.log(solution(20, 0));
