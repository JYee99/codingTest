// 문제 설명
// 2차원 행렬 arr1과 arr2를 입력받아, arr1에 arr2를 곱한 결과를 반환하는 함수, solution을 완성해주세요.

// 제한 조건
// 행렬 arr1, arr2의 행과 열의 길이는 2 이상 100 이하입니다.
// 행렬 arr1, arr2의 원소는 -10 이상 20 이하인 자연수입니다.
// 곱할 수 있는 배열만 주어집니다.

function solution(arr1, arr2) {
  // 행렬 arr1과 arr2의 행과 열의 수
  const a1 = arr1.length;
  const b1 = arr1[0].length;

  const a2 = arr2.length;
  const b2 = arr2[0].length;

  // 결과를 저장할 2차원 배열 초기화
  const result = [];
  for (let i = 0; i < a1; i++) {
    result.push(new Array(b2).fill(0));
  }

  // 첫 번째 행렬 arr1의 각 행과 두 번째 행렬 arr2의 각 열에 대한 반복문
  for (let i = 0; i < a1; i++) {
    for (let j = 0; j < b2; j++) {
      // 두 행렬의 데이터를 곱해 result 배열에 더해줌
      for (let k = 0; k < b1; k++) {
        result[i][j] += arr1[i][k] * arr2[k][j];
      }
    }
  }

  return result;
}
