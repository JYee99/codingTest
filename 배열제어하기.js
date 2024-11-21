// 조건
// 배열 길이는 2 이상 1,000 이하, 각 배열의 데이터 값은 -100,000 이상 100,000 이하
function sol(arr) {
  const newArr = [...new Set(arr)]; // 중복값 제거
  newArr.sort((a, b) => b - a); // 내림차순 정렬
  console.log(newArr);
  return newArr;
}
sol([3, 6, 1, 2, 4, 6, 7, 12, 2, 1, 2, 2]);

// Set은 집합을 생성하는 자바스크립트 내장 객체이고 중복값을 허용하지 않으므로 중복 문제를 한 번에 해결 후 스프레드 연산자로 다시 배열로 변환
