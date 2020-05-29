class MyMath {
  constructor(firstNum, secondNum) {
    this.firstNum = firstNum;
    this.secondNum = secondNum;
  }

  getNumbers() {
    let numsArr = [];
    numsArr.push(this.firstNum, this.secondNum);
    return numsArr;
  }

  add() {
    return this.firstNum + this.secondNum;
  }

  substract() {
    if (this.firstNum >= this.secondNum) {
      return this.firstNum - this.secondNum;
    } else {
      return this.secondNum - this.firstNum;
    }
  }

  multiply() {
    return this.firstNum * this.secondNum;
  }
}

const myNums = new MyMath(9, 2);


console.log(myNums.getNumbers());
console.log(myNums.add());
console.log(myNums.substract());
console.log(myNums.multiply());

