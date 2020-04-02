const howOld = (age, year) => {
  const thisYear = 2020;
  let thenAge;
  if (year > thisYear) {
    thenAge = age + (year - thisYear);
    return `You will be ${thenAge} in the year ${year}`;
  } else if (year < thisYear && age >= (thisYear - year)) {
    thenAge = age - (thisYear - year);
    return `You were ${thenAge} in the year ${year}`;
  } else if (year < thisYear && age < (thisYear - year)) {
    thenAge = (thisYear - year) - age;
    return `The year ${year} was ${thenAge} years before you were born`
  } 
}

console.log(howOld(32, 2050));