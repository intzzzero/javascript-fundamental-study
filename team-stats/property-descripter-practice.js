const group = {
  groupName: 'T1',
  sayGroupName() {console.log('belong to ' + this.groupName)}
}

const faker = Object.create(group, {
  name: {
    value: 'Sang-hyuk Lee',
    writable: true,
    enumerable: true,
    configurable: false
  },
  age: {
    value: 25,
    writable: true,
    enumerable: true,
    configurable: true
  },
  sayName: {
    value: function() {console.log(`I'm ${this.name} of ${this.groupName}`)},
    writable: true,
    enumerable: false,
    configurable: true
  }
});

// console.log(faker);
// console.log(faker.groupName);
// faker.sayGroupName();
// faker.sayName();
console.log('name' in faker);