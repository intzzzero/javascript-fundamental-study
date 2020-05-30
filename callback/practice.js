// callback :

const cbFunc = function () {
	let count = 0;
	const innerFunc = function () {
		return (count = count + 1);
	};
	return innerFunc;
};

const myCount = cbFunc();
console.log(myCount());
console.log(myCount());
console.log(myCount());

const myCount2 = cbFunc();
console.log(myCount2());
console.log(myCount2());
console.log(myCount2());
