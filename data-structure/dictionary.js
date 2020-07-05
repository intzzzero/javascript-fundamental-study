// how to make dictionary
// 1. literal
dictionary1 = { name: [ 'Ryan', 'Lee' ], job: 'sw engineer', address: { city: 'seoul', zip_code: '1234' } };

// 2. assignement to empty object
dictionary2 = {};
dictionary2['name'] = [ 'Ryan', 'Lee' ];
dictionary2['job'] = 'sw engineer';
dictionary2['address'] = { city: 'seoul', zip_code: '1234' };

// 3. Object method
let dictionary3 = Object({ name: [ 'Ryan', 'Lee' ], job: 'sw engineer', address: { city: 'seoul', zip_code: '1234' } });
