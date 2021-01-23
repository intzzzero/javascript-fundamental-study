function buyAsync(mymoney) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      var payment = parseInt(prompt('지불 금액을 입력하시오.'));
      var balance = mymoney - payment;
      if (balance > 0) {
        console.log(`${payment}원을 지불했습니다.`);
        resolve(balance);
      } else {
        reject(`잔액은 ${mymoney}원 입니다.`);
      }
    }, 1000);
  });
}

buyAsync(500)
  .then(function (balance) {
    console.log(`잔액은 ${balance}원 입니다.`);
    return buyAsync(balance);
  })
  .then(function (balance) {
    console.log(`잔액은 ${balance}원 입니다.`);
    return buyAsync(balance);
  })
  .then(function (balance) {
    console.log(`잔액은 ${balance}원 입니다.`);
    return buyAsync(balance);
  })
  .catch(function (error) {
    console.log(error);
  });
