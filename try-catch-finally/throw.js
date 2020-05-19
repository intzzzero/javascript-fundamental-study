function permutation(a) {
  if (! (a instanceof Array)) {
    throw new Error(a + ' is not an array');
  }
}
permutation('ABC'); // Error: ABC is not an array