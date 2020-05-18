export class Person {
    constructor(name) {
        this.name = name;
    }
    sayHello() {
        return `Hello, ${this.name}`;
    }
}
const person = new Person('Jeong');
console.log(person.sayHello());
