import crypto from 'crypto';

var shasum = crypto.createHash('sha1');
shasum.update('wecode');

var hash_value = shasum.digest('hex');
console.log(hash_value);
console.log(hash_value.length);

var shasum2 = crypto.createHash('sha1');
shasum2.update('1234');

var hash_value_1234 = shasum2.digest('hex');
console.log(hash_value_1234);
console.log(hash_value_1234.length);
