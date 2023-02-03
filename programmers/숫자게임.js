function solution(A, B) {
  let answer = 0;
  A.sort((a, b) => a - b);
  B.sort((a, b) => a - b);

  let aIdx = 0;
  let bIdx = 0;

  while (bIdx < B.length && aIdx < A.length) {
    if (B[bIdx] > A[aIdx]) {
      aIdx++;
      bIdx++;
      answer++;
    } else {
      bIdx++;
    }
  }

  return answer;
}
