const spaceShip = {};

Object.defineProperty(spaceShip, 'name', {
  value: 'codeship',
  writable: false,
  enumerable: false,
  configurable: false
});

console.log(Object.getOwnPropertyDescriptor(spaceShip, 'name'));
// {value: "codeship", writable: true, enumerable: false, configurable: true}

Object.defineProperty(spaceShip, 'name', {
  writable: true
});

console.log(Object.getOwnPropertyDescriptor(spaceShip, 'name'));

