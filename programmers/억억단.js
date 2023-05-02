function solution(e, starts) {
  // 1) 자연수 e까지의 약수의 개수를 담을 배열을 생성합니다.
  const numsArr = new Array(e + 1).fill(0);

  // 2) 1부터 e까지의 각 자연수에 대해 약수의 개수를 구합니다.
  for (let i = 1; i <= e; i++) {
    // 2-1) i의 배수를 순회하면서 numsArr에 1씩 더해줍니다.
    for (let j = i; j <= e; j += i) {
      numsArr[j]++;
    }
  }
  console.log(numsArr);
  // 3) e부터 1까지의 범위에서 각 범위의 최댓값을 저장할 배열을 생성합니다.
  const maxArr = new Array(e + 1).fill(e);

  // 4) numsArr에서 최댓값을 가지는 인덱스를 저장하는 변수를 초기화합니다.
  let maxIdx = e;

  // 5) e부터 1까지 범위를 역순으로 순회합니다.
  for (let i = e; i >= 1; i--) {
    // 6) 현재 위치의 인덱스 i의 약수의 개수가 이전 위치의 최댓값을 가지는 약수의 개수보다 큰 경우,
    // maxArr[i]는 i를 최댓값으로 갱신합니다.
    if (numsArr[i] >= numsArr[maxIdx]) {
      maxIdx = i;
    }
    // 7) maxArr[i]는 현재까지 최댓값의 인덱스 maxIdx를 저장합니다.
    maxArr[i] = maxIdx;
  }

  // 8) 각 시작 위치에 대해 maxArr에서 최댓값을 찾아 반환합니다.
  return starts.map((s) => maxArr[s]);
}
