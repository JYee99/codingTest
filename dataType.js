// Math 메서드
let a = 13;
let b = 4;
console.log(Math.abs(-a)); // 절대 값, 13
console.log(Math.ceil(a / b)); // 올림, 4
console.log(Math.floor(a / b)); // 내림, 3
console.log(Math.round(a / b)); // 반올림, 3
console.log(Math.trunc(-a / b)); // 버림, -3 (내림의 경우 -4)
console.log(Math.pow(a, b)); // a의 b승, 28561

// 문자열 타입 빌트인 메서드
let c = "Hello, World!";
console.log(c.length); // 문자열 길이, 13
console.log(c.split(",")); // 특정 문자열 기준으루 나누기, ["Hello", "World"]
console.log(c.startsWith("Hello")); // 특정 문자열로 시작하는지 확인, true
console.log(c.endsWith("World!")); // 특정 문자열로 끝나는지 확인, true
console.log(c.includes("llo,")); // 특정 문자열을 포함하는지 확인, true
console.log(c.indexOf("World")); // 특정 문자열의 시작 위치 확인, 7
console.log(c.lastIndexOf("l")); // 특정 문자열의 마지막 위치 확인, 10
console.log(c.replace("World", "JavaScript")); // 특정 문자열 다른 문자열로 대체, "Hello, JavaScript!"
console.log(c.toUpperCase()); // 대문자로 변환
console.log(c.toLowerCase()); // 소문자로 변환
console.log(c.trim()); // 양쪽 공백 제거, "Hello, World!"
console.log(c.concat("!!")); // 문자열 연결, "Hello, World!!!"

// 오브젝트 타입 선언
const obj = {
  name: "Jin Yeong",
  age: 26,
};
console.log(obj.name); // Jin Yeong
console.log(obj["age"]); // 26
// 요소 추가
obj.fullName = "Jin Yeong Kim";
console.log(obj.fullName); // Jin Yeong Kim;
// 요소 삭제
delete obj.age;
console.log(obj.age); // undefined

// 배열 타입 선언
const arr = [1, 2, 3];
console.log(arr[0]); // 1
console.log(arr[1]); // 2
console.log(arr.length); // 배열 길이 구하기, 3
// 배열 요소 추가
arr.push(4);
console.log(arr[3]); // 4
arr.pop(); // 배열의 마지막 요소 삭제
console.log(arr); // [1, 2, 3]

// 구조 분해 할당
// 배열
const arr2 = ["a", "b", "c"];
const [, first, second] = arr2;
console.log(first, second); // b c;

// 객체
const obj2 = { name: "진영", firstName: "김" };
const { name, firstName } = obj2;
console.log(name, firstName); // 진영 김

// 스프레드 연산자
// 배열 병합
const firstNumbers = [2, 3, 4, 5];
const secondNnumbers = [6, 7, 8, 9];
const numbers = [...firstNumbers, ...secondNnumbers];
console.log(numbers); // [2, 3, 4, 5, 6, 7, 8, 9]

// 객체 병합
const person = {
  name: "Jin Yeong Kim",
  familyName: "Kim",
  givenName: "Jin Yeong",
  country: "Korea",
};
const address = {
  country: "South Korea",
  city: "Seoul",
};
const merge = { ...person, ...address };
console.log(merge); // {name: 'Jin Yeong Kim', familyName: 'Kim', givenName: 'Jin Yeong', country: 'South Korea', city: 'Seoul'} 키가 같은 객체를 병합하면 나중에 스프레드 연산자를 사용한 객체로 덮음

// 배열 내 같은 요소 제거
const names = ["K", "L", "P", "K", "L", "P"];
const uniqueNames = [...new Set(names)];
console.log(uniqueNames); // ["K", "L", "P"] 중복 요소 제거

// 자주 활용하는 배열 기법
// push 메서드
const arr3 = [1, 2, 3];
arr3.push(4); // [1, 2, 3, 4]

// concat 메서드
let arr4 = [1, 2, 3];
arr4 = arr4.concat([4, 5]);
console.log(arr4); // [1, 2, 3, 4, 5]

// 스프레드 연산자로 데이터 추가
arr4 = [...arr4, ...[6, 7]];
console.log(arr4); // [1, 2, 3, 4, 5, 6, 7]

// unshift 메서드, 배열의 맨 앞에 데이터를 추가
arr4.unshift(0);
console.log(arr4); // [0, 1, 2, 3, 4, 5, 6, 7]

// splice 메서드, 첫 번째 매개변수는 배열 내 시작 지점을 의미 두 번째 매개변수는 삭제할 데이터의 수를 의미하고 이후로는 추가할 데이터를 받음. 두 번째 매개변수를 0으로 설정하면 중간에 데이터를 추가할 수 있음
arr4.splice(2, 0, 999);
console.log(arr4); // [0, 1, 2, 999, 3, 4, 5, 6, 7]

// 배열에서 데이터 삭제
// pop = 마지막 데이터 삭제
// shift = 맨 앞 데이터 삭제
// splice = 중간 데이터 삭제, 첫 번째 매개변수로 시작 지점을 정하고 두 번째 매개변수로 삭제할 데이터의 수를 정함
const deleteArr = [1, 2, 3, 4, 5];
deleteArr.splice(2, 2);
console.log(deleteArr); // [1, 2, 5]

// 고차 함수를 이용하여 데이터에 특정 연산 적용
// 배열에 제곱 연산 적용
const num = [1, 2, 3, 4, 5];
const squares = num.map((num) => num * num);
console.log(squares); // [1, 4, 9, 16, 25]

// 짝수 필터링
const num2 = [1, 2, 3, 4, 5, 6, 7];
const evens = num2.filter((num) => num % 2 === 0);
console.log(evens); // [2, 4, 6]

// 전체 합
const num3 = [1, 2, 3, 4, 5, 6, 7];
const sum = num3.reduce((a, b) => a + b);
console.log(sum); // 28
