# JS Study
- 자바스크립트를 공부하며 주요 내용들과 예제를 정리함.
- 교재: 모던 자바스크립트 입문(이소 히로시 지음)

***

## getMonth() 메서드에 +1을 해야 하는 이유
- `new Date()` 메서드 사용 시 `getMonth()` 는 0~11이기 때문에 **+1**을 해줘야 한다.
```javascript
const now = new Date();
console.log(`오늘은 ${now.getMonth()+1} 월 ${now.getDate()} 일입니다.`); //오늘은 2 월 19 일입니다.

console.log(now.getMonth()); //1
```

## 함수(function)의 동작원리
- 함수를 호출하며 인수(argument)를 전달하면, 함수 정의문의 인자(parameter)로 받아 실행 결과를 반환(return)한다.
- **자판기의 이미지가 연상됨.**
> 1. 특정 음료의 가격에 맞는 금액 투입(argument)
> 2. 특정 음료의 버튼 누름(call)
> 3. 투입된 금액과 호출된 음료의 값을 비교
> 4. 가격이 맞으면 해당 음료 반환(return)

## 자바스크립트의 함수는 일급객체
- 함수를 값으로 쓸 수 있음. -> 변수에 할당 가능
- 다른 함수의 인수(argument)로 전달 가능