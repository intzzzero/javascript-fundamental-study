function memorize(f) {
  let cache = {};
  return function() {
    let key = '';
    for (let i = 0; i < arguments.length; i++) {
      key += arguments[i] + ',';
    }
    if (cache[key] === undefined) {
      cache[key] = f.apply(null, arguments);
    }
    return cache[key];
  };
}