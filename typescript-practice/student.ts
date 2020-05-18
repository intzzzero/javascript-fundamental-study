import { Person } from './person';

class Student extends Person {
  study(): string {
    return `${this.name} is studying.`;
  }
}

const student = new Student('Kim');

console.log(student.sayHello());
console.log(student.study());