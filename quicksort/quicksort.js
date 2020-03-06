// x : 정렬할 배열
// first : 정렬할 첫 번째 요소의 위치
// last : 정렬할 마지막 요소의 위치

function quicksort(x, first, last) {
  var p = x[Math.floor((first + last) / 2)];
  for (var i = first, j = last; ; i++, j--) {
    while (x[i] < p) i++; // 왼쪽부터 차례대로 p 이상의 요소 검색
    while (p < x[j]) j--; // 오른쪽부터 차례대로 p 이하의 요소 검색
    if (i >= j) break; // i와 j가 교차하면 다음으로 이동
    var w = x[i]; x[i] = x[j]; x[j] = w; // 발견하면  x[i]와 x[j]를 교환
  }
  if (first < i - 1) quicksort(x, first, i - 1); // 왼쪽에 두 개 이상 남아 있으면 왼쪽을 다시 정렬
  if (j + 1 < last) quicksort(x, j + 1, last); // 오른쪽에 두 개 이상 남아 있으면 오른쪽을 다시 정렬
}

var a = [7, 2, 5, 1, 8, 9, 3, 16, 43, 59, 31, 11, 27, 6, 88];
quicksort(a, 0, a.length - 1);
console.log(a);