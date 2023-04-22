function solution(targets) {
  // targets 배열을 첫 번째 요소를 기준으로 내림차순 정렬
  targets = targets.sort((a, b) => b[0] - a[0]);
  // 인덱스 변수 초기화
  let index = 1;
  // 카운트 변수 초기화
  let count = 1;
  // 현재 시작 시간 변수 초기화
  let currentS = targets[0][0];

  // 인덱스가 targets 배열 길이보다 작을 때까지 반복
  while (index < targets.length) {
    // 현재 시작 시간이 다음 요소의 종료 시간보다 작으면 인덱스 증가
    if (currentS < targets[index][1]) index++;
    // 현재 시작 시간이 다음 요소의 종료 시간보다 크거나 같으면
    else {
      // 현재 시작 시간을 다음 요소의 시작 시간으로 변경
      currentS = targets[index][0];
      // 인덱스 증가
      index++;
      // 카운트 증가
      count++;
    }
  }

  // 카운트 반환
  return count;
}
