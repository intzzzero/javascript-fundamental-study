function fact(n) {
  let k = 1, i = 1;
  while (i < n) {
    console.log('i = ' + i + ', k = ' + k);
    k *= (++i); 
  }
  console.log('i = ' + i + ', k = ' + k);
}

fact(5);