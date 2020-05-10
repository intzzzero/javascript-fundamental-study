// 접근자 메서드 : 원본 유지, 새로운 배열 반환

const fruits = ['apple', 'banana', 'melon', 'peach', 'blueberry'];

// join : 모든 요소를 문자열로 변환 후 인수로 받은 문자와 연결하여 반환
console.log(fruits.join('-'));
// console.log(fruits);

// concat : 인수로 받은 값을 배열에 추가하여 새로운 배열 생성
console.log(fruits.concat('cherry', 'grape'));

// 인수를 배열로 전달하면 자동의 배열 해체 후 추가
console.log(fruits.concat(['cherry', 'grape']));

// 다만, 가장 바깥의 배열만 해체하므로 중복 배열은 배열로 추가됨
console.log(fruits.concat(['lemon', ['strawberry', 'watermelon']]));

// slice : 선택된 만큼의 요소를 새로운 배열로 반환
// slice(begin index, end index)
// 'begin index'부터 'end index' 전까지 반환함
// 'end index'를 생략하면 'begin index'부터 끝까지 반환
console.log(fruits.slice(1, 4));
console.log(fruits.slice(3));

// indexOf, lastIndexOf : 인수로 전달한 요소의 인덱스 반환
// indexOf는 왼쪽부터 검색하여 반환
// lastIndexOf는 오른쪽부터 검색하여 반환
// 찾는 요소가 배열에 없을 경우 -1 반환
// 두 번째 인수는 검색을 시작할 인덱스이며 생략 가능
const numbers = [9, 2, 3, 5, 4, 8, 5, 6, 7];
console.log(numbers.indexOf(5)); // 3
console.log(numbers.lastIndexOf(5)); // 6

// toString, toLocaleString : 배열의 요소를 문자열로 변환 후 쉼표로 연결하여 반환
// Object.prototype에 같은 이름의 메서드가 존재하며 다시 정의한 메서드임
Object.prototype.toString === Array.prototype.toString // false
Object.prototype.toString === Array.prototype.__proto__.toString // true

console.log(fruits.toString()); // apple,banana,melon,peach,blueberry

// toLocaleString은 해당 지역에 맞는 문자열로 바꿔 반환함
const date = new Date();

console.log(['Seoul', 'Republic of Korea', date].toString());
// Seoul,Republic of Korea,Sat May 09 2020 20:00:19

console.log(['Seoul', 'Republic of Korea', date].toLocaleString());
// Seoul,Republic of Korea,2020. 5. 9. 오후 8:00:19