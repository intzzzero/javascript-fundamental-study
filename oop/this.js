// 프로퍼티 자신이 속한 객체를 가리키는 this

const kim = {
	name: 'kim',
	first: 10,
	second: 20,
	sum: function () {
		return this.first + this.second;
	}
};

console.log(kim.sum());
