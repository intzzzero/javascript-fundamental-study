localStorage.setItem('name', 'codeAmeba');
localStorage.getItem('name');
localStorage.setItem('currentYear', 2020);
localStorage.getItem('currentYear');

localStorage.removeItem('name');
localStorage.clear();

localStorage.setItem('robot', JSON.stringify({name: 'coderoid', serialNumber: 1542, author: 'Sooyoung Jeong'}));
JSON.parse(localStorage.getItem('robot'));