function solution(sequence, k) {
  let answer = [0, 10000000]; // 최종 결과값을 저장할 배열

  let dp = []; // 다이나믹 프로그래밍을 위한 배열
  for (let i = 0; i < sequence.length; i++) {
    dp.push(new Array(i + 1).fill(0)); // 2차원 배열 생성
  }
  for (let i = 0; i < sequence.length; i++) dp[i][0] = sequence[i]; // dp 배열 초기화

  for (let i = 1; i < sequence.length; i++) {
    // 다이나믹 프로그래밍 수행
    for (let j = 1; j <= i; j++) {
      dp[i][j] = (sequence[i] + dp[i - 1][j - 1]) % 1e9;
      if (dp[i][j] == k) {
        let diff = answer[1] - answer[0]; // 현재 결과값과의 차이 계산
        if (diff > j) answer = [i - j, i]; // 차이가 더 작으면 결과값 갱신
      }
    }
  }

  console.log(1e9);
  return answer; // 최종 결과값 반환
}
