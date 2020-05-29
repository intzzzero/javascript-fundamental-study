const robot = {
	name: {
		first: 'codebot',
		second: 'coderoid'
	},
	serialNumber: 1543,
	author: 'Sooyoung Jeong',
	function: ['cook', 'battle', 'homework'],
	bio: function () {
		console.log(
			`${this.name.first} and ${this.name.second} is same robot. Serial number is ${this.serialNumber} and made by ${this.author}`
		);
	},
	whatCanDo: function () {
		this.function.forEach((item) => {
			console.log(item);
		});
	}
};

robot.bio();
