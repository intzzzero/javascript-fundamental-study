// 수정 메서드 : 원본 배열 수정
let fruits = ['apple', 'banana', 'melon', 'peach', 'blueberry'];

// push : 배열 마지막에 추가
fruits.push('pineapple');
console.log(fruits);

// pop : 배열 마지막 요소 제거
fruits.pop();
console.log(fruits);

// shift : 배열 첫 번째 요소 제거 후 모든 요소를 왼쪽으로 이동
fruits.shift();
console.log(fruits);

// unshift : 배열 맨 앞에 요소 추가 후 모든 요소를 오른쪽으로 이동
fruits.unshift('pineapple');
console.log(fruits);

// splice : 특정 위치에 요소를 추가, 삭제, 교체
// splice(인덱스, 삭제할 요소 개수, 추가할 요소)
// 인덱스 1부터 2 개의 요소 제거 후 'pineapple'과 'grape' 추가
fruits.splice(1, 2, 'lemon', 'grape');
console.log(fruits);

// 첫 번째 인수만 넘기면 해당 인덱스 이후의 요소 모두 삭제
fruits.splice(2);
console.log(fruits);

// 두 번째 인수에 0을 넘기면 삭제 없이 새로운 요소 추가
fruits.splice(1, 0, 'cherry');
console.log(fruits);

// sort : 요소를 정렬
let numbers = [4, 6, 8, 1, 15, 3, 36, 2, 51, 7, 19, 24];
// 비교함수를 넣어야 인접한 두 개의 요소를 비교하여 정렬함
// f(a, b) < 0 이면 a를 b보다 작은 인덱스로 정렬
// f(a, b) == 0 이면 a와 b의 순서 그대로 둠
// f(a, b) > 0 이면 b를 a보다 작은 인덱스로 정렬
numbers.sort(function(a, b) { return a - b; });
console.log(numbers); // [1, 2, 3, 4, 6, 7, 8, 15, 19, 24, 36, 51]

// 비교 함수를 지정하지 않으면 요소를 문자열로 변환하여 사전순으로 정렬
fruits.sort();
console.log(fruits); 