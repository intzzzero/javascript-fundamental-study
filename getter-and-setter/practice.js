const robot = {
  _modelName: 'Coderoid',
  _serialNumber: 20200413,

  get fullInfo() {
    // if (this._modelName && this._serialNumber) {
    //   return `${this._modelName} ${this._serialNumber}`;
    // } else {
    //   return 'Missing a model name or a serial number.';
    // }
    if (typeof this._serialNumber === 'number') {
      return typeof this._serialNumber;
    }
  }
}

console.log(robot.fullInfo);

