let beerSet = new Set([ 'cass', 'goose', 'terra', 'cass' ]);
// console.log(beerSet);

beerSet.add('terra');
beerSet.add('kozel');
beerSet.forEach(beer => {
	console.log(beer);
});

// practice
// 중복 여부 확인
function isDuplicated(arr) {
	var mySet = new Set(arr);
	return mySet.size < arr.length;
}

console.log(isDuplicated([ 1, 1, 2, 3 ])); // true
console.log(isDuplicated([ 1, 2, 3 ])); // false

// 고유값으로 배열 생성
function uniqueElements(list1, list2) {
	var mySet = new Set(list1.concat(list2));
	return Array.from(mySet);
}

console.log(uniqueElements([ 1, 2, 4, 5 ], [ 2, 3, 5, 6 ]));
// (6) [1, 2, 4, 5, 3, 6]
