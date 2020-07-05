class Vehicle {
	constructor(name, species, numberOfWheels) {
		this.name = name;
		this.species = species;
		this.numberOfWheels = numberOfWheels;
	}

	whatKindOf() {
		return `${this.name} is a ${this.species} that has ${this.numberOfWheels} wheels.`;
	}
}

class Car extends Vehicle {
	constructor(name, species, numberOfWheels, brand) {
		super(name, species, numberOfWheels);
		this.brand = brand;
	}
}

const sonata = new Car('sonata', 'car', 4, 'hyundai');
console.log(sonata);
console.log(sonata.whatKindOf());
console.log(sonata.brand);
console.log(sonata.numberOfWheels);
