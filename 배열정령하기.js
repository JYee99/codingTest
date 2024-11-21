function sol(arr) {
  arr.sort((a, b) => a - b);
  console.log(arr);
  return arr;
}
sol([-3, 1, 5, 10, 2, -4]);

// 익명함수 sort가 인수로 a, b를 받아 a에서 b를 뺀 결과를 반환. 이렇게 하면 오름차순 배열을 반환할 수 있음
// 1. 첫 번째 인자 a가 두 번째 인자 b보다 앞에 나와야 한다면 음수를 반환
// 2. 첫 번째 인자 a가 두 번째 인자 b보다 뒤에 나와야 한다면 양수를 반환
// 3. 위치 변경을 하지 않는다면 0을 반환
