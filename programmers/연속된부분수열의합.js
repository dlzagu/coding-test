function solution(sequence, k) {
  let left = 0;
  let right = 0;
  let sum = sequence[0];
  let answer = [0, Infinity]; // 최종 결과값을 저장할 배열

  while (left <= right && right < sequence.length) {
    if (sum < k) {
      right++;
      if (right < sequence.length) {
        sum += sequence[right];
      }
    } else if (sum > k) {
      sum -= sequence[left];
      left++;
    } else {
      if (right - left < answer[1] - answer[0]) {
        answer = [left, right];
      }
      right++;
      if (right < sequence.length) {
        sum += sequence[right];
      }
    }
  }

  return answer; // 최종 결과값 반환
}
