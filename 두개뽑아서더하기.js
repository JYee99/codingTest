// 정수 배열 numbers가 주어집니다. numbers에서 서로 다른 인덱승 ㅔ있는 2개의 수를 뽑아 더해 만들 수 있는 모든 수를 배열에 오름 차수능로 담아 반환하는 sol 함수를 완성하세요.
// 제약 조건 1. numbers의 길이는 2 이상 100이하, 2. numbers의 모든 수는 0이상 100 이하

// 1. 배열에서 두 수를 선택하는 모든 경우의 수를 구함
// 2. 1에서 구한 수를 새로운 배열에 저장하고 중복값을 제거
// 3. 배열을 오름 차순으로 정렬하고 반환

function sol(numbers) {
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < i; j++) {
      result.push(numbers[i] + numbers[j]);
    }
  }
  result = [...new Set(result)].sort((a, b) => a - b);
  console.log(result);
  return result;
}

sol([5, 0, 2, 7]);
