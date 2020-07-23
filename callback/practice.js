// callback :

const cbFunc = function() {
	let count = 0;
	const innerFunc = function() {
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

const cheers = () => {
	return console.log('cheers!');
};

const letsBeerParty = (cb, beer) => {
	setTimeout(cb, 1000);
	return console.log(`I like ${beer}!`);
};

letsBeerParty(cheers, 'cass');
// I like cass!
// cheers! after 1 sec
