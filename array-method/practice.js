function sliceCityFromAddress(address) {
  let cityIndex = address.indexOf('시');
  let newAddress;

  if (address[3] !== ' ') {
    newAddress = address.slice(6);
  } else {
    // newAddress = address.slice(0, cityIndex-3) + ' ' + address.slice(cityIndex+2);    
    newAddress = address.slice(0, cityIndex-3).concat(address.slice(cityIndex+1));    
  }
  return console.log(newAddress);
}

let myAddress = '경기도 성남시 분당구 중앙공원로 53';
sliceCityFromAddress(myAddress);

sliceCityFromAddress('경기도 성남시 분당구 판교역로 235');
sliceCityFromAddress('경기도 성남시 중앙공원로 53');
sliceCityFromAddress('서울특별시 강남구 테헤란로 427 위워크타워');

