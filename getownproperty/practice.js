const person = {
  name: 'Tom',
  age: 17,
  sayHello() {
    console.log('Hello! ' + this.name);
  }
};


Object.defineProperty(person, 'sayHello', {enumerable: false});
for (let p in person) console.log(p);


// console.log(Object.getOwnPropertyDescriptor(person, 'sayHello'));
